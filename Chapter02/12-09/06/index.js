// 자리 바꾸기

// 지시사항
//  1. solution 함수 num 매개변수는 공백으로 구분된 두 정수를 인자로 받는다.
//  2. 두 정수는 항상 서로 다른 값을 받는다.
//  3. 두 정수의 자리를 바꾸고 공백으로 구분하여 출력한다.
//  4. 주어진 두 정수는 다음 조건을 만족한다.
//     num(a,b)∈{a,b∈Z∣−9≤a,b≤9}

function solution(num) {
    const [a, b] = num.split(" ");
    return `${b} ${a}`;
}

module.exports = solution;