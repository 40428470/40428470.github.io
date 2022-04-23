// JavaScript source code
ansArray = []

function checkAnswers(ansArray) {
    //If statements checking if the the corect radio button has been selected 
    //and adding the variables to an array


    //question 1 check
    if (document.getElementByID('quest-1-d').checked) {
        var quest1 = "correct";
        ansArray.push(quest1);
    }
    else if (document.getElementByID('quest-1-a').checked || document.getElementByID('quest-1-b').checked || document.getElementByID('quest-1-c').checked) {
        var quest1 = "wrong";
        ansArray.push(quest1);
    }
    else {
        var quest1 = "no-answer";
        ansArray.push(quest1);
    }

    //Question 2 check
    if (document.getElementByID('quest-2-b').checked) {
        var quest2 = "correct";
        ansArray.push(quest2);
    }
    else if (document.getElementByID('quest-2-a').checked || document.getElementByID('quest-2-c').checked || document.getElementByID('quest-2-d').checked) {
        var quest2 = "wrong";
        ansArray.push(quest2);
    }
    else {
        var quest2 = "no-answer";
        ansArray.push(quest2);
    }

    //Quesiton 3 check 
    if (document.getElementByID('quest-3-c').checked) {
        var quest3 = "correct";
        ansArray.push(quest3);
    }
    else if (document.getElementByID('quest-3-a').checked || document.getElementByID('quest-3-b').checked || document.getElementByID('quest-3-d').checked) {
        var quest3 = "wrong";
        ansArray.push(quest3);
    }
    else {
        var quest3 = "no-answer"
        ansArray.push(quest3)
    }

    //Question 4 check 
    if (document.getElementByID('quest-4-a').checked) {
        var quest4 = "correct";
        ansArray.push(quest4);
    }
    else if (document.getElementByID('quest-4-b').checked || document.getElementByID('quest-4-c').checked || document.getElementByID('quest-4-d').checked) {
        var quest4 = "wrong";
        ansArray.push(quest4);
    }
    else {
        var quest4 = "no-answer"
        ansArray.push(quest4)
    }

    //Question 5 check
    if (document.getElementByID('quest-5-b').checked) {
        var quest5 = "correct";
        ansArray.push(quest5);
    }
    else if (document.getElementByID('quest-5-a').checked || document.getElementByID('quest-5-c').checked || document.getElementByID('quest-5-d').checked) {
        var quest5 = "wrong";
        ansArray.push(quest5);
    }
    else {
        var quest5 = "no-answer"
        ansArray.push(quest5)
    }

    //question 6 check
    if (document.getElementByID('quest-6-b').checked) {
        var quest6 = "correct"
        ansArray.push(quest6)
    }
    else if (document.getElementByID('quest-6-a').checked || document.getElementByID('quest-6-c').checked || document.getElementByID('quest-6-d').checked) {
        var quest6 = "wrong"
        ansArray.push(quest6)
    }
    else {
        var quest6 = "no-answer"
        ansArray.push(quest6)
    }

    //question 7 check
    if (document.getElementByID('quest-7-d').checked) {
        var quest7 = "corect"
        ansArray.push(quest7)
    }
    else if (document.getElementByID('quest-7-a').checked || document.getElementByID('quest-7-b').checked || document.getElementByID('quest-7-c').checked)
}