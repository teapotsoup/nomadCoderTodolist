//쿼리 셀렉터는 아이디 명시를 해줘야한다.
//document.getElementById의 경우 그럴필욘 없다
//같은 단어 다 바꾸기 컨트롤 디
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const Hidden_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//본인이 생성한 스트링이 반복해서 입력될경우 변수를 만들어주는 게 좋다
//자바스크립트는 스트링 문제를 지적하지 않기 때문이다

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(Hidden_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    paintGreetings();
}
//"Hello " + username == `Hello ${username}`

function handleLinkClick(event) {
    event.preventDefault();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(Hidden_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
    loginForm.classList.remove(Hidden_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintGreetings();
}