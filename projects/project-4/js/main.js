let score = 0;

$('.quiz-btn').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active')
    } 
    
    else {
        $(this).addClass('active')
    }
});


function getValue () {

    document.querySelectorAll(".quiz-btn").forEach(button => {
            console.log(button);
            button.addEventListener("click",() => {
                console.log(button.value)
                score += parseInt(button.value)
                const type = button.dataset.type;

                document.querySelectorAll(`[data-type="${type}"`).forEach(typeBtn => (typeBtn.disabled = true))

                if (type == "10") {
                    return quizResult()
                }

                console.log(score);
            });

        });
}


getValue();

function quizResult () {
    document.getElementById("answer").innerHTML = score;

    if(score == 20) {
        document.getElementById("description").innerHTML = "Either I took this quiz myself, or you're my evil twin.";
    }
        
    if(score == 15 ) {
        document.getElementById("description").innerHTML = "Have you been stalking me?";
    }
        
    if(score == 10 ) {
        document.getElementById("description").innerHTML = "We could be friends :)";
    }

    if(score == 0 ) {
        document.getElementById("description").innerHTML = "I'm severely judging your taste. (jk, i still love u <3 )";
    }

}


