// 돌다리 건너기

// 지시사항
//  1. solution 함수 position 매개변수로 자연수를 인자로 받는다.
//  2. 이 프로그램에서는 엘리스 토끼가 무조건 2개씩 돌다리를 건너는 것으로 간주한다.
//  3. 주어지는 position의 범위는 다음 조건을 만족한다.
//     position∈{x∈N∣1≤x≤18}

function solution(position) {
    return position + 2;
}

module.exports = solution;
