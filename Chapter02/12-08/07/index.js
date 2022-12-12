// 조건문 - else if문

// 지시사항
//  1. var a = 20; var b = 40; var c = 60;을 입력하여 세 변수를 생성합니다.
//  2. 조건문 형식 if ( ) { } else if ( ) { } else { }을 입력합니다.
//  3. 만약 a가 b보다 크면, "a > b" 출력합니다.
//  4. 그렇지 않고, 만약 b가 c보다 크면, "b > c" 출력합니다.
//  5. 그렇지 않고, 만약 a가 c보다 작으면, "a < c" 출력합니다.
//  6. 그렇지 않고, 만약 b가 c보다 작으면, "b < c" 출력합니다.
//  7. 위의 모든 조건에 부합하지 않으면, "모든 조건을 만족하지 않는다." 출력합니다.

var a = 20;
var b = 40;
var c = 60;

if ( a > b ) {
    document.write("a > b");
} else if ( b > c ) {
    document.write("b > c");
} else if ( a < c ) {
    document.write("a < c");
} else if ( b < c ) {
    document.write("b < c");
} else {
    document.write("모든 조건을 만족하지 않는다.");
}