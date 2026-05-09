export const lessons = [
  {
    id: 1, title: 'C 언어 소개', icon: '📖',
    content: `C 언어는 1972년 데니스 리치가 개발한 범용 프로그래밍 언어입니다.
운영체제, 임베디드 시스템, 게임 엔진 등 다양한 분야에서 사용됩니다.

**특징**
- 절차지향 프로그래밍 언어
- 메모리 직접 제어 가능 (포인터)
- 이식성이 뛰어남
- 컴파일 언어로 실행 속도가 빠름
- 다른 언어의 기초가 되는 언어 (Java, C++, C# 등)

**기본 구조**
\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

**컴파일 과정**
1. 전처리기: #include, #define 등을 처리
2. 컴파일: C 코드 → 어셈블리어
3. 어셈블리: 어셈블리어 → 기계어
4. 링킹: 여러 오브젝트 파일을 하나로 연결`,
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
  },
  {
    id: 2, title: '변수와 자료형', icon: '📦',
    content: `C 언어의 기본 자료형을 알아봅시다.

**기본 자료형**
- \`int\` : 정수 (4바이트, 범위: -21억~21억)
- \`float\` : 실수 (4바이트, 소수점 6자리)
- \`double\` : 더블 실수 (8바이트, 소수점 15자리)
- \`char\` : 문자 (1바이트, ASCII 코드 저장)
- \`void\` : 값 없음

**변수 선언과 초기화**
\`\`\`c
int age = 25;
float pi = 3.14159f;
double big = 3.1415926535;
char grade = 'A';
\`\`\`

**형식 지정자**
- \`%d\` 또는 \`%i\` : 정수
- \`%f\` : 실수 (float)
- \`%lf\` : 실수 (double)
- \`%c\` : 문자
- \`%s\` : 문자열
- \`%p\` : 포인터 주소
- \`%u\` : 부호 없는 정수
- \`%ld\` : long 정수

**상수**
\`\`\`c
const int MAX = 100;
#define PI 3.14159
\`\`\``,
    code: `#include <stdio.h>
#define PI 3.14159

int main() {
    int age = 25;
    float height = 175.5f;
    double pi = PI;
    char grade = 'A';
    
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("PI: %.5f\\n", pi);
    printf("Grade: %c\\n", grade);
    printf("Size of int: %zu bytes\\n", sizeof(int));
    return 0;
}`
  },
  {
    id: 3, title: '입출력 함수', icon: '📤',
    content: `표준 입출력 함수를 자세히 알아봅니다.

**printf() - 출력**
\`\`\`c
printf("정수: %d, 실수: %.2f\\n", 10, 3.14);
\`\`\`

**scanf() - 입력**
\`\`\`c
int num;
printf("숫자 입력: ");
scanf("%d", &num);  // &는 변수의 주소
\`\`\`

**문자 단위 입출력**
\`\`\`c
char ch = getchar();  // 한 문자 입력
putchar(ch);          // 한 문자 출력
\`\`\`

**문자열 입출력**
\`\`\`c
char name[50];
printf("이름: ");
scanf("%s", name);    // & 불필요 (배열명 == 주소)
printf("%s", name);
\`\`\`

**fgets() - 안전한 입력**
\`\`\`c
char str[100];
fgets(str, sizeof(str), stdin);  // 버퍼 오버플로우 방지
\`\`\``,
    code: `#include <stdio.h>

int main() {
    int age;
    char name[50];
    
    printf("이름을 입력하세요: ");
    scanf("%s", name);
    
    printf("나이를 입력하세요: ");
    scanf("%d", &age);
    
    printf("\\n=== 자기소개 ===\\n");
    printf("안녕하세요, %s님!\\n", name);
    printf("나이는 %d살이군요!\\n", age);
    
    return 0;
}`
  },
  {
    id: 4, title: '연산자', icon: '➕',
    content: `C 언어의 다양한 연산자를 알아봅시다.

**산술 연산자**
\`+\`, \`-\`, \`*\`, \`/\`, \`%\` (나머지)

**증감 연산자**
\`\`\`c
int a = 5;
int b = ++a; // a=6, b=6 (선증가)
int c = a++; // a=7, c=6 (후증가)
\`\`\`

**비교 연산자**
\`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\`
- 결과는 1(참) 또는 0(거짓)

**논리 연산자**
- \`&&\` (AND): 모두 참이면 참
- \`||\` (OR): 하나라도 참이면 참
- \`!\` (NOT): 참↔거짓 반전

**비트 연산자**
- \`&\` : AND, \`|\` : OR, \`^\` : XOR, \`~\` : NOT
- \`<<\` : 왼쪽 시프트, \`>>\` : 오른쪽 시프트

**할당 연산자**
\`\`\`c
a += 5;  // a = a + 5
a -= 3;  // a = a - 3
a *= 2;  // a = a * 2
a /= 4;  // a = a / 4
a %= 3;  // a = a % 3
\`\`\``,
    code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    
    printf("산술 연산:\\n");
    printf("a + b = %d\\n", a + b);
    printf("a - b = %d\\n", a - b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b);
    printf("a %% b = %d\\n", a % b);
    
    printf("\\n비교 연산:\\n");
    printf("a > b: %d\\n", a > b);
    printf("a == b: %d\\n", a == b);
    
    printf("\\n논리 연산:\\n");
    printf("(a>5) && (b<5): %d\\n", (a>5) && (b<5));
    printf("!(a>b): %d\\n", !(a>b));
    
    printf("\\n비트 연산:\\n");
    printf("a & b: %d\\n", a & b);
    printf("a << 1: %d\\n", a << 1);
    
    return 0;
}`
  },
  {
    id: 5, title: '조건문', icon: '🔀',
    content: `조건에 따라 코드 실행을 제어합니다.

**if-else 문**
\`\`\`c
if (조건) {
    // 조건이 참일 때
} else if (다른조건) {
    // 다른 조건이 참일 때
} else {
    // 모든 조건이 거짓일 때
}
\`\`\`

**switch 문**
\`\`\`c
switch (값) {
    case 1: 
        printf("하나"); 
        break;
    case 2: 
        printf("둘"); 
        break;
    default: 
        printf("기타");
}
\`\`\`

**삼항 연산자**
\`\`\`c
int max = (a > b) ? a : b;
// 조건 ? 참일때값 : 거짓일때값
\`\`\`

**중첩 조건문 예제**
\`\`\`c
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
\`\`\``,
    code: `#include <stdio.h>

int main() {
    int score;
    printf("점수를 입력하세요: ");
    scanf("%d", &score);
    
    char grade;
    if (score >= 90) grade = 'A';
    else if (score >= 80) grade = 'B';
    else if (score >= 70) grade = 'C';
    else if (score >= 60) grade = 'D';
    else grade = 'F';
    
    printf("학점: %c\\n", grade);
    
    // switch 예제
    int month;
    printf("\\n월 입력: ");
    scanf("%d", &month);
    
    switch(month) {
        case 3: case 4: case 5:
            printf("봄\\n"); break;
        case 6: case 7: case 8:
            printf("여름\\n"); break;
        case 9: case 10: case 11:
            printf("가을\\n"); break;
        case 12: case 1: case 2:
            printf("겨울\\n"); break;
        default:
            printf("잘못된 입력\\n");
    }
    return 0;
}`
  },
  {
    id: 6, title: '반복문', icon: '🔄',
    content: `같은 코드를 여러 번 실행합니다.

**for 문**
\`\`\`c
for (초기화; 조건; 증감) {
    // 반복할 코드
}
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}
\`\`\`

**while 문**
\`\`\`c
while (조건) {
    // 조건이 참인 동안 반복
}
\`\`\`

**do-while 문**
\`\`\`c
do {
    // 최소 1번 실행됨
} while (조건);
\`\`\`

**break와 continue**
- \`break\` : 반복문 즉시 탈출
- \`continue\` : 다음 반복으로 이동

**무한 루프**
\`\`\`c
for (;;) { ... }
while (1) { ... }
\`\`\``,
    code: `#include <stdio.h>

int main() {
    // for 문
    printf("=== for ===\\n");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    
    // while 문
    printf("\\n\\n=== while ===\\n");
    int j = 5;
    while (j >= 1) {
        printf("%d ", j);
        j--;
    }
    
    // do-while 문
    printf("\\n\\n=== do-while ===\\n");
    int k = 1;
    do {
        printf("%d ", k);
        k++;
    } while (k <= 5);
    
    // break, continue
    printf("\\n\\n=== break/continue ===\\n");
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) continue;  // 3의 배수는 건너뛰기
        if (i > 8) break;           // 8 초과면 종료
        printf("%d ", i);
    }
    
    // 구구단
    printf("\\n\\n=== 구구단 2단 ===\\n");
    for (int i = 1; i <= 9; i++) {
        printf("2 x %d = %d\\n", i, 2 * i);
    }
    return 0;
}`
  },
  {
    id: 7, title: '배열', icon: '📊',
    content: `같은 자료형의 데이터를 여러 개 저장합니다.

**1차원 배열**
\`\`\`c
int numbers[5] = {1, 2, 3, 4, 5};
int arr[] = {10, 20, 30};  // 크기 자동 계산
printf("%d", numbers[0]);  // 1
\`\`\`

**2차원 배열**
\`\`\`c
int matrix[2][3] = {{1,2,3}, {4,5,6}};
// matrix[0][0] = 1, matrix[1][2] = 6
\`\`\`

**배열의 크기 구하기**
\`\`\`c
int arr[] = {1,2,3,4,5};
int size = sizeof(arr) / sizeof(arr[0]);  // 5
\`\`\`

**배열과 반복문**
\`\`\`c
for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
}
\`\`\`

**3차원 배열**
\`\`\`c
int cube[3][3][3];
// 총 27개의 요소
\`\`\``,
    code: `#include <stdio.h>

int main() {
    // 1차원 배열
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    
    printf("1차원 배열: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
    
    // 2차원 배열
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    printf("\\n\\n2차원 배열:\\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    
    // 배열의 합계와 평균
    int sum = 0;
    for (int i = 0; i < size; i++) sum += numbers[i];
    printf("\\n합계: %d, 평균: %.1f\\n", sum, (float)sum/size);
    
    return 0;
}`
  },
  {
    id: 8, title: '문자열', icon: '🔤',
    content: `C 언어에서 문자열은 char 배열로 표현합니다.

**문자열 선언**
\`\`\`c
char str1[] = "Hello";          // 자동 크기 할당
char str2[20] = "World";        // 20바이트 고정
char str3[] = {'H','i','\\0'};   // 문자 배열 + 널문자
\`\`\`

**널 문자 \\0**
- 모든 문자열 끝에 자동 추가
- 문자열의 끝을 표시

**문자열 함수 (<string.h>)**
- \`strlen(s)\` : 문자열 길이
- \`strcpy(dest, src)\` : 복사
- \`strcat(dest, src)\` : 연결
- \`strcmp(s1, s2)\` : 비교 (0=같음)
- \`strstr(s, sub)\` : 부분 문자열 검색

**문자열 입력**
\`\`\`c
char name[50];
fgets(name, sizeof(name), stdin);  // 안전
// gets(name);  // 위험! 사용 금지
\`\`\``,
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Hello";
    char str2[20];
    
    printf("문자열 입력: ");
    fgets(str2, sizeof(str2), stdin);
    str2[strcspn(str2, "\\n")] = 0;  // 개행 제거
    
    printf("str1: %s (길이: %zu)\\n", str1, strlen(str1));
    printf("str2: %s (길이: %zu)\\n", str2, strlen(str2));
    
    // 문자열 복사
    char copy[50];
    strcpy(copy, str1);
    strcat(copy, " ");
    strcat(copy, str2);
    printf("\\n연결: %s\\n", copy);
    
    // 문자열 비교
    if (strcmp(str1, str2) == 0) {
        printf("두 문자열이 같습니다.\\n");
    } else {
        printf("두 문자열이 다릅니다.\\n");
    }
    
    return 0;
}`
  },
  {
    id: 9, title: '함수', icon: '🔧',
    content: `코드를 재사용 가능한 단위로 묶습니다.

