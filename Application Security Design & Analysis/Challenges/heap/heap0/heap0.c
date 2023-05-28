#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <stdio.h>
#include <sys/types.h>

struct fp {
  int is_valid;
  int (*fp)(const char *);
};

int get_code() {
  int code;
  FILE* f;

  f = fopen("./flag.txt", "r");
  fread(&code, sizeof(int), 1, f); 
  fclose(f);

  return code;
}

int main(int argc, char **argv) {
  char *d;
  struct fp *f;

  d = malloc(32);
  f = malloc(sizeof(struct fp));
  f->fp = puts;
  f->is_valid = get_code();

  memcpy(d, argv[1], strlen(argv[1]));

  if(f->is_valid==get_code()) {
    f->fp(d);
  }
}
