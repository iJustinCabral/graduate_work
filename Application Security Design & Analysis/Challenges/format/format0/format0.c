#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <string.h>
#include <fcntl.h>

#define INPUT_SIZE 8

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
  char buffer[{{buffsize}}];

  fgets(buffer, INPUT_SIZE, stdin);
  printf(buffer);
  read(STDIN_FILENO, buffer, 64);
}

int main(int argc, char **argv)
{
  setbuf(stdout, NULL);
  setbuf(stdin, NULL);
  setbuf(stderr, NULL);

  printf("%p\n", &win);
  vuln();
}
