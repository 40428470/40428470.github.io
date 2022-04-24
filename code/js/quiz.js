// JavaScript source code
// JavaScript source code
/*event listener code based on https://sebhastian.com/call-javascript-function-html/#:~:text=To%20call%20a%20JavaScript%20function,getElementById()%20method.8 */
const correctAns = [
    'quest-1-d',
    "quest-2-b",
    "quest-3-c",
    "quest-4-a",
    "quest-5-b",
    "quest-6-b",
    "quest-7-d",
    "quest-8-c",
    "quest-9-c",
    "quest-10-d",
    "quest-11-a",
    "quest-12-b",
    "quest-13-a",
    "quest-14-1",
    "quest-15-c"
];
const userAns = [];

function checkAnswer_1() {
    //checking question answer
    var i = 0

    if (document.getElementById(correctAns[0]).checked) {
        var quest1 = "correct";
        userAns[0] = quest1;
        console.log("correct")
        console.log(userAns);
    }
    else if (document.getElementById("quest-1-a").checked || document.getElementById("quest-1-b").checked || document.getElementById("quest-1-c").checked) {
        var quest1 = "wrong";
        userAns[0] = quest1;
        console.log("wrong");
        console.log(userAns);
    }
    //return userAns;


}



function storeAnswer_1(userAns) {
    var y = 1;
    var i = 0;
    console.log(userAns[0])
    //while (i < 3) {
        var y_string = y.toString();
        console.log(i)
        console.log(userAns[i]);
    sessionStorage.setItem(y_string, userAns[i]);
    sessionStorage.setItem("test", "works");
        var y = y + 1;
        var i = i + 1;
    //}
    console.log(sessionStorage.length)
    console.log(sessionStorage.getItem("test"));
}