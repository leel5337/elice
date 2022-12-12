// 피보나치 수열 출력하기

// 지시사항
//  1. 자연수를 입력받습니다.
//  2. n보다 작은 수들의 피보나찌 수열을 출력하세요. 피보나찌 수열의 첫 번째 항은 0, 두 번째 항은 1입니다.

// 입력 예시1
// 1
// 출력 예시1
// [0]

// 입력 예시2
// 5
// 출력 예시2
// [0, 1, 1, 2, 3]
// # 다음 항은 5인데 5미만이므로 해당되지 않음


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var n;

rl.on("line", function (line) {
    n = parseInt(line);
    rl.close();
}).on("close", function () {
    
    var fibo = [];

    if (n >= 2) {
        fibo.push(0);
        fibo.push(1);
    } else if (n == 1) {
        fibo.push(0);
    }

    for (var i = 2; i <= n; i++) {
        if (fibo[i - 1] + fibo[i - 2] < n) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        } else {
            break;
        }
    }
    console.log(fibo);
});
