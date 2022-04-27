// JavaScript source code
// JavaScript source code
/*event listener code based on https://sebhastian.com/call-javascript-function-html/#:~:text=To%20call%20a%20JavaScript%20function,getElementById()%20method.8 */

//declaring global variables
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
var all_checked = [];
var checkArray = ["not", "not", "not", "not"]

function checkAnswer_1_1() {
    /* This function checks how the user has answered the questions on quiz page 1 and stores them in an array */

    //checking the answers for question 1 
    if (document.getElementById(correctAns[0]).checked) {
        var quest1 = "correct";
        userAns[0] = quest1;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else if (document.getElementById("quest-1-a").checked || document.getElementById("quest-1-b").checked || document.getElementById("quest-1-c").checked) {
        var quest1 = "wrong";
        userAns[0] = quest1;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else {
        var quest1 = "no-answer";
        userAns[0] = quest1;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
            console.log(all_checked);
        }

    }

}
function checkAnswer_1_2() {

    //checking the answers for question 2 
    if (document.getElementById(correctAns[1]).checked) {
        var quest2 = "correct";
        userAns[1] = quest2;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else if (document.getElementById("quest-2-a").checked || document.getElementById("quest-2-c").checked || document.getElementById("quest-2-d").checked) {
        var quest2 = "wrong";
        userAns[1] = quest2;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else {
        var quest2 = "no-answer";
        userAns[1] = quest2;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
            console.log(all_checked);
        }
    }
}
function checkAnswer_1_3() {

    //checking the answers for question 3
    if (document.getElementById(correctAns[2]).checked) {
        var quest3 = "correct";
        userAns[2] = quest3;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else if (document.getElementById("quest-3-a").checked || document.getElementById("quest-3-b").checked || document.getElementById("quest-3-d").checked) {
        var quest3 = "wrong";
        userAns[2] = quest3;
        all_checked = 3;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else {
        var quest2 = "no-answer";
        userAns[2] = quest2;
        all_checked = 3;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
            console.log(all_checked);
        }
    }
}

function checkAnswer_1_4() {
    //checking the answers for question 4
    if (document.getElementById(correctAns[3]).checked) {
        var quest4 = "correct";
        userAns[3] = quest3;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else if (document.getElementById("quest-3-a").checked || document.getElementById("quest-3-b").checked || document.getElementById("quest-3-d").checked) {
        var quest3 = "wrong";
        userAns[3] = quest3;
        all_checked = 4;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else {
        var quest2 = "no-answer";
        userAns[3] = quest2;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
            console.log(all_checked);
        }
    }
}


function checkAnswer_2() {
    /* This function checks how the user has answered the questions on quiz page 2 and stores them in an array */
    
    //checking the answers for question 5
    if (document.getElementById(correctAns[4]).checked) {
        var quest5 = "correct";
        userAns[0] = quest5;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else if (document.getElementById("quest-5-a").checked || document.getElementById("quest-5-c").checked || document.getElementById("quest-5-d").checked) {
        var quest5 = "wrong";
        userAns[0] = quest5;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else {
        var quest5 = "no-answer";
        userAns[0] = quest5;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }

    }

    //checking the answers for question 6 
    if (document.getElementById(correctAns[5]).checked) {
        var quest6 = "correct";
        userAns[1] = quest6;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else if (document.getElementById("quest-6-a").checked || document.getElementById("quest-6-c").checked || document.getElementById("quest-6-d").checked) {
        var quest6 = "wrong";
        userAns[1] = quest6;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else {
        var quest6 = "no-answer";
        userAns[1] = quest6;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }

    //checking the answers for question 7
    if (document.getElementById(correctAns[6]).checked) {
        var quest7 = "correct";
        userAns[2] = quest7;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else if (document.getElementById("quest-7-a").checked || document.getElementById("quest-7-b").checked || document.getElementById("quest-7-c").checked) {
        var quest7 = "wrong";
        userAns[2] = quest7;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else {
        var quest7 = "no-answer";
        userAns[2] = quest7;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }

    //checking the answers for question 8
    if (document.getElementById(correctAns[7]).checked) {
        var quest8 = "correct";
        userAns[3] = quest8;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else if (document.getElementById("quest-8-a").checked || document.getElementById("quest-8-b").checked || document.getElementById("quest-8-d").checked) {
        var quest8 = "wrong";
        userAns[3] = quest8;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else {
        var quest8 = "no-answer";
        userAns[3] = quest8;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
}


function checkAnswer_3() {
    /* This function checks how the user has answered the questions on quiz page 3 and stores them in an array */
    //checking the answers for question 9
    if (document.getElementById(correctAns[8]).checked) {
        var quest9 = "correct";
        userAns[0] = quest9;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else if (document.getElementById("quest-9-a").checked || document.getElementById("quest-9-b").checked || document.getElementById("quest-9-d").checked) {
        var quest9 = "wrong";
        userAns[0] = quest9;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else {
        var quest9 = "no-answer";
        userAns[0] = quest9;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }

    }

    //checking the answers for question 10 
    if (document.getElementById(correctAns[9]).checked) {
        var quest10 = "correct";
        userAns[1] = quest10;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else if (document.getElementById("quest-10-a").checked || document.getElementById("quest-10-b").checked || document.getElementById("quest-10-c").checked) {
        var quest10 = "wrong";
        userAns[1] = quest10;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else {
        var quest10 = "no-answer";
        userAns[1] = quest10;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }

    //checking the answers for question 11
    if (document.getElementById(correctAns[10]).checked) {
        var quest11 = "correct";
        userAns[2] = quest11;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else if (document.getElementById("quest-11-b").checked || document.getElementById("quest-11-c").checked || document.getElementById("quest-11-d").checked) {
        var quest11 = "wrong";
        userAns[2] = quest11;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else {
        var quest11 = "no-answer";
        userAns[2] = quest11;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }

    //checking the answers for question 12
    if (document.getElementById(correctAns[11]).checked) {
        var quest12 = "correct";
        userAns[3] = quest12;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else if (document.getElementById("quest-12-a").checked || document.getElementById("quest-12-c").checked || document.getElementById("quest-12-d").checked) {
        var quest12 = "wrong";
        userAns[3] = quest12;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
    else {
        var quest12 = "no-answer";
        userAns[3] = quest12;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[3] == "not") {
            all_checked = all_checked + 1;
            checkArray[3] = "yes";
        }
    }
}

function checkAnswer_4() {
    /* This function checks how the user has answered the questions on quiz page 4 and stores them in an array */

    //checking the answers for question 13
    if (document.getElementById(correctAns[12]).checked) {
        var quest13 = "correct";
        userAns[0] = quest13;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else if (document.getElementById("quest-13-b").checked || document.getElementById("quest-13-c").checked || document.getElementById("quest-13-d").checked) {
        var quest13 = "wrong";
        userAns[0] = quest13;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }
    }
    else {
        var quest13 = "no-answer";
        userAns[0] = quest13;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[0] == "not") {
            all_checked = all_checked + 1;
            checkArray[0] = "yes";
        }

    }

    //checking the answers for question 14 
    console.log(correctAns[13]);
    if (document.getElementById(correctAns[13]).checked) {
        var quest14 = "correct";
        userAns[1] = quest14;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else if (document.getElementById("quest-14-a").checked || document.getElementById("quest-14-b").checked || document.getElementById("quest-14-c").checked) {
        var quest14 = "wrong";
        userAns[1] = quest14;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }
    else {
        var quest14 = "no-answer";
        userAns[1] = quest14;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[1] == "not") {
            all_checked = all_checked + 1;
            checkArray[1] = "yes";
        }
    }

    //checking the answers for question 15
    if (document.getElementById(correctAns[14]).checked) {
        var quest15 = "correct";
        userAns[2] = quest15;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else if (document.getElementById("quest-15-a").checked || document.getElementById("quest-15-b").checked || document.getElementById("quest-15-d").checked) {
        var quest15 = "wrong";
        userAns[2] = quest15;

        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }
    }
    else {
        var quest15 = "no-answer";
        userAns[2] = quest15;
        //checking if the button has been pressed already and if not adding to all checked variable
        if (checkArray[2] == "not") {
            all_checked = all_checked + 1;
            checkArray[2] = "yes";
        }

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

    //checking if all quesitons have been submitted
    console.log(checkArray);
    console.log(all_checked);
    if (all_checked == 4) {
        //window.location.href = "quiz-page-2.html";
    }
    else {
        alert("You have not submitted all question, please do so before continuing");
    }
}

function storeAnswer_2() {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 2*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("5", userAns[0]);
    sessionStorage.setItem("6", userAns[1]);
    sessionStorage.setItem("7", userAns[2]);
    sessionStorage.setItem("8", userAns[3]);

    //checking if all quesitons have been submitted
    if (all_checked == 4) {
        window.location.href = "quiz-page-3.html";
    }
    else {
        alert("You have not submitted all question, please do so before continuing");
    }

}

function storeAnswer_3() {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 3*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("9", userAns[0]);
    sessionStorage.setItem("10", userAns[1]);
    sessionStorage.setItem("11", userAns[2]);
    sessionStorage.setItem("12", userAns[3]);

    //checking if all quesitons have been submitted
    if (all_checked == 4) {
        window.location.href = "quiz-page-3.html";
    }
    else {
        alert("You have not submitted all question, please do so before continuing");
    }

}


function storeAnswer_4() {
    /*This function store the answers from the user contained in the userAns array and stores it within session storage for page 4*/

    //converting user answer arrya to json 
    //var userAns_json = JSON.stringify(userAns);
    //console.log(userAns_json)

    //storing user answers in session storage
    sessionStorage.setItem("13", userAns[0]);
    sessionStorage.setItem("14", userAns[1]);
    sessionStorage.setItem("15", userAns[2]);

    //checking if all quesitons have been submitted
    if (all_checked == 4) {
        window.location.href = "../results/results.html";
    }
    else {
        alert("You have not submitted all question, please do so before continuing");
    }

}

function sub_text_1() {
    //question 1 submit text
    document.getElementById("quest-1-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-1-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_2() {
    //question 2 submit text
    document.getElementById("quest-2-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-2-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_3() {
    //question 3 submit text
    document.getElementById("quest-3-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-3-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_4() {
    //question 4 submit text
    document.getElementById("quest-4-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-4-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_5() {
    //question 5 submit text
    document.getElementById("quest-5-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-5-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_6() {
    //question 6 submit text
    document.getElementById("quest-6-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-6-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_7() {
    //question 7 submit text
    document.getElementById("quest-7-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-7-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_8() {
    //question 8 submit text
    document.getElementById("quest-8-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-8-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_9() {
    //question 9 submit text
    document.getElementById("quest-9-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-9-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_10() {
    //question 10 submit text
    document.getElementById("quest-10-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-10-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_11() {
    //quesiton 11 submit text 
    document.getElementById("quest-11-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-11-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_12() {
    //question 12 submit text 
    document.getElementById("quest-12-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-12-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_13() {
    //question 13 submit text
    document.getElementById("quest-13-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-13-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_14() {
    //question 14 submit text 
    document.getElementById("quest-14-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-14-noti");
    div_noti_1.appendChild(noti);
}

function sub_text_15() {
    //question 15 submit text
    document.getElementById("quest-15-noti").innerHTML = "";
    var noti = document.createElement("p");
    var noti_text = document.createTextNode("Answer Submitted");
    noti.appendChild(noti_text);
    var div_noti_1 = document.getElementById("quest-15-noti");
    div_noti_1.appendChild(noti);
}
