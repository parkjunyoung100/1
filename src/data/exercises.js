export const exercises = [
  {
    id: 1, title: '짝수/홀수 판별', difficulty: '쉬움',
    desc: '사용자로부터 정수를 입력받아 짝수인지 홀수인지 출력하는 프로그램을 작성하세요.',
    hint: 'scanf()로 입력받고, % 연산자를 사용하여 2로 나눈 나머지를 확인하세요.',
    solution: `#include <stdio.h>

int main() {
    int num;
    printf("정수를 입력하세요: ");
    scanf("%d", &num);
    
    if (num % 2 == 0) {
        printf("%d는 짝수입니다.\\n", num);
    } else {
        printf("%d는 홀수입니다.\\n", num);
    }
    return 0;
}`,
    starter: `#include <stdio.h>

int main() {
    int num;
    printf("정수를 입력하세요: ");
    scanf("%d", &num);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 2, title: '구구단 출력', difficulty: '쉬움',
    desc: '사용자로부터 단(2~9)을 입력받아 해당하는 구구단을 출력하는 프로그램을 작성하세요.',
    hint: 'for 반복문을 사용하세요. 1부터 9까지 반복하며 dan * i를 출력합니다.',
    solution: `#include <stdio.h>

int main() {
    int dan;
    printf("출력할 단을 입력하세요 (2~9): ");
    scanf("%d", &dan);
    
    for (int i = 1; i <= 9; i++) {
        printf("%d x %d = %d\\n", dan, i, dan * i);
    }
    return 0;
}`,
    starter: `#include <stdio.h>

int main() {
    int dan;
    printf("출력할 단을 입력하세요 (2~9): ");
    scanf("%d", &dan);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 3, title: '최대공약수 (GCD)', difficulty: '중간',
    desc: '두 정수를 입력받아 최대공약수를 구하는 프로그램을 작성하세요. (유클리드 호제법 사용)',
    hint: '유클리드 호제법: a % b = r, b % r = ... 반복, 나머지가 0일 때의 b가 GCD입니다.',
    solution: `#include <stdio.h>

int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

int main() {
    int a, b;
    printf("두 정수를 입력하세요: ");
    scanf("%d %d", &a, &b);
    
    printf("GCD(%d, %d) = %d\\n", a, b, gcd(a, b));
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 gcd 함수를 작성하세요

int main() {
    int a, b;
    printf("두 정수를 입력하세요: ");
    scanf("%d %d", &a, &b);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 4, title: '문자열 뒤집기', difficulty: '중간',
    desc: '문자열을 입력받아 뒤집어서 출력하는 프로그램을 작성하세요. (포인터 사용 권장)',
    hint: 'strlen()으로 길이를 구하고, 문자열의 앞과 뒤를 바꾸는 방식으로 구현하세요.',
    solution: `#include <stdio.h>
#include <string.h>

void reverse(char *str) {
    int len = strlen(str);
    char *start = str;
    char *end = str + len - 1;
    
    while (start < end) {
        char temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}

int main() {
    char str[100];
    printf("문자열을 입력하세요: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    reverse(str);
    printf("뒤집은 결과: %s\\n", str);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <string.h>

// 여기에 reverse 함수를 작성하세요

int main() {
    char str[100];
    printf("문자열을 입력하세요: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 5, title: '학생 성적 관리', difficulty: '어려움',
    desc: '학생 5명의 이름과 성적을 입력받아 평균, 최고점, 최저점을 출력하는 프로그램을 작성하세요.',
    hint: '구조체와 배열을 함께 사용해보세요. 구조체에 이름과 점수를 저장하세요.',
    solution: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[20];
    int score;
} Student;

int main() {
    Student students[5];
    int sum = 0, max = 0, min = 100;
    char maxName[20], minName[20];
    
    for (int i = 0; i < 5; i++) {
        printf("학생 %d 이름: ", i + 1);
        scanf("%s", students[i].name);
        printf("학생 %d 성적: ", i + 1);
        scanf("%d", &students[i].score);
        
        sum += students[i].score;
        if (students[i].score > max) {
            max = students[i].score;
            strcpy(maxName, students[i].name);
        }
        if (students[i].score < min) {
            min = students[i].score;
            strcpy(minName, students[i].name);
        }
    }
    
    printf("\\n=== 결과 ===\\n");
    printf("평균: %.2f\\n", (float)sum / 5);
    printf("최고: %s (%d점)\\n", maxName, max);
    printf("최저: %s (%d점)\\n", minName, min);
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 구조체를 정의하세요

int main() {
    // 여기에 코드를 작성하세요
    return 0;
}`
  },
  {
    id: 6, title: '소수 판별', difficulty: '쉬움',
    desc: '사용자로부터 정수를 입력받아 소수(prime number)인지 판별하는 프로그램을 작성하세요.',
    hint: '2부터 n-1까지 나누어 떨어지는 수가 있으면 소수가 아닙니다. 제곱근까지만 검사해도 됩니다.',
    solution: `#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int num;
    printf("정수를 입력하세요: ");
    scanf("%d", &num);
    
    if (isPrime(num)) {
        printf("%d는 소수입니다.\\n", num);
    } else {
        printf("%d는 소수가 아닙니다.\\n", num);
    }
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 isPrime 함수를 작성하세요

int main() {
    int num;
    printf("정수를 입력하세요: ");
    scanf("%d", &num);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 7, title: '피보나치 수열', difficulty: '중간',
    desc: '피보나치 수열의 n번째 항을 구하는 프로그램을 작성하세요. (반복문과 재귀 두 가지 방식으로 구현)',
    hint: 'fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2). 재귀와 반복문을 각각 구현해보세요.',
    solution: `#include <stdio.h>

// 재귀 방식
int fibRec(int n) {
    if (n <= 1) return n;
    return fibRec(n-1) + fibRec(n-2);
}

// 반복문 방식 (효율적)
int fibIter(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    int n;
    printf("항 번호 입력: ");
    scanf("%d", &n);
    
    printf("fib(%d) = %d (재귀)\\n", n, fibRec(n));
    printf("fib(%d) = %d (반복)\\n", n, fibIter(n));
    
    printf("\\n피보나치 수열: ");
    for (int i = 0; i <= n; i++) {
        printf("%d ", fibIter(i));
    }
    printf("\\n");
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 재귀 방식 fibonacci 함수를 작성하세요

// 여기에 반복문 방식 fibonacci 함수를 작성하세요

int main() {
    int n;
    printf("항 번호 입력: ");
    scanf("%d", &n);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 8, title: '회문 (Palindrome) 검사', difficulty: '중간',
    desc: '문자열을 입력받아 회문(앞뒤가 같은 문자열)인지 검사하는 프로그램을 작성하세요.',
    hint: '문자열의 양 끝에서부터 중간까지 비교합니다. str[len-1-i]와 str[i]를 비교하세요.',
    solution: `#include <stdio.h>
#include <string.h>

int isPalindrome(char *str) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i])
            return 0;
    }
    return 1;
}

int main() {
    char str[100];
    printf("문자열 입력: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    if (isPalindrome(str)) {
        printf("\\"%s\\"는 회문입니다.\\n", str);
    } else {
        printf("\\"%s\\"는 회문이 아닙니다.\\n", str);
    }
    return 0;
}`,
    starter: `#include <stdio.h>
#include <string.h>

// 여기에 isPalindrome 함수를 작성하세요

int main() {
    char str[100];
    printf("문자열 입력: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 9, title: '선택 정렬 구현', difficulty: '어려움',
    desc: '정수 배열을 입력받아 선택 정렬(Selection Sort)로 오름차순 정렬하는 프로그램을 작성하세요.',
    hint: '가장 작은 값을 찾아 맨 앞과 교환하는 과정을 반복합니다. 이중 for문을 사용하세요.',
    solution: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx])
                minIdx = j;
        }
        if (minIdx != i) {
            int temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
}

int main() {
    int arr[] = {64, 25, 12, 22, 11, 90, 33};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("정렬 전: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    
    selectionSort(arr, n);
    
    printf("\\n정렬 후: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 selectionSort 함수를 작성하세요

int main() {
    int arr[] = {64, 25, 12, 22, 11, 90, 33};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("정렬 전: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    
    // 여기에 정렬 함수 호출 코드를 작성하세요
    
    printf("\\n정렬 후: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`
  },
  {
    id: 10, title: '파일 복사 프로그램', difficulty: '어려움',
    desc: '원본 파일을 읽어 새로운 파일로 복사하는 프로그램을 작성하세요. 파일 이름은 사용자로부터 입력받습니다.',
    hint: 'fopen()으로 원본을 읽기 모드("rb"), 대상을 쓰기 모드("wb")로 열고 fgetc/fputc로 복사합니다.',
    solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    char src[100], dst[100];
    printf("원본 파일 이름: ");
    scanf("%s", src);
    printf("대상 파일 이름: ");
    scanf("%s", dst);
    
    FILE *fs = fopen(src, "rb");
    if (fs == NULL) {
        printf("원본 파일을 열 수 없습니다.\\n");
        return 1;
    }
    
    FILE *fd = fopen(dst, "wb");
    if (fd == NULL) {
        printf("대상 파일을 생성할 수 없습니다.\\n");
        fclose(fs);
        return 1;
    }
    
    int ch;
    while ((ch = fgetc(fs)) != EOF) {
        fputc(ch, fd);
    }
    
    printf("파일 복사 완료!\\n");
    fclose(fs);
    fclose(fd);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <stdlib.h>

int main() {
    char src[100], dst[100];
    printf("원본 파일 이름: ");
    scanf("%s", src);
    printf("대상 파일 이름: ");
    scanf("%s", dst);
    
    // 여기에 파일 복사 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 11, title: '이진 탐색', difficulty: '쉬움',
    desc: '정렬된 정수 배열에서 특정 값을 이진 탐색으로 찾는 프로그램을 작성하세요.',
    hint: '중간 인덱스(mid)를 기준으로 left/right 범위를 좁혀가며 탐색합니다. while(left <= right)',
    solution: `#include <stdio.h>

int binarySearch(int arr[], int n, int key) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key;
    
    printf("찾을 값: ");
    scanf("%d", &key);
    
    int idx = binarySearch(arr, n, key);
    if (idx != -1)
        printf("%d는 인덱스 %d에 있습니다.\\n", key, idx);
    else
        printf("%d를 찾을 수 없습니다.\\n", key);
    
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 binarySearch 함수를 작성하세요

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 45, 56, 72};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key;
    
    printf("찾을 값: ");
    scanf("%d", &key);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 12, title: '배열 회전', difficulty: '중간',
    desc: '정수 배열을 오른쪽으로 k번 회전하는 프로그램을 작성하세요. (예: [1,2,3,4,5], k=2 → [4,5,1,2,3])',
    hint: '세 번의 뒤집기로 구현: 전체 뒤집기 → 앞 k개 뒤집기 → 나머지 뒤집기. 또는 k %= n 처리 필수.',
    solution: `#include <stdio.h>

void reverse(int arr[], int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

void rotate(int arr[], int n, int k) {
    k %= n;
    if (k == 0) return;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k;
    
    printf("회전할 칸 수: ");
    scanf("%d", &k);
    
    printf("원본: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    
    rotate(arr, n, k);
    
    printf("\\n회전 후: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 reverse 함수를 작성하세요

// 여기에 rotate 함수를 작성하세요

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k;
    
    printf("회전할 칸 수: ");
    scanf("%d", &k);
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 13, title: '문자열 압축', difficulty: '중간',
    desc: '문자열을 입력받아 같은 문자가 연속되면 개수로 압축하는 프로그램을 작성하세요. (예: "aaabbc" → "a3b2c1")',
    hint: '현재 문자와 다음 문자가 다를 때까지 카운트하고, 카운트를 결과 문자열에 추가합니다.',
    solution: `#include <stdio.h>
#include <string.h>

void compress(char *str, char *out) {
    int len = strlen(str);
    int idx = 0;
    for (int i = 0; i < len; i++) {
        int count = 1;
        while (i + 1 < len && str[i] == str[i + 1]) {
            count++;
            i++;
        }
        out[idx++] = str[i];
        idx += sprintf(out + idx, "%d", count);
    }
    out[idx] = '\\0';
}

int main() {
    char str[100], result[200];
    printf("문자열 입력: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    compress(str, result);
    printf("원본: %s (길이: %zu)\\n", str, strlen(str));
    printf("압축: %s (길이: %zu)\\n", result, strlen(result));
    
    if (strlen(result) < strlen(str))
        printf("압축 성공! %.0f%% 감소\\n",
               (1 - (double)strlen(result)/strlen(str)) * 100);
    else
        printf("압축 실패 (원본이 더 짧음)\\n");
    
    return 0;
}`,
    starter: `#include <stdio.h>
#include <string.h>

// 여기에 compress 함수를 작성하세요

int main() {
    char str[100], result[200];
    printf("문자열 입력: ");
    fgets(str, sizeof(str), stdin);
    str[strcspn(str, "\\n")] = 0;
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 14, title: '연결 리스트 구현', difficulty: '어려움',
    desc: '정수 연결 리스트를 구현하세요. 노드 추가, 삭제, 출력, 검색 기능을 포함해야 합니다.',
    hint: 'struct Node { int data; struct Node* next; }; head 포인터로 리스트를 관리합니다.',
    solution: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* createNode(int data) {
    Node *new = (Node*)malloc(sizeof(Node));
    new->data = data;
    new->next = NULL;
    return new;
}

void append(Node **head, int data) {
    Node *new = createNode(data);
    if (*head == NULL) { *head = new; return; }
    Node *cur = *head;
    while (cur->next) cur = cur->next;
    cur->next = new;
}

void deleteNode(Node **head, int data) {
    if (*head == NULL) return;
    if ((*head)->data == data) {
        Node *temp = *head;
        *head = (*head)->next;
        free(temp);
        return;
    }
    Node *cur = *head;
    while (cur->next && cur->next->data != data)
        cur = cur->next;
    if (cur->next) {
        Node *temp = cur->next;
        cur->next = temp->next;
        free(temp);
    }
}

void printList(Node *head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}

int search(Node *head, int data) {
    while (head) {
        if (head->data == data) return 1;
        head = head->next;
    }
    return 0;
}

void freeList(Node **head) {
    Node *cur = *head;
    while (cur) {
        Node *next = cur->next;
        free(cur);
        cur = next;
    }
    *head = NULL;
}

int main() {
    Node *head = NULL;
    append(&head, 10);
    append(&head, 20);
    append(&head, 30);
    append(&head, 40);
    printList(head);
    
    printf("20 검색: %s\\n", search(head, 20) ? "찾음" : "없음");
    printf("25 검색: %s\\n", search(head, 25) ? "찾음" : "없음");
    
    deleteNode(&head, 20);
    printf("20 삭제 후: ");
    printList(head);
    
    freeList(&head);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <stdlib.h>

// 여기에 Node 구조체를 정의하세요

// 여기에 함수들을 작성하세요 (createNode, append, deleteNode, printList, search, freeList)

int main() {
    // 여기에 코드를 작성하세요
    return 0;
}`
  },
  {
    id: 15, title: '이진 탐색 트리', difficulty: '어려움',
    desc: '이진 탐색 트리(BST)를 구현하세요. 노드 삽입, 탐색, 중위 순회(Inorder) 기능을 포함해야 합니다.',
    hint: 'struct TreeNode { int data; struct TreeNode *left, *right; }; 중위 순회는 left → root → right 순서로 방문합니다.',
    solution: `#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

TreeNode* insert(TreeNode *root, int data) {
    if (root == NULL) {
        root = (TreeNode*)malloc(sizeof(TreeNode));
        root->data = data;
        root->left = root->right = NULL;
        return root;
    }
    if (data < root->data)
        root->left = insert(root->left, data);
    else if (data > root->data)
        root->right = insert(root->right, data);
    return root;
}

int search(TreeNode *root, int data) {
    if (root == NULL) return 0;
    if (data == root->data) return 1;
    if (data < root->data)
        return search(root->left, data);
    return search(root->right, data);
}

void inorder(TreeNode *root) {
    if (root == NULL) return;
    inorder(root->left);
    printf("%d ", root->data);
    inorder(root->right);
}

void freeTree(TreeNode *root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}

int main() {
    TreeNode *root = NULL;
    int values[] = {8, 3, 10, 1, 6, 14, 4, 7, 13};
    int n = sizeof(values) / sizeof(values[0]);
    
    for (int i = 0; i < n; i++)
        root = insert(root, values[i]);
    
    printf("중위 순회 (오름차순): ");
    inorder(root);
    printf("\\n");
    
    printf("6 탐색: %s\\n", search(root, 6) ? "찾음" : "없음");
    printf("9 탐색: %s\\n", search(root, 9) ? "찾음" : "없음");
    
    freeTree(root);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <stdlib.h>

// 여기에 TreeNode 구조체를 정의하세요

// 여기에 함수들을 작성하세요 (insert, search, inorder, freeTree)

int main() {
    // 여기에 코드를 작성하세요
    return 0;
}`
  },
  {
    id: 16, title: '버블 정렬 구현', difficulty: '쉬움',
    desc: '정수 배열을 버블 정렬(Bubble Sort)로 오름차순 정렬하는 프로그램을 작성하세요.',
    hint: '인접한 두 요소를 비교하여 정렬이 될 때까지 반복합니다. 중첩 for문을 사용하세요.',
    solution: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int swapped = 0;
        for (int j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) break;
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("정렬 전: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    
    bubbleSort(arr, n);
    
    printf("\\n정렬 후: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`,
    starter: `#include <stdio.h>

// 여기에 bubbleSort 함수를 작성하세요

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    printf("정렬 전: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    
    // 여기에 정렬 함수 호출 코드를 작성하세요
    
    printf("\\n정렬 후: ");
    for (int i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\\n");
    return 0;
}`
  },
  {
    id: 17, title: '행렬 곱셈', difficulty: '중간',
    desc: '두 행렬을 입력받아 곱셈 결과를 출력하는 프로그램을 작성하세요. (m×n * n×p = m×p)',
    hint: '삼중 for문 사용. result[i][j] = sum of a[i][k] * b[k][j] for k in range(n)',
    solution: `#include <stdio.h>

#define MAX 10

void multiply(int a[MAX][MAX], int b[MAX][MAX],
              int result[MAX][MAX], int m, int n, int p) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < p; j++) {
            result[i][j] = 0;
            for (int k = 0; k < n; k++)
                result[i][j] += a[i][k] * b[k][j];
        }
}

void printMatrix(int mat[MAX][MAX], int rows, int cols) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++)
            printf("%4d ", mat[i][j]);
        printf("\\n");
    }
}

int main() {
    int a[MAX][MAX] = {{1, 2, 3}, {4, 5, 6}};
    int b[MAX][MAX] = {{7, 8}, {9, 10}, {11, 12}};
    int result[MAX][MAX] = {0};
    int m = 2, n = 3, p = 2;
    
    printf("행렬 A (%dx%d):\\n", m, n);
    printMatrix(a, m, n);
    printf("\\n행렬 B (%dx%d):\\n", n, p);
    printMatrix(b, n, p);
    
    multiply(a, b, result, m, n, p);
    
    printf("\\nA x B 결과 (%dx%d):\\n", m, p);
    printMatrix(result, m, p);
    return 0;
}`,
    starter: `#include <stdio.h>

#define MAX 10

// 여기에 multiply 함수를 작성하세요

// 여기에 printMatrix 함수를 작성하세요

int main() {
    int a[MAX][MAX] = {{1, 2, 3}, {4, 5, 6}};
    int b[MAX][MAX] = {{7, 8}, {9, 10}, {11, 12}};
    int result[MAX][MAX] = {0};
    int m = 2, n = 3, p = 2;
    
    // 여기에 코드를 작성하세요
    
    return 0;
}`
  },
  {
    id: 18, title: '명령줄 계산기', difficulty: '중간',
    desc: '명령줄 인수로 숫자와 연산자를 받아 계산 결과를 출력하는 프로그램을 작성하세요. (예: calc 3 + 5)',
    hint: 'main(int argc, char *argv[])로 인수를 받습니다. argv[1]=숫자1, argv[2]=연산자, argv[3]=숫자2. atoi() 사용.',
    solution: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 4) {
        printf("사용법: %s 숫자1 연산자 숫자2\\n", argv[0]);
        printf("예: %s 10 + 5\\n", argv[0]);
        return 1;
    }
    
    double a = atof(argv[1]);
    double b = atof(argv[3]);
    char op = argv[2][0];
    double result;
    
    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case 'x': case 'X': case '*': result = a * b; break;
        case '/':
            if (b == 0) {
                printf("0으로 나눌 수 없습니다.\\n");
                return 1;
            }
            result = a / b;
            break;
        case '%':
            result = (int)a % (int)b;
            break;
        default:
            printf("지원하지 않는 연산자입니다. (+, -, x, /, %%)\\n");
            return 1;
    }
    
    printf("%.2f %c %.2f = %.2f\\n", a, op, b, result);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    // 여기에 코드를 작성하세요
    return 0;
}`
  },
  {
    id: 19, title: '연결 리스트 뒤집기', difficulty: '어려움',
    desc: '단일 연결 리스트를 반복문과 재귀两种 방식으로 뒤집는 함수를 구현하세요.',
    hint: '반복 방식: prev/curr/next 포인터 3개 사용. 재귀 방식: head->next->next = head 패턴 사용.',
    solution: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* createNode(int data) {
    Node *new = (Node*)malloc(sizeof(Node));
    new->data = data;
    new->next = NULL;
    return new;
}

void append(Node **head, int data) {
    Node *new = createNode(data);
    if (*head == NULL) { *head = new; return; }
    Node *cur = *head;
    while (cur->next) cur = cur->next;
    cur->next = new;
}

void printList(Node *head) {
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
}

Node* reverseIter(Node *head) {
    Node *prev = NULL, *curr = head, *next = NULL;
    while (curr) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

Node* reverseRecur(Node *head) {
    if (head == NULL || head->next == NULL) return head;
    Node *rest = reverseRecur(head->next);
    head->next->next = head;
    head->next = NULL;
    return rest;
}

void freeList(Node *head) {
    Node *cur = head;
    while (cur) {
        Node *next = cur->next;
        free(cur);
        cur = next;
    }
}

int main() {
    Node *head = NULL;
    for (int i = 1; i <= 6; i++)
        append(&head, i * 10);
    
    printf("원본: ");
    printList(head);
    
    head = reverseIter(head);
    printf("반복 뒤집기: ");
    printList(head);
    
    head = reverseRecur(head);
    printf("재귀 뒤집기: ");
    printList(head);
    
    freeList(head);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// 여기에 createNode, append, printList 함수를 작성하세요 (연습문제 14 참고)

// 여기에 reverseIter 함수를 작성하세요

// 여기에 reverseRecur 함수를 작성하세요

// 여기에 freeList 함수를 작성하세요

int main() {
    // 여기에 코드를 작성하세요
    return 0;
}`
  },
  {
    id: 20, title: 'JSON 문자열 파싱', difficulty: '어려움',
    desc: '간단한 JSON 문자열을 파싱하여 키-값 쌍을 출력하는 프로그램을 작성하세요. (예: {"name":"Kim","age":25,"score":88.5})',
    hint: '따옴표 위치를 찾고, 키와 값을 분리합니다. strchr()과 strstr()을 활용하세요. 정수와 실수를 구분해야 합니다.',
    solution: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

void trim(char *s) {
    char *start = s, *end = s + strlen(s) - 1;
    while (isspace(*start)) start++;
    while (end > start && isspace(*end)) end--;
    *(end + 1) = '\\0';
    memmove(s, start, end - start + 2);
}

int isInteger(const char *s) {
    if (*s == '-') s++;
    if (*s == '\\0') return 0;
    while (*s) { if (!isdigit(*s)) return 0; s++; }
    return 1;
}

void parseJSON(const char *json) {
    const char *p = json;
    int depth = 0;
    char key[100], value[100];
    
    while (*p) {
        if (*p == '{' || *p == '}') { p++; continue; }
        if (*p == '"') {
            p++;
            int ki = 0;
            while (*p && *p != '"') key[ki++] = *p++;
            key[ki] = '\\0';
            p++;
            while (*p && *p != ':') p++;
            if (*p == ':') p++;
            while (*p && isspace(*p)) p++;
            
            if (*p == '"') {
                p++;
                int vi = 0;
                while (*p && *p != '"') value[vi++] = *p++;
                value[vi] = '\\0';
                p++;
                printf("문자열: %s = %s\\n", key, value);
            } else {
                int vi = 0;
                while (*p && *p != ',' && *p != '}') {
                    value[vi++] = *p++;
                }
                value[vi] = '\\0';
                trim(value);
                if (isInteger(value))
                    printf("정수: %s = %d\\n", key, atoi(value));
                else
                    printf("실수: %s = %.2f\\n", key, atof(value));
            }
        } else p++;
    }
}

int main() {
    char json[] = "{\\"name\\":\\"Kim\\",\\"age\\":25,\\"score\\":88.5,\\"city\\":\\"Seoul\\"}";
    printf("JSON 입력: %s\\n\\n", json);
    printf("=== 파싱 결과 ===\\n");
    parseJSON(json);
    return 0;
}`,
    starter: `#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

// 여기에 trim, isInteger, parseJSON 함수를 작성하세요

int main() {
    char json[] = "{\\"name\\":\\"Kim\\",\\"age\\":25,\\"score\\":88.5,\\"city\\":\\"Seoul\\"}";
    printf("JSON 입력: %s\\n\\n", json);
    printf("=== 파싱 결과 ===\\n");
    
    // 여기에 parseJSON 호출 코드를 작성하세요
    
    return 0;
}`
  },
];