**함수 정의**
\`\`\`c
반환형 함수명(매개변수목록) {
    // 코드
    return 반환값;
}
\`\`\`

**함수 원형 (프로토타입)**
\`\`\`c
#include <stdio.h>

int add(int a, int b);  // 선언

int main() {
    int r = add(3, 5);
    printf("%d", r);
}

int add(int a, int b) {  // 정의
    return a + b;
}
\`\`\`

**값에 의한 호출 (Call by Value)**
- 함수에 값을 복사해서 전달
- 원본 변수는 변경되지 않음

**변수의 범위 (Scope)**
- 지역 변수: 함수 내부에서만 사용
- 전역 변수: 모든 함수에서 사용 가능
- 정적 변수: static, 함수 종료 후에도 값 유지

**재귀 함수**
\`\`\`c
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
\`\`\``,
    code: `#include <stdio.h>

// 함수 프로토타입
int add(int a, int b);
int factorial(int n);
int power(int base, int exp);
void printArray(int arr[], int size);

int main() {
    printf("3 + 5 = %d\\n", add(3, 5));
    printf("5! = %d\\n", factorial(5));
    printf("2^10 = %d\\n", power(2, 10));
    
    int nums[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    printArray(nums, 10);
    
    return 0;
}

int add(int a, int b) { return a + b; }

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int power(int base, int exp) {
    int result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}

void printArray(int arr[], int size) {
    printf("배열: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}`
  },
  {
    id: 10, title: '포인터 기초', icon: '📍',
    content: `메모리 주소를 다루는 C 언어의 핵심 기능입니다.

**포인터 개념**
- 포인터 = 메모리 주소를 저장하는 변수
- \`*\` : 포인터 선언 / 역참조 (dereference)
- \`&\` : 주소 연산자 (address-of)

**기본 사용**
\`\`\`c
int x = 10;
int *p = &x;   // p는 x의 주소를 저장

printf("%d", *p);  // 10 (역참조)
printf("%p", p);   // 주소 출력
printf("%p", &x);  // x의 주소
\`\`\`

**포인터와 배열**
\`\`\`c
int arr[] = {1, 2, 3};
int *p = arr;  // arr == &arr[0]

p[0] == 1, p[1] == 2
*(p+0) == 1, *(p+1) == 2
\`\`\`

**포인터 연산**
- \`p + 1\` : 다음 요소 (자료형 크기만큼 증가)
- \`p - 1\` : 이전 요소

**NULL 포인터**
\`\`\`c
int *p = NULL;
if (p != NULL) {
    printf("%d", *p);
}
\`\`\``,
    code: `#include <stdio.h>

int main() {
    int x = 42;
    int *p = &x;
    
    printf("x의 값: %d\\n", x);
    printf("x의 주소: %p\\n", (void*)&x);
    printf("p의 값 (주소): %p\\n", (void*)p);
    printf("p가 가리키는 값: %d\\n", *p);
    
    *p = 100;  // p를 통해 x의 값 변경
    printf("\\n변경 후 x: %d\\n", x);
    
    // 포인터와 배열
    int arr[] = {10, 20, 30, 40, 50};
    int *pa = arr;
    
    printf("\\n배열을 포인터로 접근:\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d = *(pa+%d) = %d\\n", 
               i, arr[i], i, *(pa + i));
    }
    
    return 0;
}`
  },
  {
    id: 11, title: '포인터 응용', icon: '🎯',
    content: `포인터의 고급 활용법을 알아봅니다.

**Call by Reference (참조에 의한 호출)**
\`\`\`c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
// swap(&x, &y)로 호출
\`\`\`

**함수 포인터**
\`\`\`c
int add(int a, int b) { return a + b; }
int (*fp)(int, int) = add;
int r = fp(3, 5);  // 8
\`\`\`

**포인터 배열**
\`\`\`c
char *fruits[] = {"Apple", "Banana", "Cherry"};
// 각 요소가 문자열의 주소
\`\`\`

**이중 포인터 (포인터의 포인터)**
\`\`\`c
int x = 10;
int *p = &x;
int **pp = &p;  // pp -> p -> x
printf("%d", **pp);  // 10
\`\`\`

**void 포인터**
\`\`\`c
void *ptr;  // 모든 타입의 주소 저장 가능
int x = 10;
ptr = &x;
printf("%d", *(int*)ptr);  // 형변환 필요
\`\`\``,
    code: `#include <stdio.h>

// Call by Reference
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// 함수 포인터 예제
int add(int a, int b) { return a + b; }

int main() {
    // swap
    int x = 10, y = 20;
    printf("swap 전: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("swap 후: x=%d, y=%d\\n", x, y);
    
    // 함수 포인터
    int (*fp)(int, int) = add;
    printf("\\n함수 포인터: %d\\n", fp(7, 3));
    
    // 이중 포인터
    int a = 100;
    int *p = &a;
    int **pp = &p;
    printf("\\n이중 포인터: %d\\n", **pp);
    
    // 포인터 배열
    char *fruits[] = {"Apple", "Banana", "Cherry"};
    printf("\\n과일 목록: ");
    for (int i = 0; i < 3; i++) {
        printf("%s ", fruits[i]);
    }
    printf("\\n");
    
    return 0;
}`
  },
  {
    id: 12, title: '동적 메모리 할당', icon: '🧠',
    content: `실행 중에 메모리를 할당하고 해제합니다.

**malloc() - 메모리 할당**
\`\`\`c
int *p = (int*)malloc(5 * sizeof(int));
if (p == NULL) {
    printf("할당 실패!");
    return 1;
}
\`\`\`

**calloc() - 초기화된 할당**
\`\`\`c
int *p = (int*)calloc(5, sizeof(int));
// 모든 요소가 0으로 초기화됨
\`\`\`

**realloc() - 크기 재조정**
\`\`\`c
p = (int*)realloc(p, 10 * sizeof(int));
\`\`\`

**free() - 메모리 해제**
\`\`\`c
free(p);  // 할당된 메모리 반환
p = NULL; // 댕글링 포인터 방지
\`\`\`

**메모리 누수 주의!**
할당한 메모리는 반드시 free()로 해제해야 합니다.
해제하지 않으면 프로그램 종료까지 메모리가 점유됩니다.`,
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("배열 크기 입력: ");
    scanf("%d", &n);
    
    // 동적 할당
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("메모리 할당 실패!\\n");
        return 1;
    }
    
    // 값 설정
    printf("\\n피보나치 수열:\\n");
    arr[0] = 0; arr[1] = 1;
    printf("%d %d ", arr[0], arr[1]);
    
    for (int i = 2; i < n; i++) {
        arr[i] = arr[i-1] + arr[i-2];
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    // 메모리 해제
    free(arr);
    arr = NULL;
    
    return 0;
}`
  },
  {
    id: 13, title: '구조체', icon: '🏗️',
    content: `서로 다른 자료형을 하나로 묶어 사용자 정의 자료형을 만듭니다.

