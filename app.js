// 2022 01 11
/**
 *  Variable
 *  var let const
 *  var : 어떠한 규칙, 제한을 가지지 않는 변수형(실수로 변수값을 업데이트 해도 브라우저에서는 알려주지 않음)
 *  let : 업데이트를 허용함, 동일한 변수를 선언을 할 수 없다.
 *  const : 상수로서 절대로 변하지 않는 값을 가진다. (업데이트 X, 재선언 X)
 */
// 재선언, 업데이트 할 수 없는 불변의 값
// const a = 5;
// const b = 5;

// let myName = "Dongyeong";
// // let = 재선언 가능 (업데이트 허용)
// myName = "Anonymous";

/**
 * undefined, true, false, null
 * 이 4가지는 문자가 아닌 타입이다.
 * undefined("정의가 되지 않았어요") = 정의가 되지 않은 값, 컴퓨터 메모리 안에는 존재 (공간은 있지만 값이 없다는 것.)
 * null("비어있어요") = 변수 안에 어떠한 것이 없다는 것을 확실히 하기 위해 씀 (데이터 값이 존재하지 않는다는 것을 지시.)
 * true, false는 내가 알던 참, 거짓 (Python에서는 True, False / null은 None Pascal Case로 변하는 듯.)
 */

/**
 * Array
 * index가 있어 정보를 찾을 때 유용
 */
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// delete daysOfWeek[1];   // tue 삭제 (result = empty)
// console.log(daysOfWeek);

// // 지우고 다시 넣으면 맨 뒤에 push 된다.
// daysOfWeek.push("tru");
// console.log(daysOfWeek);

// // empty 자리에 값 넣기 (push는 안먹히네)
// daysOfWeek[1] = "tue";
// console.log(daysOfWeek);

/**
 * List
 */
/*
const player = {
    name : "DongYeong",
    age : 24
};

// 업데이트도 가능
player.age += 15;
// 전체 출력
console.log(player, console);
// key 값을 이용한 출력
console.log(player.name);

// function 어떤 코드를 캡슐화 시키는 것. (이거는 너무 많이써서 질리겠다.)
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("dongYeong");
sayHello("anonymous");
*/
// List, Function응용

/*const player = {
    name : "Dongyeong",
    sayHello : function() {
        console.log("Hello");
    },
}
console.log(player.name);
player.sayHello();

// return 값이 존재하는 Function
const age = 99;
function calculaterEuAge(ageOfForeigner) {
    return ageOfForeigner - 2;
}
const EuAge = calculaterEuAge(age);

console.log(EuAge);*/

// 2022 01 12
// prompt = 사용자에게 창을 띄울 수 있게 해줌 (message(String), defualt)
// NaN = Not a Number
/*const age = prompt("How old are you?");
// 입력 되기 전 까지 페이지는 javascript를 일시정지를 시킨다. (CSS 적용 X)
console.log(age);
// 입력값 parsing
console.log(typeof age);                // input : 12 / output String
console.log(parseInt(age));
console.log(typeof parseInt(age));      // input : 12 / output Number


// isNaN() : return 값은 boolean (true, false)
console.log(isNaN(age));
*/
/*
const title = document.querySelector(".hello h1");
console.log(title);

const allTitle = document.querySelectorAll(".hello h1");

console.log(allTitle)
*/
// 이 app.js가 있기에 javascript를 통해 HTMl의 내용을 가지고 올 수 있다.
// querySelector로 CSS Selector 전달을 할 수 있다네

/**
 * firstTitle.innerHTML = "first-child"; 이게 없으면 object 타입으로 표시한 element를 보여줌
 * 여기서 on~~ 뭐 나오는데 이렇게 많았나?
 * 
 */ 
// 와 나 맨날 $(".hello").style("color", "red"); 이런 방식으로 바꿨는데 이렇게도 되네
//firstTitle.style.color = "red";

// 드디어 event (종류가 엄청나다)
const firstTitle = document.querySelector("div.hello:first-child h1");
function titleColorChange() {
    firstTitle.style.color = "blue";
}

function handleMouseEnter() {
    firstTitle.innerHTML = "Mouse is Here";
}

function handleMouseLeave() {
    firstTitle.innerHTML = "Mouse is Gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("Copyer!");
}

function handWindowOffline() {
    alert("SOS no WIFI");
}

function handWindowOnline() {
    alert("GOOD");
}
// 여러종류 맛보기 (여기서 함수를 실행시킬 수 있게 () 를 포함 안시켜도 Javascript가 Execute 시켜줌)
//firstTitle.addEventListener("click", titleColorChange);
// 이런 방식도 있지만 더욱 선호하는건 위의 방식 왜? removeEventListener로 제거할 수 있기 때문.
firstTitle.onclick = titleColorChange;
firstTitle.addEventListener("mouseenter", handleMouseEnter);
firstTitle.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
// document.body, head, title는 콘솔에서 정상 출력이 되지만 div같은 element들은 querySelector나 getElementById 등으로 가져와야된다.
// 무슨 WIFI 연결상태도 event 걸 수 있네
window.addEventListener("offline", handWindowOffline);  // 연결 끊겼을 때
window.addEventListener("online", handWindowOnline);    // 연결 되었을 때