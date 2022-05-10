history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});



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
                    return quizResult();
                }

                console.log(score);
            });

        });
}

getValue();


function quizResult () {
    document.getElementById("answer").innerHTML = score + "%";

    if(score == 100) {
        document.getElementById("description").innerHTML = "Either I took this quiz myself, or you're my evil twin. Also, please get some help.";
    }
        
    if(score>=70 && score<=99) {
        document.getElementById("description").innerHTML = "You're unhinged like me, congrats! Are you alright?";
    }

    if(score>=50 && score<=69) {
        document.getElementById("description").innerHTML = "You're like me, but better. Be proud and relieved that you didn't get a higher score on this quiz.";
    }
        
    if(score>=20 && score<=49) {
        document.getElementById("description").innerHTML = "We're not that similar, which probably means you're well-adjusted. Good for you!";
    }

    if(score>=0 && score<=19) {
        document.getElementById("description").innerHTML = "I'm severely judging you. (just kidding <3)";
    }
}


