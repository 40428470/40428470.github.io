// JavaScript source code
// JavaScript source code
/*event listener code based on https://sebhastian.com/call-javascript-function-html/#:~:text=To%20call%20a%20JavaScript%20function,getElementById()%20method.8 */
const correctArray = ["quest-1-d", "quest-2-b", "quest-3-c", "quest-4-a", "quest-5-b", "quest-6-b", "quest-7-d", "quest-8-c", "quest-9-c", "quest-10-d", "quest-11-a", "quest-12-b", "quest-13-a", "quest-14-1", "quest-15-c"];
ansArray = []
function checkAnswer_1 (correctArray, AnsArray) {
    //checking question answer
    var i = 0
    if (document.getElementById(correctArray[i]).checked) {
        var quest1 = "correct";
        ansArray[0] = quest1;
        console.log("correct")
        console.log(ansArray)
    } else if (document.getElementById("quest-1-a").checked || document.getElementById("quest-1-b").checked || document.getElementById("quest-1-c").checked){
        var quest1 = "wrong";
        ansArray[0] = quest1;
        console.log("wrong")
        console.log(ansArray)
    }
    return ansArray;


}



function storeAnswer_1(ansArray) {
    i = 0
    for (i; i + 1; 4) {
        y = String(i);
        sessionStorage.setItem(y, ansArray[i]);
    }

}