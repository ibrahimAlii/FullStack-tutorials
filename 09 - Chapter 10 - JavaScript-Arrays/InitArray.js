

function start() {
    var arr1 = new Array(15);
    var arr2 = new Array(15);

    for (let index = 0; index < 15; index++) {
        arr1[index] = index + 1; 
        arr2[index] = index + 1; 
    }

    drawArray("Array 1", arr1, document.getElementById("output1"));
    drawArray("Array 2", arr2, document.getElementById("output2"));
}

function drawArray(title, array, element){ 
    var content = "<h2>" + title + "</h2><table><thead><th>Index</th><th>Value</th></thead><tbody>"

    for (let index = 0; index < array.length; index++) {
        content += "<tr><td>" + index + "</td><td>" + array[index] + "</td></tr>";
    }

    content += "</tbody></table>";

    element.innerHTML = content;
}






window.addEventListener("load", start, false);