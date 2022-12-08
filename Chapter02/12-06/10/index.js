// 프로퍼티와 메서드 - 배열

// 지시사항
//  1. 배열 [“Apple”, “Banana”, “Tomato”] 를 데이터로 갖는 변수 fruit을 선언합니다.
//  2. .length를 사용하여 변수의 길이를 확인합니다.
//  3. push를 사용하여 배열 맨 끝에 데이터 “A” 를 추가합니다.
//  4. unshift를 사용하여 배열 맨 앞에 데이터 “B” 를 추가합니다.
//  5. document.write();를 사용하여 데이터가 올바르게 추가됐는지 확인합니다.
//  6. pop을 사용하여 배열 맨 끝 데이터를 제거합니다.
//  7. shift를 사용하여 배열 맨 앞 데이터를 제거합니다.
//  8. document.write();를 사용하여 데이터가 올바르게 제거됐는지 확인합니다.

var fruit = ["Apple", "Banana", "Tomato"];
document.write(fruit.length);
fruit.push("A");
fruit.unshift("B");
document.write(fruit);

fruit.pop();
fruit.shift();
document.write(fruit);