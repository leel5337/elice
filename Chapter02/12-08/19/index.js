// 문자열은 빼달라구!

// 지시사항
//  1. 문자열을 입력받으세요.
//  2. 입력 받은 문자열에서 문자 또는 기호를 제외한 숫자만 추출해서 문자열 형태로 출력하는 프로그램을 짜주세요.

// 입력 예시
// - 12qwe34asf45
// 출력 예시
// - 123445

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var value;

rl.on("line", function (line) {
    value = line;
    rl.close();
}).on("close", function () {

    str_value = '';

    for (var i = 0; i < value.length; i++) {
        if (value[i].charCodeAt(0) >= 48 && value[i].charCodeAt(0) <= 57) {
            str_value += value[i];
        }
    }
    console.log(str_value);

});