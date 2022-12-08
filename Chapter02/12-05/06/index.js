// 문자열 자르기

// 지시사항
//  1. 문자열을 공백(‘‘)을 기준으로 나눈 결과를 변수에 저장하세요.
//  2. typeof를 사용해 문자열을 나눈 결과의 타입을 웹 화면에 출력하세요.
//  3. 웹 화면에 문자열의 첫 번째 단어를 출력하세요.

var str = "Good morning! Have a nice day.";

const splitStr = str.split(' ');

document.write(typeof splitStr);
document.write(splitStr[0]);