#include <stdio.h>

int main(){
    float circumference, area, radius;
    float PI = 3.1416;


    printf("Enter the number of circumference and circle area:");
    scanf("%f", &radius);


    circumference = 2 * PI * radius;
    area = PI * radius * radius;
    
    

    printf("The circumference is: %.2f\n", circumference);
    printf("The circle area is: %.2f\n", area);


    return 0;
}

