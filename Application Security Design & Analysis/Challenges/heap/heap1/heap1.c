#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <sys/types.h>

#define BUF_SIZE 16 

struct foo {
  int priority;
  char *name;
};

int main(int argc, char **argv)
{
  struct foo *i1, *i2;

  i1 = malloc(sizeof(struct foo));
  i1->priority = 1;
  i1->name = malloc(BUF_SIZE);

  i2 = malloc(sizeof(struct foo));
  i2->priority = 2;
  i2->name = malloc(BUF_SIZE);

  strcpy(i1->name, argv[1]);
  strcpy(i2->name, argv[2]);

  printf("and that's a wrap. hope you folk'll had fun!\n");
  system("");
}
