function results_check() {
    /* This funciton checks the answers from the user that are stored in sessions storage and then adds elements to the page whether
     * they are right or wrong 
     * appending items to the DOM based on code from https://www.tutorialspoint.com/how-to-add-a-new-element-to-html-dom-in-javascript */

    //check question 1 
    switch (sessionStorage.getItem("1")) {
        case "correct":
            var p_1 = document.createElement("p");
            var p_1_txt = document.createTextNode("Correct! - Jim Carrey");
            p_1.appendChild(p_1_txt);
            var p_1_ele = document.getElementById("quest-1-correct");
            p_1_ele.appendChild(p_1);
            break;
        case "wrong":
            var p_1 = document.createElement("p");
            var p_1_txt = document.createTextNode("Incorrect - Try Again");
            p_1.appendChild(p_1_txt);
            var p_1_ele = document.getElementById("quest-1-incorrect");
            p_1_ele.appendChild(p_1);
            break;
        case "no-answer":
            var p_1 = document.createElement("p");
            var p_1_txt = document.createTextNode("You Didn't Answer This One");
            p_1.appendChild(p_1_txt);
            var p_1_ele = document.getElementById("quest-1-incorrect");
            p_1_ele.appendChild(p_1);
            break;
    }

    //check question 2 
    switch (sessionStorage.getItem("2")) {
        case "correct":
            var p_2 = document.createElement("p");
            var p_2_txt = document.createTextNode("Correct! - Albuquerque");
            p_2.appendChild(p_2_txt);
            var p_2_ele = document.getElementById("quest-2-correct");
            p_2_ele.appendChild(p_2);
            break;
        case "wrong":
            var p_2 = document.createElement("p");
            var p_2_txt = document.createTextNode("Incorrect - Try Again");
            p_2.appendChild(p_2_txt);
            var p_2_ele = document.getElementById("quest-2-incorrect");
            p_2_ele.appendChild(p_2);
            break;
        case "no-answer":
            var p_2 = document.createElement("p");
            var p_2_txt = document.createTextNode("You Didn't Answer This One");
            p_2.appendChild(p_2_txt);
            var p_2_ele = document.getElementById("quest-2-incorrect");
            p_2_ele.appendChild(p_2);
            break;
    }

    //check question 3
    switch (sessionStorage.getItem("3")) {
        case "correct":
            var p_3 = document.createElement("p");
            var p_3_txt = document.createTextNode("Correct! - Russia");
            p_3.appendChild(p_3_txt);
            var p_3_ele = document.getElementById("quest-3-correct");
            p_3_ele.appendChild(p_3);
            break;
        case "wrong":
            var p_3 = document.createElement("p");
            var p_3_txt = document.createTextNode("Incorrect - Try Again");
            p_3.appendChild(p_3_txt);
            var p_3_ele = document.getElementById("quest-3-incorrect");
            p_3_ele.appendChild(p_3);
            break;
        case "no-answer":
            var p_3 = document.createElement("p");
            var p_3_txt = document.createTextNode("You Didn't Answer This One");
            p_3.appendChild(p_3_txt);
            var p_3_ele = document.getElementById("quest-3-incorrect");
            p_3_ele.appendChild(p_3);
            break;
    }

    //check question 4 
    switch (sessionStorage.getItem("4")) {
        case "correct":
            var p_4 = document.createElement("p");
            var p_4_txt = document.createTextNode("Correct! - Martin Heinrich Klaproth");
            p_4.appendChild(p_3_txt);
            var p_4_ele = document.getElementById("quest-4-correct");
            p_4_ele.appendChild(p_4);
            break;
        case "wrong":
            var p_4 = document.createElement("p");
            var p_4_txt = document.createTextNode("Incorrect - Try Again");
            p_4.appendChild(p_4_txt);
            var p_4_ele = document.getElementById("quest-4-incorrect");
            p_4_ele.appendChild(p_4);
            break;
        case "no-answer":
            var p_4 = document.createElement("p");
            var p_4_txt = document.createTextNode("You Didn't Answer This One");
            p_4.appendChild(p_4_txt);
            var p_4_ele = document.getElementById("quest-4-incorrect");
            p_4_ele.appendChild(p_4);
            break;
    }

    //check question 5
    console.log(sessionStorage.getItem("5"));
    switch (sessionStorage.getItem("5")) {
        case "correct":
            var p_5 = document.createElement("p");
            var p_5_txt = document.createTextNode("Correct! - 1986");
            p_5.appendChild(p_5_txt);
            var p_5_ele = document.getElementById("quest-5-correct");
            p_5_ele.appendChild(p_5);
            break;
        case "wrong":
            var p_5 = document.createElement("p");
            var p_5_txt = document.createTextNode("Incorrect - Try Again");
            p_5.appendChild(p_5_txt);
            var p_5_ele = document.getElementById("quest-5-incorrect");
            p_5_ele.appendChild(p_5);
            break;
        case "no-answer":
            var p5 = document.createElement("p");
            var p_5_txt = document.createTextNode("You Didn't Answer This One");
            p_5.appendChild(p_5_txt);
            var p_5_ele = document.getElementById("quest-5-incorrect");
            p_5_ele.appendChild(p_5);
            break;
    }

    //check question 6
    switch (sessionStorage.getItem("6")) {
        case "correct":
            var p_6 = document.createElement("p");
            var p_6_txt = document.createTextNode("Correct! - 2006");
            p_6.appendChild(p_6_txt);
            var p_6_ele = document.getElementById("quest-6-correct");
            p_6_ele.appendChild(p_6);
            break;
        case "wrong":
            var p_6 = document.createElement("p");
            var p_6_txt = document.createTextNode("Incorrect - Try Again");
            p_6.appendChild(p_6_txt);
            var p_6_ele = document.getElementById("quest-6-incorrect");
            p_6_ele.appendChild(p_6);
            break;
        case "no-answer":
            var p6 = document.createElement("p");
            var p_6_txt = document.createTextNode("You Didn't Answer This One");
            p_6.appendChild(p_6_txt);
            var p_6_ele = document.getElementById("quest-6-incorrect");
            p_6_ele.appendChild(p_6);
            break;
    }

    //check question 7
    switch (sessionStorage.getItem("7")) {
        case "correct":
            var p_7 = document.createElement("p");
            var p_7_txt = document.createTextNode("Correct! - Parasite");
            p_7.appendChild(p_7_txt);
            var p_7_ele = document.getElementById("quest-7-correct");
            p_7_ele.appendChild(p_7);
            break;
        case "wrong":
            var p_7 = document.createElement("p");
            var p_7_txt = document.createTextNode("Incorrect - Try Again");
            p_7.appendChild(p_7_txt);
            var p_7_ele = document.getElementById("quest-7-incorrect");
            p_7_ele.appendChild(p_7);
            break;
        case "no-answer":
            var p7 = document.createElement("p");
            var p_7_txt = document.createTextNode("You Didn't Answer This One");
            p_7.appendChild(p_7_txt);
            var p_7_ele = document.getElementById("quest-7-incorrect");
            p_7_ele.appendChild(p_7);
            break;
    }

    //check question 8 
    switch (sessionStorage.getItem("8")) {
        case "correct":
            var p_8 = document.createElement("p");
            var p_8_txt = document.createTextNode("Correct! - 5 Seasons");
            p_8.appendChild(p_8_txt);
            var p_8_ele = document.getElementById("quest-8-correct");
            p_8_ele.appendChild(p_8);
            break;
        case "wrong":
            var p_8 = document.createElement("p");
            var p_8_txt = document.createTextNode("Incorrect - Try Again");
            p_8.appendChild(p_8_txt);
            var p_8_ele = document.getElementById("quest-8-incorrect");
            p_8_ele.appendChild(p_8);
            break;
        case "no-answer":
            var p8 = document.createElement("p");
            var p_8_txt = document.createTextNode("You Didn't Answer This One");
            p_8.appendChild(p_8_txt);
            var p_8_ele = document.getElementById("quest-8-incorrect");
            p_8_ele.appendChild(p_8);
            break;
    }

    //check question 9 
    switch (sessionStorage.getItem("9")) {
        case "correct":
            var p_9 = document.createElement("p");
            var p_9_txt = document.createTextNode("Correct! - 6,650km");
            p_9.appendChild(p_9_txt);
            var p_9_ele = document.getElementById("quest-9-correct");
            p_9_ele.appendChild(p_9);
            break;
        case "wrong":
            var p_9 = document.createElement("p");
            var p_9_txt = document.createTextNode("Incorrect - Try Again");
            p_9.appendChild(p_9_txt);
            var p_9_ele = document.getElementById("quest-9-incorrect");
            p_9_ele.appendChild(p_9);
            break;
        case "no-answer":
            var p9 = document.createElement("p");
            var p_9_txt = document.createTextNode("You Didn't Answer This One");
            p_9.appendChild(p_9_txt);
            var p_9_ele = document.getElementById("quest-9-incorrect");
            p_9_ele.appendChild(p_9);
            break;
    }

    //check question 10 
    switch (sessionStorage.getItem("10")) {
        case "correct":
            var p_10 = document.createElement("p");
            var p_10_txt = document.createTextNode("Correct! - 2006");
            p_10.appendChild(p_10_txt);
            var p_10_ele = document.getElementById("quest-10-correct");
            p_10_ele.appendChild(p_10);
            break;
        case "wrong":
            var p_10 = document.createElement("p");
            var p_10_txt = document.createTextNode("Incorrect - Try Again");
            p_10.appendChild(p_10_txt);
            var p_10_ele = document.getElementById("quest-10-incorrect");
            p_10_ele.appendChild(p_10);
            break;
        case "no-answer":
            var p10 = document.createElement("p");
            var p_10_txt = document.createTextNode("You Didn't Answer This One");
            p_10.appendChild(p_10_txt);
            var p_10_ele = document.getElementById("quest-10-incorrect");
            p_10_ele.appendChild(p_10);
            break;
    }

    //check question 11 
    switch (sessionStorage.getItem("11")) {
        case "correct":
            var p_11 = document.createElement("p");
            var p_11_txt = document.createTextNode("Correct! - J. Robert Oppenheimer");
            p_11.appendChild(p_11_txt);
            var p_11_ele = document.getElementById("quest-11-correct");
            p_11_ele.appendChild(p_11);
            break;
        case "wrong":
            var p_11 = document.createElement("p");
            var p_11_txt = document.createTextNode("Incorrect - Try Again");
            p_11.appendChild(p_11_txt);
            var p_11_ele = document.getElementById("quest-11-incorrect");
            p_11_ele.appendChild(p_11);
            break;
        case "no-answer":
            var p11 = document.createElement("p");
            var p_11_txt = document.createTextNode("You Didn't Answer This One");
            p_11.appendChild(p_11_txt);
            var p_11_ele = document.getElementById("quest-11-incorrect");
            p_11_ele.appendChild(p_11);
            break;
    }

    //check question 12 
    switch (sessionStorage.getItem("12")) {
        case "correct":
            var p_12 = document.createElement("p");
            var p_12_txt = document.createTextNode("Correct! - Alain Bernard");
            p_12.appendChild(p_12_txt);
            var p_12_ele = document.getElementById("quest-12-correct");
            p_12_ele.appendChild(p_12);
            break;
        case "wrong":
            var p_12 = document.createElement("p");
            var p_12_txt = document.createTextNode("Incorrect - Try Again");
            p_12.appendChild(p_12_txt);
            var p_12_ele = document.getElementById("quest-12-incorrect");
            p_12_ele.appendChild(p_12);
            break;
        case "no-answer":
            var p12 = document.createElement("p");
            var p_12_txt = document.createTextNode("You Didn't Answer This One");
            p_12.appendChild(p_12_txt);
            var p_12_ele = document.getElementById("quest-12-incorrect");
            p_12_ele.appendChild(p_12);
            break;
    }

    //check question 13 
    switch (sessionStorage.getItem("13")) {
        case "correct":
            var p_13 = document.createElement("p");
            var p_13_txt = document.createTextNode("Correct! - 2012");
            p_13.appendChild(p_13_txt);
            var p_13_ele = document.getElementById("quest-13-correct");
            p_13_ele.appendChild(p_13);
            break;
        case "wrong":
            var p_13 = document.createElement("p");
            var p_13_txt = document.createTextNode("Incorrect - Try Again");
            p_13.appendChild(p_13_txt);
            var p_13_ele = document.getElementById("quest-13-incorrect");
            p_13_ele.appendChild(p_13);
            break;
        case "no-answer":
            var p13 = document.createElement("p");
            var p_13_txt = document.createTextNode("You Didn't Answer This One");
            p_13.appendChild(p_13_txt);
            var p_13_ele = document.getElementById("quest-13-incorrect");
            p_13_ele.appendChild(p_13);
            break;
    }


    //check question 14
    switch (sessionStorage.getItem("14")) {
        case "correct":
            var p_14 = document.createElement("p");
            var p_14_txt = document.createTextNode("Correct! - Season 1");
            p_14.appendChild(p_14_txt);
            var p_14_ele = document.getElementById("quest-14-correct");
            p_14_ele.appendChild(p_14);
            break;
        case "wrong":
            var p_14 = document.createElement("p");
            var p_14_txt = document.createTextNode("Incorrect - Try Again");
            p_14.appendChild(p_14_txt);
            var p_14_ele = document.getElementById("quest-14-incorrect");
            p_14_ele.appendChild(p_14);
            break;
        case "no-answer":
            var p14 = document.createElement("p");
            var p_14_txt = document.createTextNode("You Didn't Answer This One");
            p_14.appendChild(p_14_txt);
            var p_14_ele = document.getElementById("quest-14-incorrect");
            p_14_ele.appendChild(p_14);
            break;
    }

    //check question 15 
    switch (sessionStorage.getItem("15")) {
        case "correct":
            var p_15 = document.createElement("p");
            var p_15_txt = document.createTextNode("Correct! - Russia");
            p_15.appendChild(p_15_txt);
            var p_15_ele = document.getElementById("quest-15-correct");
            p_15_ele.appendChild(p_15);
            break;
        case "wrong":
            var p_15 = document.createElement("p");
            var p_15_txt = document.createTextNode("Incorrect - Try Again");
            p_15.appendChild(p_15_txt);
            var p_15_ele = document.getElementById("quest-15-incorrect");
            p_15_ele.appendChild(p_15);
            break;
        case "no-answer":
            var p15 = document.createElement("p");
            var p_15_txt = document.createTextNode("You Didn't Answer This One");
            p_15.appendChild(p_15_txt);
            var p_15_ele = document.getElementById("quest-15-incorrect");
            p_15_ele.appendChild(p_15);
            break;
    }
}

function clear_quiz() {
    //storing that the quiz has been completed and clearing sessionStorage
    sessionStorage.clear();
    sessionStorage.setItem("complete", "yes");
}