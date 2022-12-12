// 반복문으로 구구단 완성하기

// 지시사항
//  1. for문을 이용해 2단부터 9단까지 출력하되 아래의 형식처럼 출력되어야 합니다.

for(var n = 2; n<= 9; n++) {
    for (var i = 1; i <= 9; i++) {
        document.write(n + ' x ' + i + ' = ' + (n*i));
        document.write('<br>');
    }
}