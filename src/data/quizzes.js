export const quizzes = [
  {
    id: 1, title: 'C 언어 기초',
    questions: [
      { q: 'C 언어에서 프로그램 실행의 시작점은?', options: ['main() 함수', 'start() 함수', 'begin() 함수', 'init() 함수'], answer: 0 },
      { q: '다음 중 정수형 자료형은?', options: ['float', 'int', 'double', 'char'], answer: 1 },
      { q: 'printf() 함수를 사용하기 위해 포함해야 할 헤더는?', options: ['<stdlib.h>', '<string.h>', '<stdio.h>', '<math.h>'], answer: 2 },
      { q: '변수 선언 없이 값이 변하지 않는 데이터는?', options: ['변수', '상수', '함수', '배열'], answer: 1 },
      { q: 'C 언어에서 문자열 끝을 나타내는 문자는?', options: ['\\n', '\\t', '\\0', '\\\\'], answer: 2 },
      { q: 'sizeof(int)의 반환값은? (32비트 시스템)', options: ['2', '4', '8', '16'], answer: 1 },
      { q: 'float 자료형의 형식 지정자는?', options: ['%d', '%f', '%c', '%s'], answer: 1 },
      { q: '상수를 선언하는 키워드는?', options: ['const', 'static', 'define', 'constant'], answer: 0 },
    ]
  },
  {
    id: 2, title: '입출력과 연산자',
    questions: [
      { q: 'scanf()에서 변수 앞에 반드시 붙여야 하는 기호는?', options: ['*', '&', '#', '@'], answer: 1 },
      { q: '두 값이 같은지 비교하는 연산자는?', options: ['=', '==', '!=', '==='], answer: 1 },
      { q: '논리 AND 연산자는?', options: ['&', '&&', '|', '||'], answer: 1 },
      { q: 'a = 10; result = (a > 5) ? 1 : 0; result의 값은?', options: ['0', '1', '5', '10'], answer: 1 },
      { q: 'switch 문에서 case 종료 시 사용하는 키워드는?', options: ['stop', 'end', 'break', 'exit'], answer: 2 },
      { q: '++x와 x++의 차이는?', options: ['없음', '증감 시점', '자료형', '연산 순위'], answer: 1 },
      { q: 'a % b 연산의 결과는?', options: ['몫', '나머지', '곱', '합'], answer: 1 },
      { q: 'a >> 1 연산의 의미는?', options: ['2배', '1/2배', '1 증가', '1 감소'], answer: 1 },
      { q: '다음 중 비트 OR 연산자는?', options: ['&', '|', '^', '~'], answer: 1 },
    ]
  },
  {
    id: 3, title: '조건문과 반복문',
    questions: [
      { q: '조건에 따라 둘 중 하나를 선택하는 연산자는?', options: ['if', 'switch', '삼항 연산자', 'goto'], answer: 2 },
      { q: '조건을 먼저 검사하고 반복하는 반복문은?', options: ['for', 'while', 'do-while', 'switch'], answer: 1 },
      { q: 'int a[5]; 에서 유효한 인덱스 범위는?', options: ['1-5', '0-4', '0-5', '1-4'], answer: 1 },
      { q: '배열의 크기를 구하는 올바른 방법은?', options: ['sizeof(arr)', 'sizeof(arr)/sizeof(arr[0])', 'length(arr)', 'arr.size()'], answer: 1 },
      { q: 'for (;;) 는 어떤 의미인가?', options: ['문법 오류', '무한 루프', '1번 실행', '실행 안 됨'], answer: 1 },
      { q: '반복문을 즉시 종료하는 키워드는?', options: ['exit', 'break', 'continue', 'stop'], answer: 1 },
      { q: '다음 반복으로 넘어가는 키워드는?', options: ['next', 'skip', 'continue', 'resume'], answer: 2 },
      { q: '최소 1번은 실행되는 반복문은?', options: ['for', 'while', 'do-while', 'switch'], answer: 2 },
    ]
  },
  {
    id: 4, title: '배열과 문자열',
    questions: [
      { q: '2차원 배열 int m[3][4]의 총 요소 개수는?', options: ['7', '12', '3', '4'], answer: 1 },
      { q: '문자열을 안전하게 입력받는 함수는?', options: ['gets()', 'scanf()', 'fgets()', 'getchar()'], answer: 2 },
      { q: 'strcmp()의 반환값이 0인 의미는?', options: ['첫 번째가 큼', '두 번째가 큼', '같음', '오류'], answer: 2 },
      { q: 'strlen("Hello")의 결과는?', options: ['4', '5', '6', '7'], answer: 1 },
      { q: 'char str[20]에 저장할 수 있는 최대 문자열 길이는?', options: ['19', '20', '21', '18'], answer: 0 },
      { q: '널 문자의 ASCII 코드 값은?', options: ['48', '0', '65', '32'], answer: 1 },
      { q: 'strcat() 함수의 기능은?', options: ['비교', '복사', '연결', '검색'], answer: 2 },
      { q: '다음 중 올바른 문자열 선언은?', options: ['char s = "Hello";', 'char s[] = "Hello";', 'int s[] = "Hello";', 'string s = "Hello";'], answer: 1 },
    ]
  },
  {
    id: 5, title: '함수',
    questions: [
      { q: '값을 반환하지 않는 함수의 반환형은?', options: ['null', 'void', 'none', 'empty'], answer: 1 },
      { q: '함수의 선언부를 무엇이라 하는가?', options: ['프로토타입', '정의', '호출', '매크로'], answer: 0 },
      { q: '지역변수의 특징은?', options: ['프로그램 전체에서 사용', '함수 내에서만 사용', '파일 전체에서 사용', '다른 파일에서도 사용'], answer: 1 },
      { q: 'static 변수의 특징은?', options: ['값이 초기화되지 않음', '함수 종료 후 값 유지', '외부에서 접근 가능', '자동으로 소멸'], answer: 1 },
      { q: '재귀 함수란?', options: ['다른 함수를 호출', '자기 자신을 호출', '여러 값을 반환', '인자가 없는 함수'], answer: 1 },
      { q: '함수 호출 시 값을 복사해서 전달하는 방식은?', options: ['Call by Reference', 'Call by Value', 'Call by Pointer', 'Call by Address'], answer: 1 },
    ]
  },
  {
    id: 6, title: '포인터',
    questions: [
      { q: '변수의 주소를 얻는 연산자는?', options: ['*', '&', '#', '@'], answer: 1 },
      { q: '포인터가 가리키는 값을 얻는 연산자는?', options: ['&', '*', '->', '.'], answer: 1 },
      { q: 'NULL 포인터의 값은?', options: ['-1', '0', '1', 'undefined'], answer: 1 },
      { q: 'int *p = arr; 에서 p+1의 의미는?', options: ['주소+1바이트', '다음 요소', '주소+4', '다음 배열'], answer: 1 },
      { q: 'Call by Reference를 구현할 때 사용하는 것은?', options: ['배열', '포인터', '구조체', '반복문'], answer: 1 },
      { q: 'int **p는 무엇인가?', options: ['int 포인터', 'int 배열', '이중 포인터', '함수 포인터'], answer: 2 },
      { q: '포인터 배열 char *arr[5]의 의미는?', options: ['char 배열', 'char 포인터 배열', 'char 2차원 배열', '함수 포인터'], answer: 1 },
      { q: 'void* 포인터의 특징은?', options: ['모든 타입 저장', '역참조 가능', '연산 가능', '크기가 0'], answer: 0 },
    ]
  },
  {
    id: 7, title: '동적 할당과 구조체',
    questions: [
      { q: 'malloc()의 반환형은?', options: ['int*', 'void*', 'char*', 'NULL'], answer: 1 },
      { q: '할당된 메모리를 해제하는 함수는?', options: ['delete', 'free', 'release', 'dispose'], answer: 1 },
      { q: '구조체의 멤버에 접근할 때 사용하는 연산자는? (포인터)', options: ['.', '->', '::', '..'], answer: 1 },
      { q: 'typedef의 용도는?', options: ['타입 재정의', '타입 별칭', '메모리 할당', '함수 선언'], answer: 1 },
      { q: 'calloc()과 malloc()의 차이는?', options: ['없음', 'calloc이 더 빠름', 'calloc이 0으로 초기화', 'malloc이 더 안전'], answer: 2 },
      { q: '메모리 누수란?', options: ['메모리 부족', '할당 해제하지 않음', '포인터 오류', '버퍼 오버플로우'], answer: 1 },
      { q: 'realloc()의 기능은?', options: ['새로 할당', '크기 변경', '메모리 복사', '메모리 해제'], answer: 1 },
    ]
  },
  {
    id: 8, title: '파일 입출력',
    questions: [
      { q: '파일을 읽기 모드로 열 때 사용하는 모드는?', options: ['"w"', '"r"', '"a"', '"rw"'], answer: 1 },
      { q: '파일이 없으면 새로 생성하는 쓰기 모드는?', options: ['"r"', '"w"', '"a"', '"r+"'], answer: 1 },
      { q: '파일에서 한 문자를 읽는 함수는?', options: ['fgets()', 'fgetc()', 'fscanf()', 'getchar()'], answer: 1 },
      { q: '파일을 열 때 반환되는 타입은?', options: ['int', 'FILE*', 'void*', 'char*'], answer: 1 },
      { q: '파일을 닫지 않으면 발생할 수 있는 문제는?', options: ['메모리 누수', '파일 손상', '데이터 손실', '모두 해당'], answer: 3 },
      { q: 'fprintf()의 기능은?', options: ['파일 읽기', '파일 쓰기', '파일 열기', '파일 닫기'], answer: 1 },
    ]
  },
  {
    id: 9, title: '전처리기와 매크로',
    questions: [
      { q: '#include의 기능은?', options: ['매크로 정의', '파일 포함', '조건부 컴파일', '에러 처리'], answer: 1 },
      { q: '__LINE__ 매크로의 값은?', options: ['파일 이름', '현재 줄 번호', '컴파일 시간', '함수 이름'], answer: 1 },
      { q: '#define으로 정의할 수 없는 것은?', options: ['상수', '매크로 함수', '변수', '문자열'], answer: 2 },
      { q: '조건부 컴파일 지시자가 아닌 것은?', options: ['#ifdef', '#if', '#elseif', '#endif'], answer: 2 },
      { q: '#pragma once의 용도는?', options: ['최적화', '중복 포함 방지', '에러 처리', '메모리 정렬'], answer: 1 },
    ]
  },
  {
    id: 10, title: '종합 문제',
    questions: [
      { q: '다음 중 C 언어의 창시자는?', options: ['비야네 스트로스트룹', '데니스 리치', '제임스 고슬링', '귀도 반 로섬'], answer: 1 },
      { q: 'C 언어는 어떤 패러다임의 언어인가?', options: ['객체지향', '절차지향', '함수형', '논리형'], answer: 1 },
      { q: '버퍼 오버플로우의 원인은?', options: ['메모리 부족', '할당보다 큰 데이터 저장', '포인터 오류', '함수 호출 실패'], answer: 1 },
      { q: '댕글링 포인터란?', options: ['NULL 포인터', '해제된 메모리를 가리키는 포인터', '초기화되지 않은 포인터', 'void 포인터'], answer: 1 },
      { q: '스택 오버플로우의 주요 원인은?', options: ['메모리 누수', '무한 재귀', '파일 미달', '배열 범위 초과'], answer: 1 },
      { q: '다음 중 표준 라이브러리가 아닌 것은?', options: ['stdio.h', 'stdlib.h', 'string.h', 'console.h'], answer: 3 },
      { q: '컴파일 과정의 올바른 순서는?', options: ['컴파일-링킹-전처리', '전처리-컴파일-링킹', '링킹-전처리-컴파일', '전처리-링킹-컴파일'], answer: 1 },
      { q: 'main() 함수가 int를 반환하는 이유는?', options: ['관습', 'OS에 종료 상태 전달', '필수 아님', '에러 처리'], answer: 1 },
    ]
  },
  {
    id: 11, title: '비트 연산과 메모리',
    questions: [
      { q: 'x & -x 의 결과는?', options: ['x의 절댓값', '가장 오른쪽 1 비트', 'x의 부호 반전', '항상 0'], answer: 1 },
      { q: '2의 거듭제곱을 확인하는 올바른 방법은? (n>0)', options: ['n & (n+1) == 0', 'n & (n-1) == 0', 'n | (n-1) == 0', 'n ^ n == 0'], answer: 1 },
      { q: 'malloc(0)의 결과는?', options: ['NULL', '유효한 포인터 (구현 정의)', '항상 실패', '0 반환'], answer: 1 },
      { q: 'realloc(NULL, 100)의 동작은?', options: ['에러 반환', 'malloc(100)과 동일', '아무 일도 안 함', 'NULL 반환'], answer: 1 },
      { q: '메모리 단편화를 줄이는 방법은?', options: ['더 많이 할당', '일정한 크기로 할당/해제', '포인터 사용 금지', '전역 변수 사용'], answer: 1 },
      { q: 'int a[10]; free(a); 의 결과는?', options: ['정상 동작', '정의되지 않은 동작', '메모리 해제', '컴파일 에러'], answer: 1 },
      { q: '다음 중 aligned 메모리 할당 함수는?', options: ['malloc', 'calloc', 'aligned_alloc (C11)', 'realloc'], answer: 2 },
    ]
  },
  {
    id: 12, title: '고급 주제 종합',
    questions: [
      { q: 'volatile 키워드의 주요 용도는?', options: ['속도 최적화', '컴파일러 최적화 방지', '메모리 보호', '변수 숨김'], answer: 1 },
      { q: 'restrict 키워드의 목적은?', options: ['메모리 보호', '포인터 별칭 없음 보장', '읽기 전용', '함수 제한'], answer: 1 },
      { q: '다음 중 표준 라이브러리가 아닌 것은?', options: ['<math.h>', '<time.h>', '<network.h>', '<ctype.h>'], answer: 2 },
      { q: 'assert(b != 0)의 의미는?', options: ['b가 0이면 경고', 'b가 0이면 프로그램 중단', 'b를 0으로 설정', 'b가 0이면 계속'], answer: 1 },
      { q: 'errno를 사용하려면 포함해야 할 헤더는?', options: ['<stdio.h>', '<errno.h>', '<stdlib.h>', '<error.h>'], answer: 1 },
      { q: 'qsort()의 비교 함수가 받는 인자는?', options: ['값 2개', '포인터 2개', '인덱스 2개', '배열 2개'], answer: 1 },
      { q: 'atoi("123")의 반환값은?', options: ['"123"', '123', '123.0', '에러'], answer: 1 },
    ]
  },
];
