let selectOptions = document.querySelectorAll(".boolean-textarea-switch");

let ratingOptions = document.querySelectorAll(".rating-options");

selectOptions.forEach(
    function(selectOption) {
        selectOption.addEventListener("change", function() {
            let selectedOption = this.value;
            let textareaContainer = this.parentNode.nextElementSibling;
            if (selectedOption == "yes") {
                textareaContainer.style.display = "block";
            } else {
                textareaContainer.style.display = "none";
            }
        });
});

ratingOptions.forEach(function(ratingOption) {
    ratingOption.addEventListener("change", function() {
        let ratingOption = this.value;
        let textareaContainer = this.parentNode.nextElementSibling;
        if (ratingOption < 6) {
            textareaContainer.style.display = "block";
        } else {
            textareaContainer.style.display = "none";
        }
    });
});


// let improvement = document.querySelector('#improvement');
// let information = document.querySelector('#information');
// let INPUT_FORM_improvement_comment = document.querySelector('#INPUT_FORM_improvement_comment');
// let INPUT_FORM_information_comment = document.querySelector('#INPUT_FORM_information_comment');

// function improvementSelect() {
//     if (improvement.value == "yes") {
//         INPUT_FORM_improvement_comment.display = "block";
//     } else {
//         INPUT_FORM_improvement_comment.display = "none";
//     }
// }

// function informationSelect() {
//     if (information.value == "yes") {
//         INPUT_FORM_information_comment.display = "block";
//     } else {
//         INPUT_FORM_information_comment.display = "none";
//     }
// }