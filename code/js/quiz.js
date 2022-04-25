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

    //checking the answers for question 1 and storing it in the user answer array
    if (document.getElementById(correctAns[0]).checked) {
        var quest1 = "correct";
        userAns[0] = quest1;
    }
    else if (document.getElementById("quest-1-a").checked || document.getElementById("quest-1-b").checked || document.getElementById("quest-1-c").checked) {
        var quest1 = "wrong";
        userAns[0] = quest1;
    }
    else {
        var quest1 = "no-answer";
        userAns[0] = quest1;

    }
    //return userAns;

    //checking the answers for question 2 and storing it in the user array
    if (document.getElementById(correctAns[1]).checked) {
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
}



function storeAnswer_1(userAns) {
    userAns[1] = "test1"
    userAns[2] = "test2"
    userAns[3] = "test3"
    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)


    
    //storing user answers in session storage
    



    //sessionStorage.setItem("1", userAns_json);
    //sessionStorage.setItem("2", userAns_json[1]);
    //sessionStorage.setItem("3", userAns_json[2]);
    //sessionStorage.setItem("4", userAns_json[3]);
    //sessionStorage.setItem("test", userAns[0]);


    //console.log(sessionStorage.length)
    var x = sessionStorage.getItem("test");
    console.log(typeof x)
}