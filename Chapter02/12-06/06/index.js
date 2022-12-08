// 데이터 타입 - 객체

// 지시사항
//  1. var를 사용하여 변수 student를 선언하고, 객체 데이터 타입을 넣기 위해 중괄호{}를 입력합니다.
//  2. 객체에 프로퍼티 name: "Elice", age:20, skills: ["Java", "HTML", "CSS", "JavaScript"]를 추가합니다.
//  3. 객체에 메서드 sum: function(num1,num2) { return num1 + num2; }를 추가합니다.
//  4. student.name 혹은 student["name"]을 입력하여 name 데이터에 접근합니다.
//  5. name의 데이터를 park으로 변경하고, document.write();를 사용하여 올바르게 변경됐는지 확인합니다.
//  6. sum 메서드에 인자 10, 20을 넣고, document.write();를 사용하여 올바르게 출력되는지 확인합니다.

var student = {
    name: "Elice",
    age: 20,
    skills: ["Java", "HTML", "CSS", "JavaScript"],
    sum: function(num1, num2) {
        return num1 + num2;
    }
}
student["name"] = "park";
document.write(student['name']);
document.write(student.sum(10, 20));