/**
 *  Variable
 *  var let const
 *  var : 어떠한 규칙, 제한을 가지지 않는 변수형(실수로 변수값을 업데이트 해도 브라우저에서는 알려주지 않음)
 *  let : 업데이트를 허용함, 동일한 변수를 선언을 할 수 없다.
 *  const : 상수로서 절대로 변하지 않는 값을 가진다. (업데이트 X, 재선언 X)
 */
// 재선언, 업데이트 할 수 없는 불변의 값
const a = 5;
const b = 5;

let myName = "Dongyeong";
// let = 재선언 가능 (업데이트 허용)
myName = "Anonymous";

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
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
delete daysOfWeek[1];   // tue 삭제 (result = empty)
console.log(daysOfWeek);

// 지우고 다시 넣으면 맨 뒤에 push 된다.
daysOfWeek.push("tru");
console.log(daysOfWeek);

// empty 자리에 값 넣기 (push는 안먹히네)
daysOfWeek[1] = "tue";
console.log(daysOfWeek);

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

const player = {
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

console.log(EuAge);