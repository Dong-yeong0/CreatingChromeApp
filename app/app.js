const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
/*
*   관습 : string만 포함 된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
*   아마 int string 같은 타입이 없어서 저렇게 표시 해놓는거 같다.
*/

const HIDDEN_CLASSNAME = "hidden";

// eventListener의 함수 첫번째 argument는 항상 submit의 정보가 된다
function onLoginSubmit(event) {
    // .preventDefault - 브라우저의 기본 동작을 막아줌
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    /*
        greeting.innerText = "Hello" + username;
        보통 위의 방식을 주로 썼는데
    */
    /*
        이와 같은 방식으로도 된다는걸 이제 알았네 (문자열 합치기)
        규칙 single, double quotation이 아닌 `` (백틱)으로 감싸야 된다.
        백틱 사이에 표현하고 싶은 변수를 ${} 에 감싸면 끝.
    */
    
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// form submit 새로고침은 기본 동작이고 브라우저가 그러도록 프로그래밍이 되어있다.
loginForm.addEventListener("submit", onLoginSubmit);