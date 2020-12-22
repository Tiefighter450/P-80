function getParagraph1() {
    var inputs = [];
    for(i = 1;i <= 6; i++) {
        inputs.push(document.getElementById("para1InputBox" + i).value);
    }
    inputs.join(". ");
    document.getElementById("makeParagraph1").innerHTML = inputs.join(". ")
}
function getParagraph2() {
    var inputs = [];
    for(i = 1;i <= 6; i++) {
        inputs.push(document.getElementById("para2InputBox" + i).value);
    }
    inputs.join(". ");
    document.getElementById("makeParagraph2").innerHTML = inputs.join(". ")
}