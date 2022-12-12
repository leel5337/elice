// 타격왕이 될 거야

// 지시사항
//  1. 0이상의 정수인 타수와 안타를 입력받으세요.
//  2. 16타수 6안타인 상태에서 입력받은 타수와 안타를 더한 타율을 구하세요.
//  3. 구한 타율을 할푼리로 출력하세요. 할푼리 아래의 소수점은 모두 버림하며 값이 0인 경우 생략합니다.

// 입력 예시1
// 3
// 2
// 출력 예시1
// 4할
// 2푼
// 1리

// 입력 예시2
// 5
// 2
// 출력 예시2
// 3할
// 8푼

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = [];


rl.on("line", function (line) {

    input.push(parseInt(line));

    if (input.length == 2) {
        rl.close();
    }
}).on("close", function () {
    var x = input[0];
    var y = input[1];
    var ans = (6 + y) / (16 + x);

    if (Math.floor(ans * 10) != 0) {
        console.log(Math.floor(ans * 10) + '할')
    }
    if (Math.floor((ans * 100) % 10) != 0) {
        console.log(Math.floor(ans * 100) % 10 + '푼')
    }
    if (Math.floor(((ans * 1000) % 100) % 10) != 0) {
        console.log((Math.floor(ans * 1000) % 100) % 10 + '리')
    }
});