#include <stdio.h>
#include <string.h>
int main(){

    // int age;
    // printf("What is your name?");
    // scanf("%d", &age);

    // printf("you are %d", age);

    // int age;

    // printf("How old are you?");
    // scanf("%d", &age);      // input from user

    // printf("You are %d year old", age);

    char name[25];  // bytes limit
    int age;

    // **input form user
    
    // printf("What is your name? ");
    // scanf("%s", &name);
    
    // **age
    
    // printf("How old are you?");
    // scanf("%d", &age);


    // **system code output

    // printf("Hello %s, How are you!", name);
    // printf("\nYou are %d years old!" , age);
    
    // on the top is include the whitespace in the string

    printf("What is your name? ");
    fgets(name, 25, stdin); // fgets is used to read a string without spaces
    name[strlen(name)-1] = '\0';
    
    printf("How old are you?");
    scanf("%d", &age);

    printf("Hello %s, How are You!", name);
    printf("\nYou are %d years old!", age);










    return 0;
}