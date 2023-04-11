// Question 1

/*


let x=+prompt("Enter Value 1")
let y=+prompt("Enter Value 1")

function parent(x) {
    return function (y) {
        return x + y
    }
}
let add = parent(x);
console.log(add(y))


*/

// ----------------------------x----

// Question 2

/*

let arr = [1, 2, 3, 4, 22, 5, 6];
let i = 0;
let value = +prompt("Enter Value to search");

function search(arr, i, value) {
    if (value === arr[i]) {
        return true;
    } else if (i < arr.length - 1) {
        i++;
        return search(arr, i, value)
    } else {
        return false
    }
}
console.log(search(arr, i, value))

*/

// ----------------------------x----

// Question 3

function addParagraph() {
    const text = prompt("Enter a sentence/paragraph");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = text;
    // const body = document.querySelector("body");
    const id = document.getElementById("para1")
    id.appendChild(newParagraph);
}

// -------------x-------------------

// Question 4

function addList() {
    const listText = prompt("Enter a sentence/paragraph");
    const li = document.createElement("li");
    li.textContent = listText;
    // const body = document.querySelector("body");
    const id = document.getElementById("list1")
    id.appendChild(li);
}

// -------------x-------------------

// Question 5

function colorPara() {
    const paraID = prompt("Enter Paragraph ID");
    const colour = prompt("Enter Colour Name")
    // const id1 = document.getElementById("bg1");
    // id.style.color = "yellow"
    const id2 = document.getElementById(paraID);
    id2.style.color = colour;
}


// -------------x-------------------

// Question 6

let previousRecord = localStorage.getItem("Student Data");

let arrData = previousRecord ? JSON.parse(previousRecord) : []

function setData(key, obj) {
    // let strData = JSON.stringify(arrData.push(obj););
    // localStorage.setItem(key, strData);
    let existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(obj);
    localStorage.setItem(key, JSON.stringify(existingData));
    console.log(existingData);
}

function takeData() {
    let data = {
        name: prompt("Enter Name"),
        roll: +prompt("Enter Roll Number"),
        subject: prompt("Enter Subject Name"),
    }
    let key = prompt("Enter Property Name");
    setData(key.toLowerCase(), data);
}


// -------------x-------------------

// Question 7
function getData() {
    let keys = prompt("Enter Property to get its Data")
    // console.log(JSON.parse(localStorage.getItem(keys)))
    return JSON.parse(localStorage.getItem(keys))
}

// -------------x-------------------

// Question 8


let previousRecord2 = localStorage.getItem("Student Data");

let arrData2 = previousRecord2 ? JSON.parse(previousRecord2) : []

function setData(key, obj) {
    // let strData = JSON.stringify(arrData.push(obj););
    // localStorage.setItem(key, strData);
    let existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(obj);
    localStorage.setItem(key, JSON.stringify(existingData));
    console.log(existingData);
}

function takeData2() {
    let data = {
        name: prompt("Enter Name"),
        roll: +prompt("Enter Roll Number"),
        subject: prompt("Enter Subject Name"),
    }
    let key = prompt("Enter Property Name");
    setData(key.toLowerCase(), data);
}

function getData2() {
    let keys = prompt("Enter Property to get its Data")
    // console.log(JSON.parse(localStorage.getItem(keys)))
    return JSON.parse(localStorage.getItem(keys))
}