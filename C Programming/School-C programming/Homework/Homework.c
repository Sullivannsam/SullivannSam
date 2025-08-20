// #include<stdio.h>
// #include <string.h>
// int main(void){
//     char name[25];
//     int age;
//     char gender[25];
//     float score;
//     int Avg;


//     printf("Enter Your Name:");
//     fgets(name, 25, stdin);
//     name[strlen(name)-1] = '\0';

//     printf("Enter Your Gender:");
//     fgets(gender, 25, stdin);
//     gender[strlen(gender)-1] = '\0';

//     printf("Enter Your Age:");
//     scanf("%d", &age);

//     printf("\nYour Name is %s", name);
//     printf("\nYour age is %d years old", age);
//     printf("\nGender: %s", gender);
    
//     printf("\nEneter Your Score:");
//     scanf("%f", &score);
//     if(score >=100){
//         printf("you are grade A");
//     }
//     else if (score >=90){
//         printf("You are grade B");
//     }
//     else{
//         printf("You are fail");
//     }
    



//     // printf("\nYour Score is %f", score);

    

//     return 0;

// }


#include <stdio.h>

int main() {
    char name[50];
    char gender[10];
    int age;
    int score;
    char grade;

    // Input
    printf("Enter your name: ");
    scanf("%[^\n]", name); // Read full line for name
    getchar(); // Clear newline

    printf("Enter your gender: ");
    scanf("%s", gender);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your score: ");
    scanf("%d", &score);

    // Determine grade
    if (score > 90 && score <= 100) {
        grade = 'A';
    } else if (score > 80 && score <= 90) {
        grade = 'B';
    } else if (score > 70 && score <= 80) {
        grade = 'C';
    } else if (score > 60 && score <= 70) {
        grade = 'D';
    } else if (score >= 50) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    // Output
    printf("\n--- Result ---\n");
    printf("Name: %s\n", name);
    printf("Gender: %s\n", gender);
    printf("Age: %d\n", age);
    printf("Score: %d\n", score);
    printf("Grade: %c\n", grade);

    return 0;
}