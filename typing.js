const paragraph = document.querySelector(".userPara");
const button = document.querySelector(".restart");
const time = document.querySelector(".timer");
const levelArr = [
    "Hello",
    "Coding is fun and rewarding. Keep it up!",
    "In the world of programming, possibilities are endless. Learning to code is a journey.",
    "JavaScript is a versatile language for web development. Web development is an exciting field.",
    "The more you code, the better you become at it. Coding opens doors to many exciting opportunities.",
    "Stay persistent and you'll master the art of coding. Challenge accepted and conquered.",
    "Congratulations, you're a coding superstar! You've reached the final level, well done!"
];

let currentLevel = 0;
let second = 30;
let timerInterval;

const back = document.querySelector(".back");


back.addEventListener("click", ()=>{
    open("https://thedeveric.github.io/groupgame/");
})

function updateText() {
    paragraph.textContent = levelArr[currentLevel];
}

updateText();

function timerCountDown() {
    if (second >= 0) {
        time.textContent = second;
        second -= 1;

        if (second < 0) {
            
            paragraph.textContent = "Game over! Too slow, you gotta work on that.";
        }
    }
}



timerInterval = setInterval(timerCountDown, 1000);

function timer() {
    clearInterval(timerInterval); 
}

document.addEventListener("keydown", function (event) {
    const expectedText = levelArr[currentLevel];
    const userInput = event.key;

    if (userInput === expectedText.charAt(0)) {
        levelArr[currentLevel] = expectedText.substring(1);

        if (levelArr[currentLevel] === "") {
            currentLevel++;
            if (currentLevel < levelArr.length) {
                updateText();
                second = 30; 
                timerInterval = setInterval(timerCountDown, 1000); 
            } else {
                paragraph.textContent = "Game finished!";
                timer(); 
            }
        } else {
            updateText();
        }
    }
});

button.addEventListener("click", () => {
    location.reload(); 
});
