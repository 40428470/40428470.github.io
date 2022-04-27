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
    "quest-14-d",
    "quest-15-c"
];
var userAns = [];


function checkAnswer_1() {
    /* This function checks how the user has answered the questions on quiz page 1 and stores them in an array */

    //checking the answers for question 1 
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
    

    //checking the answers for question 2 
    if (document.getElementById(correctAns[1]).checked) {
        var quest2 = "correct";
        userAns[1] = quest2;
    }
    else if (document.getElementById("quest-2-a").checked || document.getElementById("quest-2-c").checked || document.getElementById("quest-2-d").checked) {
        var quest2 = "wrong";
        userAns[1] = quest2;
    }
    else {
        var quest2 = "no-answer";
        userAns[1] = quest2;
    }

    //checking the answers for question 3
    if (document.getElementById(correctAns[2]).checked) {
        var quest3 = "correct";
        userAns[2] = quest3;
    }
    else if (document.getElementById("quest-3-a").checked || document.getElementById("quest-3-b").checked || document.getElementById("quest-3-d").checked) {
        var quest3 = "wrong";
        userAns[2] = quest3;
    }
    else {
        var quest2 = "no-answer";
        userAns[2] = quest2;
    }

    //checking the answers for question 4
    if (document.getElementById(correctAns[3]).checked) {
        var quest4 = "correct";
        userAns[3] = quest3;
    }
    else if (document.getElementById("quest-3-a").checked || document.getElementById("quest-3-b").checked || document.getElementById("quest-3-d").checked) {
        var quest3 = "wrong";
        userAns[3] = quest3;
    }
    else {
        var quest2 = "no-answer";
        userAns[3] = quest2;
    }
}


function checkAnswer_2() {
    /* This function checks how the user has answered the questions on quiz page 2 and stores them in an array */
    
    //checking the answers for question 5
    if (document.getElementById(correctAns[4]).checked) {
        var quest5 = "correct";
        userAns[4] = quest5;
    }
    else if (document.getElementById("quest-5-a").checked || document.getElementById("quest-5-c").checked || document.getElementById("quest-5-d").checked) {
        var quest5 = "wrong";
        userAns[4] = quest5;
    }
    else {
        var quest5 = "no-answer";
        userAns[4] = quest5;

    }

    //checking the answers for question 6 
    if (document.getElementById(correctAns[5]).checked) {
        var quest6 = "correct";
        userAns[5] = quest6;
    }
    else if (document.getElementById("quest-6-a").checked || document.getElementById("quest-6-c").checked || document.getElementById("quest-6-d").checked) {
        var quest6 = "wrong";
        userAns[5] = quest6;
    }
    else {
        var quest6 = "no-answer";
        userAns[5] = quest6;
    }

    //checking the answers for question 7
    if (document.getElementById(correctAns[6]).checked) {
        var quest7 = "correct";
        userAns[6] = quest7;
    }
    else if (document.getElementById("quest-7-a").checked || document.getElementById("quest-7-b").checked || document.getElementById("quest-7-c").checked) {
        var quest7 = "wrong";
        userAns[6] = quest7;
    }
    else {
        var quest7 = "no-answer";
        userAns[6] = quest7;
    }

    //checking the answers for question 8
    if (document.getElementById(correctAns[7]).checked) {
        var quest8 = "correct";
        userAns[7] = quest8;
    }
    else if (document.getElementById("quest-8-a").checked || document.getElementById("quest-8-b").checked || document.getElementById("quest-8-d").checked) {
        var quest8 = "wrong";
        userAns[7] = quest8;
    }
    else {
        var quest8 = "no-answer";
        userAns[7] = quest8;
    }
}


