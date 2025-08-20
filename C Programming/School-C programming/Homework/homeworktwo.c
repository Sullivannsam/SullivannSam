#include <stdio.h>

int main() {
    char name[50], gender[10];
    int age;
    float math, physics, chemistry;
    float total, avg;

    // Input personal info
    printf("Enter Name: ");
    scanf(" %[^\n]", name); // read full name with spaces
    printf("Enter Gender: ");
    scanf(" %[^\n]", gender);
    printf("Enter Age: ");
    scanf("%d", &age);

    // Input scores
    printf("Enter Math Score: ");
    scanf("%f", &math);
    printf("Enter Physics Score: ");
    scanf("%f", &physics);
    printf("Enter Chemistry Score: ");
    scanf("%f", &chemistry);

    // Calculate total and average
    total = math + physics + chemistry;
    avg = total / 3;

    // Output info
    printf("\n--- Student Report ---\n");
    printf("Name   : %s\n", name);
    printf("Gender : %s\n", gender);
    printf("Age    : %d\n", age);
    printf("Math   : %.2f\n", math);
    printf("Physics: %.2f\n", physics);
    printf("Chemistry: %.2f\n", chemistry);
    printf("Total  : %.2f\n", total);
    printf("Average: %.2f\n", avg);

    // Grade decision
    if (avg > 90 && avg <= 100) {
        printf("Grade: A\n");
    } else if (avg > 80 && avg <= 90) {
        printf("Grade: B\n");
    } else if (avg > 70 && avg <= 80) {
        printf("Grade: C\n");
    } else if (avg > 60 && avg <= 70) {
        printf("Grade: D\n");
    } else if (avg >= 50) {
        printf("Grade: E\n");
    } else {
        printf("Grade: F\n");
    }

    return 0;
}