**구조체 정의와 사용**
\`\`\`c
struct Student {
    char name[20];
    int age;
    float score;
};

struct Student s1 = {"Kim", 20, 4.0};
printf("%s", s1.name);
s1.score = 3.5;
\`\`\`

**typedef로 타입 별칭**
\`\`\`c
typedef struct {
    char name[20];
    int year;
    float gpa;
} Student;

Student s = {"Lee", 2, 3.8};
\`\`\`

**구조체 포인터**
\`\`\`c
Student *p = &s;
printf("%s", p->name);  // -> 연산자 사용
(*p).year = 3;          // 또는 이렇게
\`\`\`

**구조체 배열**
\`\`\`c
Student class[30];
class[0].age = 21;
\`\`\`

**중첩 구조체**
\`\`\`c
typedef struct {
    int year;
    int month;
    int day;
} Date;

typedef struct {
    char name[20];
    Date birth;
} Person;
\`\`\``,
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[20];
    int age;
    float score;
} Student;

void printStudent(Student *s) {
    printf("이름: %s, 나이: %d, 점수: %.1f\\n", 
           s->name, s->age, s->score);
}

int main() {
    Student students[3] = {
        {"Kim", 20, 4.0},
        {"Lee", 21, 3.5},
        {"Park", 19, 3.8}
    };
    
    printf("=== 학생 정보 ===\\n");
    for (int i = 0; i < 3; i++) {
        printStudent(&students[i]);
    }
    
    // 평균 점수 계산
    float sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += students[i].score;
    }
    printf("\\n평균 점수: %.2f\\n", sum / 3);
    
    return 0;
}`
  },
  {
    id: 14, title: '파일 입출력', icon: '📁',
    content: `파일을 읽고 쓰는 방법을 배웁니다.

