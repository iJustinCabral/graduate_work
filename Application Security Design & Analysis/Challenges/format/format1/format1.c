#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <fcntl.h>
#include "secret.h"


#define INPUT_SIZE 24 
int target;

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
  volatile char buffer1[32];
  char buffer[BUFF_SIZE];
 
  fgets(buffer, INPUT_SIZE, stdin);
  printf(buffer);
  read(STDIN_FILENO, buffer, 64);

  if(target != 0xbad) {
    exit(1);
  }
}

int main(int argc, char **argv)
{  
  setbuf(stdout, NULL);
  setbuf(stdin, NULL);
  setbuf(stderr, NULL);

  printf("%p\n", &win);
  printf("%p\n", &target);
  vuln();
}
