// 비가 오는 날엔

// 지시사항
//  1. 비가 올 확률을 입력받습니다.
//  2. 비가 올 확률이 50% 이상이면 우산을 챙긴다., 그렇지 않으면 그냥 간다.를 출력하세요.

// 입력 예시1
// - 100
// 출력 예시1
// - 우산을 챙긴다.

// 입력 예시2
// - 10
// 출력 예시2
// - 그냥 간다.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var percentage;
rl.on("line", function (line) {
    percentage = parseInt(line);
    rl.close();
}).on("close", function () {
    if (percentage >= 50) {
        console.log('우산을 챙긴다.');
    }
    else {
        console.log('그냥 간다.');
    }
});