**파일 열기**
\`\`\`c
FILE *fp = fopen("test.txt", "r");
if (fp == NULL) {
    printf("파일 열기 실패!\\n");
    return 1;
}
\`\`\`

**파일 모드**
- \`"r"\` : 읽기 (파일이 있어야 함)
- \`"w"\` : 쓰기 (기존 내용 삭제)
- \`"a"\` : 추가 (기존 내용 유지)
- \`"r+"\` : 읽기+쓰기
- \`"w+"\` : 읽기+쓰기 (파일 생성/덮어쓰기)

**파일 읽기**
\`\`\`c
char ch = fgetc(fp);       // 한 문자
char buf[100];
fgets(buf, 100, fp);       // 한 줄
fscanf(fp, "%d", &num);    // 형식 읽기
\`\`\`

**파일 쓰기**
\`\`\`c
fputc('A', fp);
fputs("Hello", fp);
fprintf(fp, "%d %s", 10, "test");
\`\`\`

**파일 닫기**
\`\`\`c
fclose(fp);  // 항상 닫아야 함
\`\`\``,
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;
    
    // 파일 쓰기
    fp = fopen("test.txt", "w");
    if (fp == NULL) {
        printf("파일을 열 수 없습니다.\\n");
        return 1;
    }
    
    fprintf(fp, "=== 학생 명단 ===\\n");
    fprintf(fp, "1. Kim - 20세\\n");
    fprintf(fp, "2. Lee - 21세\\n");
    fprintf(fp, "3. Park - 19세\\n");
    fclose(fp);
    printf("파일 쓰기 완료!\\n\\n");
    
    // 파일 읽기
    fp = fopen("test.txt", "r");
    if (fp == NULL) {
        printf("파일을 열 수 없습니다.\\n");
        return 1;
    }
    
    printf("=== 파일 내용 ===\\n");
    char buf[100];
    while (fgets(buf, sizeof(buf), fp)) {
        printf("%s", buf);
    }
    fclose(fp);
    
    return 0;
}`
  },
  {
    id: 15, title: '전처리기와 매크로', icon: '⚙️',
    content: `컴파일 전에 코드를 처리하는 전처리기를 알아봅니다.

