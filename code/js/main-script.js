// JavaScript source code
function quiz_status() {
    //check to see if the quiz has been completed
    if (sessionStorage.getItem("complete" == "yes")) {

    }
    else {
        if (confirm("If you view sources without completing the quiz you will spoil, are you sure you want to proceed?")) {
            window.location.href = "site-info-section/sources-page.html"
        }
        else {
            window.location.href = "index.html";
        }
    }
}

function clear_quiz_main() {

    //clearing storage before starting quiz
    localStorage.clear();
}