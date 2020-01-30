var arr;
function start() {
    var search = document.getElementById("search");
    arr = initArray();
    search.addEventListener("click", searchELement, false);
}

function searchELement() {
    var inputVal = document.getElementById("index");
    var content = document.getElementById("result");
    var index = parseInt(inputVal.value)
    if (index > arr.length || index < 0)
        content.innerText = "Value not found"
    else {
        content.innerText = "Found Value " + arr[parseInt(index)] 
    }   
}

function initArray() {
    var arr = new Array(30);
    for (let index = 0; index < arr.length; index++) {
        arr[index] = (Math.random() * 50);
        
    }

    return arr;
}

window.addEventListener("load", start, false);