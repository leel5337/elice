// 자바스크립트 활용 - 문자열 거꾸로 출력하기

// 지시사항
//  1. 4줄에 for ( ) { } 을 입력하여 조건문 생성을 시작합니다.
//  2. for의 변수로 var i = str.length-1를 입력합니다.
//  3. for의 조건으로 i >= 0을 입력합니다.
//  4. for의 조건으로 i--을 입력합니다.
//  5. 조건문 실행 시, 비어있는 변수 reverStr에 str.charAt(i)를 삽입하도록 합니다.
//  6. for문 실행을 완료하였다면, reverStr을 반환하도록 합니다.

function reverse(str){

    var reverStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverStr = reverStr + str.charAt(i);
    }

    return reverStr;
}

console.log(reverse("Nice to meet you"));
document.write(reverse("Nice to meet you")); 