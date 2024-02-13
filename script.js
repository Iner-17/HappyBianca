const messageButton = document.querySelector('.open');
let isOpen = false;
let score = 0;

const quiz = [
    {
        question: "What is your favorite color?",
        answer: "blue"
    },
    {
        question: "What's my pooping position?",
        answer: "frog style"
    },
    {
        question: "Sino mas mabait, bianca or bong",
        answer: "bong"
    },
    {
        question: "Sino mas mahaba pasensya, bianca or bong",
        answer: "bong"
    },
    {
        question: "Sino mas mabuti ang ugali, bianca or bong",
        answer: "bong"
    },
    {
        question: "Since you've reach this far I know it's you na hahaha and my last question iissssss WILL YOU BE MY VALENTINE? yes or no only. 😂😂😂",
        answer: "yes"
    }
]


const openMessage = () => {
    if(!isOpen) {
        alert("Hmmmm, I'm afraid you're not my BABY! You have to answer few questions first!")
        for (let i = 0; i < quiz.length; i++) {
            let userAnswer = prompt(quiz[i].question)
            if (userAnswer.toLowerCase() == quiz[i].answer) {
                score++;
                alert("Correct")
            } else {
                alert("Eeeeenggkkk!")
                i += 10;
            }
        }
        if (score == 6) {
            document.querySelector('.message').style.display = "block"
        isOpen = true;
        } else {
            alert(`You only got ${score}!!!! TRY AGAINNNN`)
            score = 0;
        }
        
    } else {
        document.querySelector('.message').style.display = "none"
        isOpen = false;
    }
}




messageButton.addEventListener('click', openMessage)