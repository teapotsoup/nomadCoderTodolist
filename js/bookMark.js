const bookMarkForm = document.querySelector("#bookMark");
const bookMarkInput = bookMark.querySelector("#bookMark input");
const bookMarkList = document.querySelector("#bookMarkList");

const BOOKMARKS_KEY = "bookMarks";

let bookMarks = [];

function saveBookMarks() {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookMarks));
}

//링크 입력하면
//
function paintBookMark(newBookMark) {
    const li = document.createElement("li");
    li.id = newBookMark.id;
    li.style = "margin-top: 10px;";
    const span = document.createElement("span");
    const icon = document.createElement("div");
    span.style = "font-size: 23px";
    const a = document.createElement("a");
    const button = document.createElement("button");
    button.className += "btn btn-outline-secondary btn-sm";
    button.style = "display: inline;";
    button.innerText = "X";
    button.addEventListener("click", (event) => {
        const li = event.target.parentElement;
        li.remove();
        bookMarks = bookMarks.filter(e => e.id !== parseInt(li.id));
        saveBookMarks();
    });
    li.appendChild(span); // li태그안 span태그 넣기
    span.appendChild(a);  // span태그안 li태그 넣기
    li.appendChild(icon);
    icon.id = "favicon";
    icon.onclick = `window.open(${newBookMark.text}, '_blank')`;
    icon.style = `width: 23px; height: 23px; background-image: url('https://s2.googleusercontent.com/s2/favicons?domain_url=${newBookMark.text}'); background-repeat: no-repeat; background-size: cover ;`;
    li.appendChild(button); // li태그안 span태그 넣기
    let Cut = newBookMark.text.split('.');
    a.innerText = Cut[1]; //스트링입니다
    a.style = "color: white;";
    a.setAttribute('href', newBookMark.text);
    a.setAttribute('target', "_blank");
    bookMarkList.appendChild(li);
}

function bookMarkDelete(bookMarks) {
    let i = 0;
    while (i < bookMarks.length) {
        bookMarks[i].id !== li.id;
    }

}


function handlebookMarkSubmit(event) {
    event.preventDefault();
    const newBookMark = bookMarkInput.value;
    bookMarkInput.value = "";
    const newBookMarkObj = {
        text: newBookMark,
        id: Date.now()
    }
    bookMarks.push(newBookMarkObj);
    paintBookMark(newBookMarkObj);
    saveBookMarks();
};

bookMarkForm.addEventListener("submit", handlebookMarkSubmit);

const savedBookMarks = localStorage.getItem(BOOKMARKS_KEY);

if (savedBookMarks !== null) {
    const parsedBookMarks = JSON.parse(savedBookMarks);
    bookMarks = parsedBookMarks;
    parsedBookMarks.forEach((e) => {
        paintBookMark(e);
    });
}