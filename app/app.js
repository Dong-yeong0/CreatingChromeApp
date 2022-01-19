const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

// eventListener의 함수 첫번째 argument는 항상 submit의 정보가 된다
function onLoginSubmit(event) {
    // .preventDefault - 브라우저의 기본 동작을 막아줌
    
    console.log(event);
}

function handleLinkClick() {
    // alert OK 누르면 a href 로 이동
    alert("click");
}

// form submit 새로고침은 기본 동작이고 브라우저가 그러도록 프로그래밍이 되어있다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)