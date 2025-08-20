#include <stdio.h>
int main(){

    int age;

    printf("Enter Your Age:");
    scanf("%d", &age);

    if(age >= 18){
        printf("You are an adult");
    }
    else if(age == 17){
        printf("Not allow ");
    }
    else{
        printf("You can not old enough to vote");
    }




    return 0;
}