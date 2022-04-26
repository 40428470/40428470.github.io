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
            var p3 = document.createElement("p");
            var p_3_txt = document.createTextNode("You Didn't Answer This One");
            p_3.appendChild(p_3_txt);
            var p_3_ele = document.getElementById("quest-3-incorrect");
            p_3_ele.appendChild(p_3);
            break;
    }
}