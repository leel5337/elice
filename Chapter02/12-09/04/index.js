// 마지막 문자 출력하기

// 지시사항
//  1. solution 함수 str 매개변수로 문자열을 받는다.
//  2. 주어지는 문자열은 알파벳, 한글, 특수문자, 공백 등을 모두 포함한다.
//  3. 주어진 문자열 마지막 번째에 해당하는 문자를 출력하세요.
//  4. 문자열의 총 길이는 다음 조건을 만족한다.
//     str∈{x∈N∣1≤x≤2*53−1}

function solution(str) {
    return str[str.length -1];
}

module.exports = solution;