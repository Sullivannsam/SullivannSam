#include <stdio.h>
#include <stdbool.h>



int main(){

    int x; // declaration
    x = 19; // initialization
    int y = 1234; // declaration + initialization

    int age = 19;                           // integer
    float gpa = 123.45;                    // floating point number
    char grade = 'A';                     // single character note using only single quote %c
    char name[] = "Sam";            // array of characters
                                        // to print a name using %s (s is for string)

    // printf("I am age year old", age); if we want to using a variable we use %d and after the double " " we using , and put the name variable 
    // example:

    // printf("I am %d year old", age);


    printf("Hi, my name is: %s", name);
    printf("\nI am %d years old", age);
    printf("\nMy GPA is %.2f", gpa);
    printf("\nMy Grade is %c", grade);
    
    bool e = true;
    bool f = false;

    printf("\nis student %d", f);



    return 0;
}







