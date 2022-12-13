// 이전 숫자와 다음 숫자

// 지시사항
//  1. solution 함수 num 매개변수로 정수를 인자로 받는다.
//  2. num 값의 이전 값 num - 1과
//  3. 이후 값 num + 1을 공백을 기준으로 출력하시오.
//  4. 주어지는 num의 범위는 다음 조건을 만족한다.
//     num∈{x ∈ Z∣−2*32 ≤ x ≤ 2*32}

function solution(num) {
    return `${num-1} ${num+1}`
}

module.exports = solution;