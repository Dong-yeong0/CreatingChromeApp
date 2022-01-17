const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

// eventListener의 함수 첫번째 argument는 항상 submit의 정보가 된다
function onLoginSubmit(event) {
    // .preventDefault - 브라우저의 기본 동작을 막아줌
    event.preventDefault();
    console.log(event);
}
// form submit 새로고침은 기본 동작이고 브라우저가 그러도록 프로그래밍이 되어있다.
loginForm.addEventListener("submit", onLoginSubmit);
