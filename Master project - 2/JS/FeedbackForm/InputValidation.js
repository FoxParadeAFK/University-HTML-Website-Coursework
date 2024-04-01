let errormessage = document.querySelector('.error-class');
let submitbutton = document.getElementById('submit-button');
let feedbackform = document.getElementById('feedback-form');
let customerdetails = document.querySelectorAll('.ID_customer_detail');
let customeremail = document.querySelector('#customer-email');
let emailselect = document.querySelector('#email-selection')
let ratingselection = document.querySelector('.rating-options');

let market = document.querySelector('#market');
let nagivation = document.querySelector('#navigation');

let REVIEW_FINAL_form = document.getElementById('REVIEW-FORM-form');
let INPUT_FORM_form = document.getElementById('INPUT-FORM-form');

let TEXTAREA_rating = document.querySelector('#TEXTAREA_rating');

let improvement = document.querySelector('#improvement');
let INPUT_FORM_improvement_comment = document.querySelector('#INPUT_FORM_improvement_comment');

let information = document.querySelector('#information');
let INPUT_FORM_information_comment = document.querySelector('#INPUT_FORM_information_comment');


function formCheck() {
    console.log(feedbackform);
    let founderror = false;
    // * Start the list of validations 
    founderror = customerDetails(founderror);

    if(founderror == false) {
        REVIEW_FINAL_form.style.display = "block";
        finalDisplay();
        inputDisplay();
    }
    else {
        REVIEW_FINAL_form.style.display = "none";   
    }
}

function finalDisplay() {
    let REVIEW_FINAL_first = document.querySelector('.REVIEW_FINAL_first');
    let REVIEW_FINAL_last = document.querySelector('.REVIEW_FINAL_last');
    let INPUT_FORM_first = document.querySelectorAll('.ID_customer_detail');

    let REVIEW_FINAL_rating = document.querySelector('.REVIEW_FINAL_rating');
    let INPUT_FORM_rating = document.querySelector('.rating-options');
    let REVIEW_FINAL_rating_comment = document.querySelector('.REVIEW_FINAL_rating_comment');
    let INPUT_FORM_rating_comment = document.querySelector('#INPUT_FORM_rating_comment');

    let REVIEW_FINAL_email = document.querySelector('.REVIEW_FINAL_email');
    let INPUT_FORM_email = document.querySelector('#customer-email');

    let REVIEW_FINAL_time_visiting = document.querySelector('.REVIEW_FINAL_time_visiting');
    let INPUT_FORM_time_visiting = document.querySelector('input[name = "first_time"]:checked');

    let REVIEW_FINAL_news_letter = document.querySelector('.REVIEW_FINAL_news_letter');
    let INPUT_FORM_news_letter = document.querySelector('input[name = "news_letter"]:checked');

    let REVIEW_FINAL_market_design = document.querySelector('.REVIEW_FINAL_market_design');
    let INPUT_FORM_market_design = document.querySelector('#market');

    let REVIEW_FINAL_navigation = document.querySelector('.REVIEW_FINAL_navigation');
    let INPUT_FORM_navigation = document.querySelector('#navigation');

    let REVIEW_FINAL_improvement = document.querySelector('.REVIEW_FINAL_improvement');
    let INPUT_FORM_improvement = document.querySelector('#improvement');
    let REVIEW_FINAL_improvement_comment = document.querySelector('.REVIEW_FINAL_improvement_comment');
    let INPUT_FORM_improvement_comment = document.querySelector('#INPUT_FORM_improvement_comment');

    let REVIEW_FINAL_information = document.querySelector('.REVIEW_FINAL_information');
    let INPUT_FORM_information = document.querySelector('#information');
    let REVIEW_FINAL_information_comment = document.querySelector('.REVIEW_FINAL_information_comment');
    let INPUT_FORM_information_comment = document.querySelector('#INPUT_FORM_information_comment');

    REVIEW_FINAL_first.value = INPUT_FORM_first[0].value;
    REVIEW_FINAL_last.value = INPUT_FORM_first[1].value;

    REVIEW_FINAL_rating.value = INPUT_FORM_rating.value;
    REVIEW_FINAL_rating_comment.value = (INPUT_FORM_rating_comment.value == "")? "BLANK" : INPUT_FORM_rating_comment.value;

    REVIEW_FINAL_email.value = INPUT_FORM_email.value;

    REVIEW_FINAL_time_visiting.value = INPUT_FORM_time_visiting.value;

    REVIEW_FINAL_news_letter.value = INPUT_FORM_news_letter.value;

    REVIEW_FINAL_market_design.value = (INPUT_FORM_market_design.value == "")? "BLANK" : INPUT_FORM_market_design.value;

    REVIEW_FINAL_navigation.value = (INPUT_FORM_navigation.value == "")? "BLANK" : INPUT_FORM_navigation.value;

    REVIEW_FINAL_improvement.value = INPUT_FORM_improvement.value;
    REVIEW_FINAL_improvement_comment.value = (INPUT_FORM_improvement_comment.value == "")? "BLANK" : INPUT_FORM_improvement_comment.value;

    REVIEW_FINAL_information.value = INPUT_FORM_information.value;
    REVIEW_FINAL_information_comment.value = (INPUT_FORM_information_comment.value == "")? "BLANK" : INPUT_FORM_information_comment.value;



}

function inputDisplay() {
    INPUT_FORM_form.style.display = "none";
}

function revertDisplay() {
    INPUT_FORM_form.style.display = "block";
    REVIEW_FINAL_form.style.display = "none";
}




// * Used for the name and last name details

function customerDetails(founderror) {
    for (var element of customerdetails) {
        if (element.value == "" && !founderror) {
            founderror = true;
            errormessage.innerHTML = "Incorrect " + element.getAttribute('placeholder').substring(0, 1).toLowerCase() + element.getAttribute('placeholder').substring(1);
        } 
    }
    if (!founderror) errormessage.innerHTML = "";

    founderror = customerEmail(founderror);
    founderror = customerRating(founderror);
    founderror = customerRatingTextarea(founderror);
    founderror = customertextarea(founderror)
    founderror = customerImprovementTextarea(founderror);
    founderror = customerInformationTextarea(founderror);

    return founderror;
}

// * Used for the email details
function customerEmail(founderror) {
    if (!customeremail.value.includes(emailselect.value) && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Incorrect email";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

// * Used for the rating 
function customerRating(founderror) {
    if (ratingselection.value == "select" && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Select a rating";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

// * Used for the rating 
function customerRatingTextarea(founderror) {
    if (ratingselection.value < 6 && TEXTAREA_rating.value == "" && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Rating textarea empty";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

// * Used for the exposed textarea 
function customertextarea(founderror) {
    if ((market.value == "" || nagivation.value == "") && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Textarea empty";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

// * Used for the exposed textarea 
function customerInformationTextarea(founderror) {
    if (information.value == "yes" && INPUT_FORM_information_comment.value == "" && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Information textare empty";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

function customerImprovementTextarea(founderror) {
    if (improvement.value == "yes" && INPUT_FORM_improvement_comment.value == "" && !founderror) {
        founderror = true;
        errormessage.innerHTML = "Improvement textare empty";
    }

    if (!founderror) errormessage.innerHTML = "";

    return founderror;
}

function mail(form) {
    let FORM_PAGE = document.getElementById('FORM_PAGE');
    let FORM_RECIEVED = document.getElementById('FORM_RECIEVED');

    FORM_PAGE.style.display = "none";
    FORM_RECIEVED.style.display = "block";
    
    form.action = "mailto:w2045929@westminst.ac.uk";
}

