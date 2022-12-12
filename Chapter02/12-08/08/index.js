// 조건문 - 중첩 if문

// 지시사항
//  1. var a = 20; var b = 40;을 입력하여 두 변수를 생성합니다.
//  2. 조건문 형식 if ( ) { if ( ) { } else { } } else { }를 입력합니다.
//  3. a와 b가 같지 않다면, 중첩된 if문 실행, 같다면 "a === b" 출력합니다.
//  4. 중첩된 if문에서, a가 b보다 크면 "a > b", 그렇지 않으면 "a < b" 출력합니다.

var a = 20;
var b = 40;

if ( a !== b ) {

    if (a > b) {
        document.write("a > b");
    }
    else {
        document.write("a < b");
    }
} else {
    document.write("a === b");
}