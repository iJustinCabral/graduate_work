#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <fcntl.h>


void win() {
  int fd;
  char buffer[64];

  if((fd = open("./flag.txt", O_RDONLY)) < 0){
    perror("open failed!\n");
    exit(1);
  }

  int c = read(fd, buffer, 64);
  write(STDOUT_FILENO, buffer, c);

  exit(0);
}


void vuln()
{
  char buffer[64];

  fgets(buffer, 64, stdin);
  printf(buffer);
  puts("Oh no, you didn't solve it!");
  exit(1);
}

int main(int argc, char **argv)
{  
  setbuf(stdout, NULL);
  setbuf(stdin, NULL);
  setbuf(stderr, NULL);

  printf("%p\n", &win);
  vuln();
}
