#include <stdio.h>
int main(){


    char name[25];
    char gender[6];
    char grade;
    int age;
    float math, physics, chemistry;
    float score, avg;


    printf("Enter Your Name: ");
    scanf("%s", &name);

    printf("Enter Your Gender: ");
    scanf("%s", &gender);

    printf("Enter Your Age: ");
    scanf("%d", &age);
    
    printf("Enter Your Math Score: ");
    scanf("%f", &math);
    
    printf("Enter Your Physics Score: ");
    scanf("%f", &physics);
    
    printf("Enter Your Chemistry Score: ");
    scanf("%f", &chemistry);
    
    score = math + physics + chemistry;
    avg = score / 3;
    
    printf("\nYour Name is %s", name);
    printf("\nYour Gender is %s", gender);
    printf("\nYour Age is %d", age);
    printf("\nYour Average is %2.f \n", avg);
    printf("\nYour Score is %2.f \n", score);
    
    

    
    
    if(avg > 90 && avg <= 100){
        printf("Your Grade Is A\n");
    }
    else if(avg > 80 && avg <= 90){
        printf("Your Grade is B\n");
    }
    else if(avg > 70 && avg <= 80){
        printf("Your Grade is C\n");
    }
    else if(avg > 60 && avg <= 70 ){
        printf("Your Grade is D\n");
    }
    else if(avg >= 50){
        printf("Your Grade is E\n");
    }
    else{
        printf("You Are Fail!\n");
    }

        































    return 0;
}