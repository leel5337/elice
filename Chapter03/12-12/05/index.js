// N번째 요소 만들기

// 지시사항
//  index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 띄어보세요.

var myUl = document.querySelector("ul");

for (let i=0; i <= 20; i++) {
    const tag = document.createElement("li")
    tag.textContent = `${i}번째 문장`;
    myUl.appendChild(tag);
}