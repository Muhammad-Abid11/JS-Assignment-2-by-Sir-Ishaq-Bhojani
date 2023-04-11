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

