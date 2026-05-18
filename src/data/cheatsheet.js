export const cheatsheet = {
  history: {
    title: '역사: 탄생과 진화',
    icon: '📜',
    articles: [
      {
        title: 'C 언어의 탄생 (1972)',
        body: `데니스 리치(Dennis Ritchie)는 1969~1973년 AT&T 벨 연구소에서 유닉스 운영체제를 개발하기 위해 C 언어를 만들었습니다.
기존 B 언어(BCPL 기반)의 한계를 극복하기 위해 만들어졌으며, 처음에는 "NB"(New B)라고 불렸습니다.

1978년 브라이언 커니핸과 데니스 리치가 펴낸 "The C Programming Language" (K&R)는
전 세계적으로 400만 부 이상 팔린 전설적인 책입니다. 이 책에 사용된 "Hello, World" 예제가
프로그래밍 입문의 표준이 되었습니다.`,
        funFact: '최초의 C 컴파일러는 C 언어 자체로 작성되었습니다! 이것을 부트스트래핑(bootstrapping)이라고 합니다.'
      },
      {
        title: '표준화 역사 (C89 → C23)',
        body: `• C89 (ANSI C): 첫 표준화. 함수 프로토타입, void, const, volatile 도입
• C99: // 주석, inline, long long, 복소수, 가변 길이 배열(VLA), designated initializer
• C11: _Generic, _Static_assert, 익명 구조체/공용체, threads.h, aligned_alloc
• C17: 버그 수정 위주 (기술적 결함만 교정)
• C23 (예정): typeof, nullptr, #elifdef, 재실행 가능한 표준, auto는 더 이상 타입 추론 아님`,
        funFact: 'C99의 "restrict" 키워드는 포인터가 겹치지 않음을 보장하는 최적화 힌트입니다.'
      },
      {
        title: '유닉스와 C의 관계',
        body: `C 언어와 유닉스(Unix)는 불가분의 관계입니다. 리치와 톰슨이 유닉스를 C로 다시 작성하면서
운영체제를 다른 하드웨어로 이식(porting)하는 것이 처음으로 가능해졌습니다.

이것이 "유닉스의 철학"을 가능하게 했고, 리누스 토발즈가 리눅스 커널을 C로 작성하는 계기가 되었습니다.
현재 전 세계 서버의 70% 이상이 Linux/Unix 계열이며, 이는 모두 C 언어의 유산입니다.`
      }
    ]
  },
  reallife: {
    title: '실생활 속 C 언어',
    icon: '🌍',
    articles: [
      {
        title: '운영체제 커널',
        body: `리눅스 커널(약 2800만 줄), Windows NT 커널, macOS XNU 커널의 핵심은 모두 C로 작성되었습니다.
운영체제는 C가 만들어진 근본적인 이유이자, 가장 성공적인 사용 사례입니다.

여러분이 사용하는 모든 스마트폰, 클라우드 서버, 슈퍼컴퓨터의 밑바탕에는 C 코드가 돌아가고 있습니다.

재미있는 사실: 리눅스 커널의 코딩 스타일 가이드(Coding style)는 단 3페이지입니다.`,
        funFact: '리눅스 커널의 약 95%가 C로 작성되어 있고, 나머지는 어셈블리어와 일부 Rust입니다.'
      },
      {
        title: '임베디드 시스템 & IoT',
        body: `가전제품(세탁기, 전자레인지, TV), 자동차 ECU(Engine Control Unit),
드론, 로봇, 의료기기(심장 박동기, MRI)의 펌웨어는 거의 모두 C로 작성됩니다.

C는 하드웨어를 직접 제어할 수 있고, 메모리 사용량이 적으며,
실시간 응답이 필요한 시스템에 최적의 선택입니다.

자동차 한 대에는 평균 1억 줄 이상의 코드가 들어가며, 대부분이 C와 C++입니다.`,
        funFact: '아폴로 11호의 달 착륙 유도 컴퓨터 코드는 약 4KB였습니다. 오늘날의 C 코드 1줄이면 더 많은 일을 할 수 있습니다!'
      },
      {
        title: '데이터베이스 & 인프라',
        body: `SQLite (세계에서 가장 널리 쓰이는 DB, 약 1.4조 개 기기), Redis (인메모리 캐시),
NGINX (웹 서버, 전 세계 웹사이트의 30% 이상), Lua, Python/Perl/Ruby의 핵심(C로 작성),

MariaDB/MySQL, PostgreSQL의 일부 등 현대 IT 인프라의 핵심은 C입니다.

여러분이 브라우저로 이 글을 읽는 순간에도 수많은 C 코드가 실행되고 있습니다.`
      }
    ]
  },
  funfacts: {
    title: '흥미로운 사실 & 밈',
    icon: '🤯',
    articles: [
      {
        title: 'C는 프로그래머보다 나이가 많다',
        body: `C 언어(1972년)는 현재 생존하는 많은 프로그래머보다 먼저 태어났습니다.
50년 넘는 역사 동안 C는 계속해서 TIOBE 지수 상위 2위 안에 들었습니다.

"모든 언어는 C를 따라하거나 C를 벗어나려고 한다. 하지만 결국 C의 그림자 안에 있다."
— (업계 관계자 농담)`,
        funFact: '2019년 조사에 따르면 전 세계 소프트웨어의 약 30%가 여전히 C로 작성됩니다.'
      },
      {
        title: '미정의 동작 (Undefined Behavior)',
        body: `C 언어의 "미정의 동작(UB)"은 유명한 함정입니다.
\`int a = 5 / 0;\` → UB. \`i++ + ++i\` → UB. \`arr[5] = 10\` (범위 밖) → UB.

컴파일러는 UB를 만나면 "무엇을 해도 괜찮다"고 간주합니다.
실제로 GCC는 UB가 있는 코드를 발견하면 그 코드가 아예 없다고 가정하고 최적화합니다!

유명한 밈: "C에서 미정의 동작을 호출하면 악마가 당신의 코에서 날아나올 수 있다"
(실제 C 표준 위원회의 농담에서 유래)`,
        funFact: '2015년 Heartbleed 버그(OpenSSL)는 단순한 메모리 경계 검사 누락(C의 버퍼 오버리드)으로 전 세계 서버에 영향을 미쳤습니다.'
      },
      {
        title: 'C 언어의 유산',
        body: `C의 문법은 C++, Java, C#, JavaScript, Go, Rust, Swift, Kotlin 등 수많은 언어에 영향을 주었습니다.

"중괄호 { }"를 사용한 블록 구분, 세미콜론으로 문장 종료,
//와 /* */ 주석, for/while/if 제어문 등은 모두 C가 원조입니다.

사실 Java의 "Write Once, Run Anywhere" 철학도 C의 이식성(Portability) 아이디어에서 출발했습니다.`
      }
    ]
  },
  culture: {
    title: '개발 문화 & 명언',
    icon: '🎭',
    articles: [
      {
        title: '프로그래밍 명언',
        body: `"C는 날카로운 칼과 같습니다. 자신을 베기 쉽지만, 올바르게 사용하면 무엇이든 만들 수 있습니다."
— 컴퓨터 과학자

"C는 이식성이 뛰어난 어셈블리어다."
— 데니스 리치 (C 창시자)

"고통 없이는 얻는 것이 없다. (No pain, no gain.) — 이것이 C를 배우는 이유이다."
— 브라이언 커니핸`,
        funFact: 'K&R 책의 표지에 있는 프로그램은 단 16줄이며, stdin에서 문자를 받아 stdout으로 복사합니다.'
      },
      {
        title: '유명한 논쟁들',
        body: `• 'goto'를 써야 하는가? (Dijkstra의 "Goto 문은 해롭다" 논문, 1968)
• 포인터 vs 배열: 누가 더 빠른가?
• i++ vs ++i: 성능 차이가 있는가? (후자가 미세하게 빠름)
• 탭 vs 스페이스: 리눅스는 탭 8칸, BSD는 스페이스 4칸
• K&R 스타일 vs Allman 스타일: 중괄호 위치 논쟁

이 중 "탭 vs 스페이스"는 아직도 깊은 상처로 남아 있습니다.`,
        funFact: '리누스 토발즈는 리눅스 커널에서 "탭은 8칸"이라는 원칙을 고수하며, 다른 스타일을 패치 거부합니다.'
      },
      {
        title: 'C 개발자를 위한 도구',
        body: `• GCC (GNU Compiler Collection): 가장 널리 쓰이는 C 컴파일러
• Clang/LLVM: 빠른 컴파일 속도와 친절한 오류 메시지
• Valgrind: 메모리 누수/잘못된 접근 탐지
• GDB (GNU Debugger): 디버깅의 표준
• Make / CMake: 빌드 시스템
• ctags / cscope: 소스 코드 탐색
• clang-format: 코드 스타일 자동 정리
• sanitizers (-fsanitize=address, undefined): UB 찾기`,
        funFact: 'Clang의 오류 메시지는 "C"가 아니라 "C++"처럼 친절하다는 평가를 받아 GCC도 오류 메시지 품질을 개선했습니다.'
      }
    ]
  },
  comparison: {
    title: 'C vs 다른 언어',
    icon: '⚔️',
    articles: [
      {
        title: 'C vs C++',
        body: `C++는 "C with Classes"로 시작했습니다. C는 절차적 언어, C++는 다중 패러다임.
C는 컴파일러가 약 100KB면 되지만, C++는 수 MB가 필요합니다.

C는 "비용이 드는 기능은 없다"는 철학을 따릅니다.

"어떤 언어로 작성하는지는 중요하지 않다. 중요한 것은 당신이 그것을 포인터와
함께 써야 한다면 고통을 겪을 것이라는 사실이다."
— C++ 창시자 비야네 스트로스트룹의 변호`,
        funFact: '스트로스트룹은 처음에 C++를 "C with Classes"라고 불렀고, 1983년에 C++로 개명했습니다(++ 연산자에서 유래).'
      },
      {
        title: 'C vs Rust',
        body: `Rust(2015)는 Mozilla가 C/C++의 메모리 안전성 문제를 해결하기 위해 만든 언어입니다.
소유권(Ownership) 시스템으로 컴파일 타임에 메모리 오류를 방지합니다.

Rust는 2023년부터 리눅스 커널에 점진적으로 도입되고 있습니다.

하지만 C는 여전히 임베디드, 커널, 레거시 시스템에서 절대적 우위를 점합니다.

"Rust는 안전하지만, C는 자유롭다." — 개발자들의 의견`,
        funFact: 'Rust는 7년 연속 "가장 사랑받는 언어" (Stack Overflow 설문조사)입니다. 하지만 여전히 C가 가장 많이 사용됩니다.'
      },
      {
        title: 'C vs Python',
        body: `Python은 C로 작성된 인터프리터(CPython) 위에서 동작합니다.
즉, 파이썬의 print()도 내부적으로는 C의 printf()를 호출합니다.

속도: C는 Python보다 보통 10~100배 빠릅니다. (for 루프 기준)

"Python은 생각하는 속도로 실행되고, C는 실행하는 속도로 생각한다."
— 프로그래머들 사이의 말`,
        funFact: 'NumPy는 C로 작성된 핵심 연산 라이브러리입니다. 그래서 파이썬으로도 수치 연산을 빠르게 할 수 있습니다.'
      }
    ]
  },
  c23: {
    title: 'C23 최신 표준',
    icon: '🆕',
    articles: [
      {
        title: 'C23 주요 변경 사항',
        body: `2024년 발표된 C23은 C 언어의 가장 큰 업데이트 중 하나입니다.

• typeof / typeof_unqual: 타입 추출 연산자
• nullptr / nullptr_t: 널 포인터 전용 키워드 (NULL 대체)
• #elifdef / #elifndef: 전처리기 조건 간소화
• bool, true, false: 이제 키워드 (stdbool.h 불필요)
• auto: 원래 의미('자동 변수')는 사라짐
• 재실행 가능(reentrant) 표준 라이브러리
• 2의 보수만 허용 (1의 보수, 부호-크기 방식 제거)
• strdup(), strndup() 표준화
• constexpr: 컴파일 타임 상수`,
        funFact: 'C23은 C++과의 호환성을 높이는 방향으로 많은 기능이 추가되었습니다.'
      },
      {
        title: '앞으로의 C 언어',
        body: `50년이 넘었지만 C 언어는 여전히 진화하고 있습니다.

• AI/ML의 기반: Python AI 라이브러리는 결국 C/C++로 작성되어 있습니다.
• 웹어셈블리(Wasm): C 코드를 브라우저에서 실행할 수 있게 합니다.
• Embedded Linux: IoT 시대에 더 중요해짐
• 자율주행차, 로봇, 드론: 실시간 제어에 C 필수

"C는 죽지 않았다. 그냥 조금 더 늙었을 뿐이다."
— 스택오버플로우 개발자 설문 중에서`,
        funFact: 'TIOBE 지수 기준 2024년에도 C는 2위 (1위 Python)를 유지하고 있습니다. 계속해서 현역 언어입니다.'
      }
    ]
  }
};

export const cheatsheetLegacy = [
  { syntax: '#include <stdio.h>', desc: '표준 입출력 헤더 포함' },
  { syntax: 'int main() { ... }', desc: '메인 함수 (프로그램 진입점)' },
  { syntax: 'return 0;', desc: '정상 종료 반환 (0=성공)' },
  { syntax: 'int x = 10;', desc: '정수형 변수 선언' },
  { syntax: 'float f = 3.14;', desc: '실수형 변수' },
  { syntax: "char c = 'A';", desc: '문자형 변수' },
  { syntax: 'if (조건) { } else { }', desc: '조건문' },
  { syntax: 'for (int i=0; i<n; i++)', desc: '반복문' },
  { syntax: 'while (조건) { }', desc: '조건 반복문' },
  { syntax: 'int *p = &x;', desc: '포인터 선언 및 주소 할당' },
  { syntax: 'int arr[5] = {1,2,3};', desc: '배열 선언 및 초기화' },
  { syntax: '// 주석', desc: '한 줄 주석' },
  { syntax: '/* 여러 줄 주석 */', desc: '블록 주석' },
  { syntax: ';', desc: '문장 종료 (세미콜론 필수)' },
];
