function start() {
    var table = document.getElementById("saved");
    if(firstVisit()){
        table.innerHTML = "This is your first visit :) Welcome anyway....";
    }else {
        parseData(table);
    }
}


function parseData(table) {
    var content = "<ul>";
    var length = localStorage.length;
  
    for (var i = 0; i < length; i ++) {
        var element = localStorage.getItem(i + 1);
        content += "<li><span>Visit number: <a href= '" + (i + 1) + "'>" + localStorage.getItem(i + 1) + "</a></span></li>"
    }


    content += "</ul>"
    table.innerHTML = content;
    localStorage.setItem((length + 1) ,"You visited site on " + new Date().toLocaleString());
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