function start() {
    var table = document.getElementById("saved");
    if(firstVisit()){
        table.innerHTML = "This is your first visit :) Welcome anyway....";
    }else {
        parseData(table);
    }
}


function parseData(table) {
    var content = "<input id = 'deleteAll' type = 'button' value = 'Clear All' onclick = 'deleteAll()'" + "<ul>";
    var length = localStorage.length;
  
    for (var i = 0; i < length; i ++) {
        var element = localStorage.getItem(i + 1);
        content += "<li><span>Visit number: <a href= '" + (i + 1) + "'>" + localStorage.getItem(i + 1) + "</a></span>" +
        "<input id = '" + (i + 1) + "'type = 'button' value = 'Delete' onclick = 'deleteItem(id)'>"
        "</li>"
    }


    content += "</ul>"
    table.innerHTML = content;
    localStorage.setItem((length + 1) ,"You visited site on " + new Date().toLocaleString());
}

function deleteItem(id) {
    localStorage.removeItem(id);
    start();
}

function deleteAll() {
    localStorage.clear()
}
function firstVisit() {
    if (sessionStorage.getItem("wasHere")) 
       return false;
    else {
        sessionStorage.setItem("wasHere", "true"); 
        return true 
    };
}

window.addEventListener("load", start, false);