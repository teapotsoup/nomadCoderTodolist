const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //�Լ��� ��ü�� �����Ҷ� new�� ���δ�
    const HOURS = String(date.getHours()).padStart(2, "0");
    const MINUTES = String(date.getMinutes()).padStart(2, "0");
    const SECONDS = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${HOURS}:${MINUTES}:${SECONDS} `;
}
getClock();
setInterval(getClock, 1000);

//"1".padStart(2, "0");
//�ڸ����� �ϳ��� padstart�� ����� 2�ڸ��� �ø��� �տ� 0�� ���δ�
//�ڸ�ǰ �е� ���� "1".padEnd(2, "0");
//padStart�� ��Ʈ���̶� �ٿ��ִ� ���ڵ� ��Ʈ������ �ٲ���� �Ѵ�

//setTimeout(sayHello, 5000);
//������ �Լ��� ms���� �ð��� �μ��� �ְ� �ð��� �Ǹ� �Լ��� ȣ��

//setInterval(sayHello, 5000)
//������ �Լ��� ms���� �ð��� �μ��� �ְ� �ð����� �Լ��� ȣ��