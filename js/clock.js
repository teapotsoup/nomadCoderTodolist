const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //함수로 객체를 생성할때 new를 붙인다
    const HOURS = String(date.getHours()).padStart(2, "0");
    const MINUTES = String(date.getMinutes()).padStart(2, "0");
    const SECONDS = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${HOURS}:${MINUTES}:${SECONDS} `;
}
getClock();
setInterval(getClock, 1000);

//"1".padStart(2, "0");
//자릿수가 하나면 padstart를 사용해 2자리로 늘리고 앞에 0을 붙인다
//자매품 패드 엔드 "1".padEnd(2, "0");
//padStart가 스트링이라 붙여주는 숫자도 스트링으로 바꿔줘야 한다

//setTimeout(sayHello, 5000);
//실행할 함수와 ms단위 시간을 인수로 넣고 시간이 되면 함수를 호출

//setInterval(sayHello, 5000)
//실행할 함수와 ms단위 시간을 인수로 넣고 시간마다 함수를 호출