var gameMaker = "x";
function changemarkertoX() {
    console.log("The x button was Clicked!");
    gameMaker = "x";
}
function changemarkertoO() {
    console.log("The O button was Clicked!");
    gameMaker = "o";
}
function placeMark(id) {
    var s = document.getElementById(id);
    s.innerHTML = gameMaker;
}
