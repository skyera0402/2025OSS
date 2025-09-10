#include <stdio.h>

int main() {
    double num;
    int integerPart;
    double fractionPart;

    printf("숫자를 입력하세요: ");
    scanf("%lf", &num);

    // 정수 부분 추출
    integerPart = (int)num;
    // 소수 부분 추출
    fractionPart = num - integerPart;

    // 음수 처리 주의 (예: -2.7 같은 경우)
    if (num >= 0) {
        if (fractionPart >= 0.5)
            integerPart += 1;
    } else {
        if (fractionPart <= -0.5)
            integerPart -= 1;
    }

    printf("반올림 결과: %d\n", integerPart);

    return 0;
}