//���� �����ʹ� ���̵� ��ø� ������Ѵ�.
//document.getElementById�� ��� �׷��ʿ� ����
//���� �ܾ� �� �ٲٱ� ��Ʈ�� ��
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const Hidden_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//������ ������ ��Ʈ���� �ݺ��ؼ� �Էµɰ�� ������ ������ִ� �� ����
//�ڹٽ�ũ��Ʈ�� ��Ʈ�� ������ �������� �ʱ� �����̴�

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