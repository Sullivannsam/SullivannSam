#include <stdio.h>
int main(){

    char grade;

    printf("Enter your Grade: ");
    scanf("%c", &grade);

    switch(grade){
        case 'A':
            printf("You are excellent");
            break;
        case 'B':
            printf("You are good");
            break;
        case 'C':
            printf("You are average");
            break;
        case 'D':
            printf("You are below average");
            break;
        case 'E':
            printf("You are poor");
            break;
        case 'F':
            printf("You are fail");
            break;
        default:
            printf("Enter Only grade");
    }




    return 0;
}