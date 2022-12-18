// 배경색 바꾸기

// 지시사항
//  1. 마우스를 올리면 각 영역의 이름과 동일한 색으로 배경색이 변하도록 클래스를 추가해보세요.

var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

blockOne.addEventListener('mouseenter', function () {
    blockOne.classList.add('red');
});
blockTwo.addEventListener('mouseenter', () => {
    blockTwo.classList.add('yellow');
});
blockThree.addEventListener('mouseenter', () => {
    blockThree.classList.add('green');
});
