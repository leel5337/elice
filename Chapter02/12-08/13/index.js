// 자바스크립트 활용 - 소수 출력하기

// 지시사항
//  1. 인자를 나누는 값인, 변수 divisor를 선언합니다. divisor의 초깃값은 2가 됩니다.
//  2. 매개변수 n이 변수 divisor보다 큰 조건 하에서 while문이 작동되도록 합니다.
//  3. while문 안에 if else문을 삽입합니다.
//  4. 만약 n을 divisor로 나눈 값의 나머지가 0이라면 false를 반환하고, 0이 아니라면, divisor++를 수행하도록 합니다.
//  5. while문의 조건이 false가 되면, true를 반환하도록 합니다.
//  6. 단, while문을 나오고 true를 반환하기 전에 1은 소수가 아니기 때문에 n이 1일 경우 false를 반환하도록 합니다.

// 매개변수 n이 소수라면 true를, 소수가 아니라면 false를 반환합니다.
function isPrime(n){
    var divisor = 2;
    if (n == 1) {
        return false;
    }
    while(n > divisor) {
        if (n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }n
    return true;
}


for(var i = 1; i <= 10; i++) {
    document.writeln(i, isPrime(i));
}