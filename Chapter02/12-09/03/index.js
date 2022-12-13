// 기준 숫자

// 지시사항
//  1. solution 함수 num 매개변수에서 자연수를 받는다.
//  2. 기준 숫자는 50이며, 기준 숫자보다 작다면 항상 false 크다면 true를 출력한다.
//  3. 기준 숫자와 같은 경우는 true를 출력한다.
//  4. 주어진 정수 num은 다음 조건을 만족한다.
//  5. num∈{x∈Z∣1≤N≤100}num \in \{ x \in \Z | 1 \le N \le 100 \}
//     num∈{x∈Z∣1≤N≤100}

function solution(num) {
    return num >= 50;
}

module.exports = solution;