**#include - 파일 포함**
\`\`\`c
#include <stdio.h>   // 표준 라이브러리
#include "myheader.h" // 사용자 정의 헤더
\`\`\`

**#define - 매크로 상수**
\`\`\`c
#define MAX_SIZE 100
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
\`\`\`

**조건부 컴파일**
\`\`\`c
#ifdef DEBUG
    printf("디버그 모드\\n");
#endif

#ifndef MAX
    #define MAX 100
#endif

#if defined(_WIN32)
    printf("Windows\\n");
#elif defined(__linux__)
    printf("Linux\\n");
#endif
\`\`\`

**#pragma - 컴파일러 지시어**
\`\`\`c
#pragma once        // 중복 포함 방지
#pragma pack(1)     // 구조체 패킹
\`\`\`

**미리 정의된 매크로**
- \`__LINE__\` : 현재 줄 번호
- \`__FILE__\` : 현재 파일 이름
- \`__DATE__\` : 컴파일 날짜
- \`__TIME__\` : 컴파일 시간`,
    code: `#include <stdio.h>

// 매크로 정의
#define PI 3.14159
#define SQUARE(x) ((x) * (x))
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define DEBUG

int main() {
    printf("PI: %f\\n", PI);
    printf("SQUARE(5): %d\\n", SQUARE(5));
    printf("MAX(10, 20): %d\\n", MAX(10, 20));
    
#ifdef DEBUG
    printf("\\n=== 디버그 정보 ===\\n");
    printf("파일: %s\\n", __FILE__);
    printf("날짜: %s\\n", __DATE__);
    printf("시간: %s\\n", __TIME__);
    printf("줄: %d\\n", __LINE__);
#endif
    
    return 0;
}`
  },
  {
    id: 16, title: '고급 주제', icon: '🚀',
    content: `C 언어의 고급 기능들을 알아봅니다.

**공용체 (Union)**
\`\`\`c
union Data {
    int i;
    float f;
    char str[20];
};
// 모든 멤버가 같은 메모리 공유
\`\`\`

**열거형 (enum)**
\`\`\`c
enum Color { RED, GREEN, BLUE };
enum Color c = RED;  // 0
\`\`\`

**가변 인자 함수**
\`\`\`c
#include <stdarg.h>
int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    va_end(args);
    return total;
}
\`\`\`

**volatile 키워드**
- 컴파일러 최적화 방지
- 하드웨어 레지스터, 인터럽트 핸들러 등에 사용

**restrict 키워드**
- 포인터에 대한 별칭(aliasing)이 없음을 보장
- 컴파일러 최적화에 도움`,
    code: `#include <stdio.h>
#include <stdarg.h>

// 가변 인자 함수
int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    va_end(args);
    return total;
}

// 열거형
enum Week { MON=1, TUE, WED, THU, FRI, SAT, SUN };

// 공용체
union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    printf("sum(1,2,3,4,5) = %d\\n", sum(5, 1, 2, 3, 4, 5));
    
    printf("\\n열거형 예제:\\n");
    printf("MON = %d, FRI = %d\\n", MON, FRI);
    
    printf("\\n공용체 예제:\\n");
    union Data data;
    data.i = 42;
    printf("정수: %d\\n", data.i);
    data.f = 3.14f;
    printf("실수: %f (정수는 깨짐: %d)\\n", data.f, data.i);
    
    return 0;
  }`
  },
  {
    id: 17, title: '비트 조작', icon: '🔲',
    content: `비트 단위로 데이터를 조작하는 고급 기법을 알아봅니다.

**비트 플래그**
여러 옵션을 하나의 정수에 저장:
\`\`\`c
#define READ   (1 << 0)  // 0001
#define WRITE  (1 << 1)  // 0010
#define EXEC   (1 << 2)  // 0100

int perm = READ | WRITE;  // 0011
if (perm & READ) { /* 읽기 가능 */ }
perm &= ~WRITE;           // WRITE 비트 제거
\`\`\`

**마스킹 (Masking)**
\`\`\`c
int value = 0xABCD;
int low  = value & 0x00FF;  // 하위 1바이트
int high = (value >> 8) & 0x00FF;  // 상위 1바이트
\`\`\`

**비트 뒤집기 (XOR 토글)**
\`\`\`c
int flags = 0b1010;
flags ^= 0b0011;  // 0b1001 (특정 비트만 반전)
\`\`\`

**2의 보수 (음수 표현)**
- \`~x + 1 = -x\`
- \`x & -x\` : 가장 오른쪽의 1인 비트 추출

**MSB/LSB 확인**
\`\`\`c
int isNegative(int x) { return (x >> 31) & 1; }
int isOdd(int x) { return x & 1; }
\`\`\``,
    code: `#include <stdio.h>

int main() {
    // 비트 플래그 예제
    #define READ  1
    #define WRITE 2
    #define EXEC  4
    
    int perm = READ | WRITE;
    printf("권한: %d\\n", perm);
    printf("읽기 가능: %s\\n", (perm & READ) ? "예" : "아니오");
    printf("실행 가능: %s\\n", (perm & EXEC) ? "예" : "아니오");
    
    // 2의 거듭제곱 확인
    int n = 16;
    if ((n & (n - 1)) == 0)
        printf("%d는 2의 거듭제곱입니다.\\n", n);
    
    // 비트 개수 세기 (Population Count)
    int x = 0b1101101;
    int count = 0;
    for (int i = 0; i < 32; i++)
        if (x & (1 << i)) count++;
    printf("0x%X의 1인 비트 수: %d\\n", x, count);
    
    return 0;
}`
  },
  {
    id: 18, title: '에러 처리', icon: '⚠️',
    content: `C 언어에서 에러를 처리하는 다양한 방법을 알아봅니다.

**errno 전역 변수**
\`\`\`c
#include <errno.h>
#include <string.h>

FILE *fp = fopen("nofile.txt", "r");
if (fp == NULL) {
    printf("에러 번호: %d\\n", errno);
    printf("에러 메시지: %s\\n", strerror(errno));
    perror("fopen");  // "fopen: No such file or directory"
}
\`\`\`

**assert() - 디버그 단정문**
\`\`\`c
#include <assert.h>
int div(int a, int b) {
    assert(b != 0);  // b가 0이면 프로그램 중단
    return a / b;
}
\`\`\`

**setjmp/longjmp - 비로컬 점프**
\`\`\`c
#include <setjmp.h>
jmp_buf env;

if (setjmp(env) == 0) {
    // 정상 코드
} else {
    // 에러 처리 코드
}
// 깊은 곳에서 longjmp(env, 1) 호출하면 여기로 점프
\`\`\`

**반환값 기반 에러 처리**
\`\`\`c
#define SUCCESS 0
#define ERR_NULL -1
#define ERR_EMPTY -2

int processData(int *arr, int n) {
    if (arr == NULL) return ERR_NULL;
    if (n == 0) return ERR_EMPTY;
    return SUCCESS;
}
\`\`\``,
    code: `#include <stdio.h>
#include <errno.h>
#include <string.h>

#define SUCCESS 0
#define ERR_NULL_PTR -1
#define ERR_NEGATIVE -2

int safeSqrt(int n, double *result) {
    if (result == NULL) return ERR_NULL_PTR;
    if (n < 0) return ERR_NEGATIVE;
    double approx = n / 2.0;
    for (int i = 0; i < 20; i++)
        approx = (approx + n / approx) / 2.0;
    *result = approx;
    return SUCCESS;
}

int main() {
    double val;
    int ret = safeSqrt(16, &val);
    if (ret == SUCCESS) {
        printf("sqrt(16) = %.2f\\n", val);
    } else {
        printf("에러 코드: %d - ", ret);
        switch (ret) {
            case ERR_NULL_PTR: printf("널 포인터\\n"); break;
            case ERR_NEGATIVE: printf("음수 입력\\n"); break;
        }
    }
    return 0;
}`
  },
  {
    id: 19, title: '멀티파일 프로그래밍', icon: '📚',
    content: `여러 소스 파일로 프로젝트를 구성하는 방법을 알아봅니다.

**헤더 파일 사용**
\`\`\`c
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int mul(int a, int b);

#endif
\`\`\`

\`\`\`c
// math_utils.c
#include "math_utils.h"

int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }
\`\`\`

\`\`\`c
// main.c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("%d\\n", add(3, 5));
    return 0;
}
\`\`\`

**헤더 가드 (#pragma once)**
\`\`\`c
#pragma once  // 또는 #ifndef ~ #define ~ #endif
// 중복 include 방지
\`\`\`

**extern 키워드**
\`\`\`c
// globals.h
extern int g_counter;  // 선언 (정의 아님)

// globals.c
int g_counter = 0;     // 정의

// main.c
#include "globals.h"
g_counter++;
\`\`\`

**Makefile 기초**
\`\`\`makefile
CC = gcc
CFLAGS = -Wall -O2
all: program
program: main.o math_utils.o
\t$(CC) -o program main.o math_utils.o
%.o: %.c
\t$(CC) $(CFLAGS) -c $<
clean:
\trm -f *.o program
\`\`\``,
    code: `#include <stdio.h>

// 헤더 가드 흉내 (한 파일 안에서)
#ifndef DEMO_H
#define DEMO_H

// static 함수: 이 파일 안에서만 사용
static int square(int x) {
    return x * x;
}

// extern: 외부에서도 사용 가능
int cube(int x);

#endif

int cube(int x) {
    return x * x * x;
}

int main() {
    printf("square(5) = %d (static)\\n", square(5));
    printf("cube(5) = %d (extern)\\n", cube(5));
    
    printf("\\n실제 프로젝트에서는 다음 구조를 사용하세요:\\n");
    printf("  math_utils.h  - 함수 선언, 매크로\\n");
    printf("  math_utils.c  - 함수 정의\\n");
    printf("  main.c        - #include \\"math_utils.h\\"\\n");
    printf("  Makefile      - 빌드 규칙\\n");
    return 0;
}`
  },
  {
    id: 20, title: '표준 라이브러리 심화', icon: '📖',
    content: `C 표준 라이브러리의 다양한 기능들을 알아봅니다.

**<math.h> - 수학 함수**
\`\`\`c
#include <math.h>
sqrt(16.0);   // 4.0
pow(2.0, 10); // 1024.0
ceil(3.14);   // 4.0
floor(3.14);  // 3.0
fabs(-5.0);   // 5.0
sin(0.0);     // 0.0
\`\`\`

**<stdlib.h> - 유틸리티**
\`\`\`c
atoi("123");           // 123 (문자열→정수)
atof("3.14");          // 3.14 (문자열→실수)
rand();                // 0~RAND_MAX 난수
srand(time(NULL));     // 난수 시드 설정
abs(-5);               // 5
system("cls");         // OS 명령 실행
qsort(arr, n, size, cmp);  // 퀵 정렬
bsearch(&key, arr, n, size, cmp);  // 이진 검색
\`\`\`

**<time.h> - 시간/날짜**
\`\`\`c
time_t now = time(NULL);
char *s = ctime(&now);  // "Sat May 9 12:34:56 2026"
clock_t start = clock();
// ... 작업 ...
clock_t end = clock();
double sec = (double)(end - start) / CLOCKS_PER_SEC;
\`\`\`

**<ctype.h> - 문자 분류**
\`\`\`c
isalpha(c); isdigit(c); isalnum(c);
islower(c); isupper(c); isspace(c);
toupper(c); tolower(c);
\`\`\`

**<string.h> - 문자열/메모리**
\`\`\`c
memset(arr, 0, sizeof(arr));      // 메모리 초기화
memcpy(dst, src, n);              // 메모리 복사
memmove(dst, src, n);             // 중첩 가능 복사
memcmp(a, b, n);                  // 메모리 비교
\`\`\``,
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <ctype.h>

int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    // 난수
    srand(time(NULL));
    printf("난수: %d\\n", rand() % 100);
    
    // qsort
    int arr[] = {9, 4, 7, 2, 1, 8, 3, 6, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    qsort(arr, n, sizeof(int), cmp);
    printf("정렬: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    
    // 문자 처리
    char c = 'A';
    printf("\\"%c\\"는 %s\\n", c, isupper(c) ? "대문자" : "소문자");
    printf("소문자: %c\\n", tolower(c));
    
    // 실행 시간 측정
    clock_t start = clock();
    double sum = 0;
    for (int i = 0; i < 1000000; i++)
        sum += sqrt((double)i);
    clock_t end = clock();
    printf("\\n실행 시간: %.3f초\\n",
           (double)(end - start) / CLOCKS_PER_SEC);
    
    return 0;
}`
  },
];