function checkAnswer_3() {
    /* This function checks how the user has answered the questions on quiz page 3 and stores them in an array */
    console.log("works")
    //checking the answers for question 9
    if (document.getElementById(correctAns[8]).checked) {
        var quest9 = "correct";
        userAns[8] = quest5;
    }
    else if (document.getElementById("quest-9-a").checked || document.getElementById("quest-9-b").checked || document.getElementById("quest-9-d").checked) {
        var quest9 = "wrong";
        userAns[8] = quest9;
    }
    else {
        var quest9 = "no-answer";
        userAns[8] = quest9;

    }

    //checking the answers for question 10 
    if (document.getElementById(correctAns[9]).checked) {
        var quest10 = "correct";
        userAns[9] = quest10;
    }
    else if (document.getElementById("quest-10-a").checked || document.getElementById("quest-10-b").checked || document.getElementById("quest-10-c").checked) {
        var quest10 = "wrong";
        userAns[9] = quest10;
    }
    else {
        var quest10 = "no-answer";
        userAns[9] = quest10;
    }

    //checking the answers for question 11
    if (document.getElementById(correctAns[10]).checked) {
        var quest11 = "correct";
        userAns[10] = quest11;
    }
    else if (document.getElementById("quest-11-b").checked || document.getElementById("quest-11-c").checked || document.getElementById("quest-11-d").checked) {
        var quest11 = "wrong";
        userAns[10] = quest11;
    }
    else {
        var quest11 = "no-answer";
        userAns[10] = quest11;
    }

    //checking the answers for question 12
    if (document.getElementById(correctAns[11]).checked) {
        var quest12 = "correct";
        userAns[11] = quest12;
    }
    else if (document.getElementById("quest-12-a").checked || document.getElementById("quest-12-c").checked || document.getElementById("quest-12-d").checked) {
        var quest12 = "wrong";
        userAns[11] = quest12;
    }
    else {
        var quest12 = "no-answer";
        userAns[11] = quest12;
    }
}

function checkAnswer_4() {
    /* This function checks how the user has answered the questions on quiz page 4 and stores them in an array */

    //checking the answers for question 13
    if (document.getElementById(correctAns[12]).checked) {
        var quest13 = "correct";
        userAns[12] = quest13;
    }
    else if (document.getElementById("quest-13-b").checked || document.getElementById("quest-13-c").checked || document.getElementById("quest-13-d").checked) {
        var quest13 = "wrong";
        userAns[12] = quest13;
    }
    else {
        var quest13 = "no-answer";
        userAns[12] = quest13;

    }

    //checking the answers for question 14 
    console.log(correctAns[13]);
    if (document.getElementById(correctAns[13]).checked) {
        var quest14 = "correct";
        userAns[13] = quest14;
    }
    else if (document.getElementById("quest-14-a").checked || document.getElementById("quest-14-b").checked || document.getElementById("quest-14-c").checked) {
        var quest14 = "wrong";
        userAns[13] = quest14;
    }
    else {
        var quest14 = "no-answer";
        userAns[13] = quest14;
    }

    //checking the answers for question 15
    if (document.getElementById(correctAns[14]).checked) {
        var quest15 = "correct";
        userAns[14] = quest15;
    }
    else if (document.getElementById("quest-15-a").checked || document.getElementById("quest-15-b").checked || document.getElementById("quest-15-d").checked) {
        var quest15 = "wrong";
        userAns[14] = quest15;
    }
    else {
        var quest15 = "no-answer";
        userAns[14] = quest15;
    }
}

function storeAnswer_1() {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 1*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)
    
    //storing user answers in session storage
    console.log(userAns);
    sessionStorage.setItem("1", userAns[0]);
    sessionStorage.setItem("2", userAns[1]);
    sessionStorage.setItem("3", userAns[2]);
    sessionStorage.setItem("4", userAns[3]);
}

function storeAnswer_2(userAns) {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 2*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("5", userAns[0]);
    sessionStorage.setItem("6", userAns[1]);
    sessionStorage.setItem("7", userAns[2]);
    sessionStorage.setItem("8", userAns[3]);

}

function storeAnswer_3(userAns) {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 3*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("9", userAns[0]);
    sessionStorage.setItem("10", userAns[1]);
    sessionStorage.setItem("11", userAns[2]);
    sessionStorage.setItem("12", userAns[3]);

}


function storeAnswer_4(userAns) {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 4*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("13", userAns[0]);
    sessionStorage.setItem("14", userAns[1]);
    sessionStorage.setItem("15", userAns[2]);

}

function sub_text_1() {
    //question 1 submit text
    console.log("works")
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-1-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_2() {
    //question 2 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-2-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_3() {
    //question 3 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-3-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_4() {
    //question 4 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-4-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_5() {
    //question 5 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-5-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_6() {
    //question 6 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-6-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_7() {
    //question 7 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-7-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_8() {
    //question 8 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-8-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_9() {
    //question 9 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-9-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_10() {
    //question 10 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-10-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_11() {
    //quesiton 11 submit text 
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-11-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_12() {
    //question 12 submit text 
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-12-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_13() {
    //question 13 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-13-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_14() {
    //question 14 submit text 
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-14-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_15() {
    //question 15 submit text
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-15-noti");
    div_noti_1.appendChild(noti);
}
