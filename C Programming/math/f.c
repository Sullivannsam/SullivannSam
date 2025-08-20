#include <stdio.h>
#include <math.h>
int main(){
    
    double A;
    double B;
    double C;

    printf("Enter side A");
    scanf("%lf", &A);
    
    printf("Enter side B");
    scanf("%lf", &B);
    
    C = sqrt(A*A + B*B);

    printf("Side C is %lf", C);



    return 0;
}

#include <stdio.h>

int main() {
    char grade;

    printf("Enter your Grade: ");
    scanf("%c", &grade); // Use & to pass address

    switch (grade) {
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
            break; // prevent fall-through
        default:
            printf("Enter only grade A-F");
    }

    return 0;
}
