#include<stdio.h>
typedef struct{
    char name[10];
    int ages;
    int total;
} gradeinformation;

int main(){
  gradeinformation s1, s2;
  int total;

  printf("Enter the detail for student1:\n");
  printf("Name: ");
  scanf("%[^\n]", s1.name);

  printf("Age: ");
  scanf("%d", &s1.ages);

  printf("total score: ");
  scanf("%d", &s1.total);

  getchar();

  printf("\nEnter the detail for student2:\n");
  printf("Name: ");
  scanf("%[^\n]" ,s2.name);

  printf("Age: ");
  scanf("%d", &s2.ages);

  printf("total score: ");
  scanf("%d", &s2.total);

  printf("\ngrading information\n");
  printf("student1\n name: %s , ages: %d, total: %d\n", s1.name, s1.ages, s1.total);
  printf("student2\n name: %s , ages: %d, total: %d\n", s2.name, s2.ages, s2.total);

  return 0;
}