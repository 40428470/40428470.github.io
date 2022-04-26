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
            var p4 = document.createElement("p");
            var p_4_txt = document.createTextNode("You Didn't Answer This One");
            p_4.appendChild(p_4_txt);
            var p_4_ele = document.getElementById("quest-4-incorrect");
            p_4_ele.appendChild(p_4);
            break;
    }

    //check question 5
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
    switch (sessionStorage("6")) {
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
            var p_7_ele = document.getElementById("quest-8-incorrect");
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

    }
    
}


//function test_check() {
 //   let x = 1;
 //   while (x <= 14) {
  //      let x_string = x.toString();
  //      let div_id_correct = x_string + "-correct";
//
   //     var ele_tag = document.createElement("p");
   //     var ele_txt = document.createTextNode("Correct!");
    //    ele_tag.appendChild(p_3_txt);
    //    var ele = document.getElementById(div_id_correct);
     //   ele.appendChild(ele_tag);
     //   break;


  //  }
//}