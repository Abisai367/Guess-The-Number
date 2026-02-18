const currentPage = window.location.pathname.split("/").pop();

if (currentPage === "play.html") {

    const submit = document.getElementById("submit");
    const header = document.getElementById("header");
    const retytext = document.getElementById("retytext");
    const cong = document.getElementById("cong");
    const playagain = document.getElementById("playagain");
    const con = document.getElementsByClassName("con");
    const start = document.getElementById("start")
    const list = document.getElementById("list");
    const input = document.getElementById("input");
    const history = document.getElementById("history");
    con[0].style.display = "none";
    const startgame = document.getElementsByClassName("startgame");
    const max = 100;
    const min = 1;
    const left = document.getElementById("left");
    retytext.style.display = "none";
    const guessInput = document.getElementById("guess");
    let attempts = 0;
    let remainingAttempts = 10;
    let runninganswer =  [];


    guessInput.addEventListener("focus", function(){
        retytext.textContent = "";
    });
    function startGame(){
        con[0].style.display = "block";
        startgame[0].style.display = "none";
        header.textContent = `Guess a number between ${min} and ${max}`;
    }
    let answer = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(answer);
    
    function userAttempts() {
        list.innerHTML = "";
        for (let i = 0; i < runninganswer.length; i++) {
        list.innerHTML += `<li>${runninganswer[i]}</li>`;
        }
    }
    function resultt() {
        
    retytext.style.display = "block";
        let guess = Number(guessInput.value);

        if (isNaN(guess) || guess > max || guess < min) {
            retytext.textContent = "Please enter a valid number";
            return;
        }
        else if (runninganswer.includes(guess)) {
            retytext.textContent = "You have already guessed that number, try a different one.";
            return;
        } 

        runninganswer.push(guess);
        attempts++;
        remainingAttempts--;
        
        if (remainingAttempts === 0) {
            guessInput.style.display = "none";
            submit.style.display = "none";
            retytext.textContent = `Game over! The correct number was ${answer}.`;
            playagain.style.display = "block";
            left.textContent = "";
            document.querySelectorAll('hr').forEach(hr => {
                hr.style.display = 'none';
            });
            return;
        }

        else if (guess > answer) {
            retytext.textContent = "Please lower your value";
            left.textContent = `Attempts left: ${remainingAttempts}`;
        }
        else if (guess < answer) {
            retytext.textContent = "Please raise your value";
            left.textContent = `Attempts left: ${remainingAttempts}`;
        }
        else {
            input.style.display = "none";
            submit.style.display = "none";
            retytext.style.display = "none";
            header.textContent = "Congratulations!";
            cong.textContent = `${guess} is the correct answer. You got it after ${attempts} attempts.`;
            submit.disabled = true;
            document.querySelectorAll('hr').forEach(hr => {
                hr.style.display = 'none';
            });
            playagain.style.display = "block";
            history.style.display = "none";
            left.style.display = "none";

        }

        userAttempts();
    };
    function replay() {
        attempts = 0;
        answer = Math.floor(Math.random() * (max - min + 1) + min);

        console.log(answer);

        header.textContent = `Guess a number between ${min} and ${max}`;
        guessInput.style.display = "block";
        submit.style.display = "block";
        history.style.display = "block";
        input.style.display = "block";
        retytext.style.display = "none";
        cong.textContent = "";
        playagain.style.display = "none";
        left.style.display = "block";
        left.textContent = `Attempts left: 10`;
        submit.disabled = false;
        guessInput.value = "";
        attempts = 0;
        remainingAttempts = 10;
        runninganswer = [];
        list.innerHTML = "";
        document.querySelectorAll('hr').forEach(hr => {
            hr.style.display = 'block';
        });
    }
}







