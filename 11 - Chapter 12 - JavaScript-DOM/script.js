var currentNode; // store current node
var idCount = 0; // Store A unique id for nodes.

function byId() {
    var byIdText = document.getElementById("gbi");
    var target = document.getElementById(byIdText.value.toString());

    if (target)
       switchTo(target, byIdText);
}

function insert() {
    var insertText = document.getElementById("ins");
    var newNode = createNewNode(insertText.value);
    currentNode.parentNode.insertBefore(newNode, currentNode);
    switchTo(newNode);
}

function append() {
    var appendText = document.getElementById("append");
    var newNode = createNewNode(appendText.value);
    currentNode.appendChild(newNode);
    switchTo(newNode);
}

function replace() {
    var replaceText = document.getElementById("replace");
    var newNode = createNewNode(replaceText.value);
    currentNode.parentNode.replaceChild(newNode, currentNode);
    switchTo(newNode);
}

function remove() {
    if (currentNode.parentNode == document.body) {
        alert("Can't remove a top level element!!")
    }else {
        var oldNode = currentNode;
        switchTo(oldNode.parentNode);
        currentNode.removeChild(oldNode);
    }
}

function parent() {
    var target = currentNode.parentNode;

    if (target = currentNode.parentNode)
        switchTo(target)
    else alert("No parent!")
}

function switchTo(target) {
    currentNode.setAttribute("class", ""); // remove old highlight
    currentNode = target;
    currentNode.setAttribute("class", "highlighted");
    document.getElementById("gbi").value = currentNode.getAttribute("id");
}

function createNewNode(text) {
    var newNode = document.createElement("p");
    nodeId = "new" + (idCount++);
    newNode.setAttribute("id", nodeId);
    text = "[" + nodeId + "] " + text;
    newNode.appendChild(document.createTextNode(text));
    return newNode; 
}
function start() {
    document.getElementById("byIdButton").addEventListener("click", byId, false);
    document.getElementById("insertButton").addEventListener("click", insert, false);
    document.getElementById("appendButton").addEventListener("click", append, false);
    document.getElementById("replaceButton").addEventListener("click", replace, false);
    document.getElementById("removeButton").addEventListener("click", remove, false);
    document.getElementById("parentButton").addEventListener("click", parent, false);

    currentNode = document.getElementById("bigheading");
}
window.addEventListener("load", start, false);