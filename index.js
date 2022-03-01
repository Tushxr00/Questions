const questions = document.querySelectorAll(`.question`)
    //console.log(questions);
questions.forEach(function(item) {
    //console.log(item)
    const btn = item.querySelector(`.q-btn`)
        //console.log(btn);
    btn.addEventListener(`click`, function() {
        questions.forEach(function(object) {
            if (object !== item) {
                object.classList.remove(`show-text`)
            }
        })

        item.classList.toggle(`show-text`)
    })

})