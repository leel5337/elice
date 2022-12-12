// 자바스크립트 활용 - 주사위 게임 만들기

// 지시사항
//  1. Math.random();의 값을 document.write()로 출력하여 실행 버튼을 누를 때 마다 1~6 사이의 랜덤한 값이 출력되도록 코드를 작성해보세요.

function rand(maxNum) {
    var dice = Math.floor(Math.random() * maxNum) + 1;
    document.write(dice);
}

rand(6)