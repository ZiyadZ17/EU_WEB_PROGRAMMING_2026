

let cxriliNode = document.querySelector(".tbl");
let cxrili = cxriliNode.innerHTML;

// 1 task

let something = prompt("Enter something");

let text = document.querySelector(".text");
text.innerHTML = something;

function changeText(words) {
    words.style.fontStyle = "italic";
    words.style.fontStyle = "bold";
    words.style.textDecorationLine = "underline";
}

changeText(text);

// 2 task

x = 5;
y = 10;

function add(a, b) {
    return a + b;
}

alert(add(x, y));

// 3 task

let fontSize = prompt("Enter font size");

function changeFontSize(size) {
    text.style.fontSize = size + "px";
}

changeFontSize(fontSize);

// 4 task

function widthTable(table) {
    table.style.display = 'block';
    table.style.width = 200 + "px";
}

widthTable(cxriliNode);

// 5 task

function heightTable(table) {
    table.style.display = 'block';
    table.style.height = 200 + "px";
}

heightTable(cxriliNode);

// 6 task

let tableSize = prompt("Enter table size");

function changeTableSize(size) {
    cxriliNode.style.display = 'block';
    cxriliNode.style.width = size + "px";
    cxriliNode.style.height = size + "px";
}

changeTableSize(tableSize);