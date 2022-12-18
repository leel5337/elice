// 버튼 활성화시키기

// 지시사항
//  - activatedColor: 버튼이 활성화 되었을 때 나타나는 class
//  - deactivatedColor: 버튼이 비활성화 되었을 때 나타나는 class
//      1. 버튼 활성화 함수 activateBtn()을 구현해봅시다.
//         조건문을 통해 id의 value에 값이 존재하는 경우 로그인 버튼에 activatedColor 클래스 추가, deactivatedColor 클래스 제거
//         조건문을 통해 pw의 value에 값이 존재하지 않는 경우 로그인 버튼에 deactivatedColor 클래스 추가, activatedColor 클래스 제거
//      2. 로그인 성공 여부 함수 login() 을 구현해봅시다.
//         입력한 아이디가 elice, 비밀번호가 1234 인 경우 alert를 사용해 ‘로그인 성공’ 메시지가
//         다른 값을 입력한 경우는 ‘로그인 실패’ 메시지가 나오는 팝업이 뜨게합니다.

let inputs = document.getElementsByTagName("input");
let loginButton = document.getElementsByTagName("button")[0];

let id = inputs[0];
let pw = inputs[1];

function activateBtn() {
    if (id.value) {
        loginButton.classList.add('activatedColor');
        loginButton.classList.remove('deactivatedColor');
    }
    if (!pw.value) {
        loginButton.classList.remove('activatedColor');
        loginButton.classList.add('deactivatedColor');
    }
}

pw.addEventListener("keyup", activateBtn);

function login() {
    if (id.value === 'elice' && pw.value === '1234') {
        alert('로그인 성공');
    } else {
        window.alert('로그인 실패');
    }
}

loginButton.addEventListener("click", login);
