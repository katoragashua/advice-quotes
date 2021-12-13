const colorize = document.querySelector(".randomColor");
const quotesBtn = document.querySelector(".quote-btn");
quotesBtn.addEventListener("click", changeColor);
const currentQuote = document.querySelector(".quote-div");
currentQuote.style.display = "none";
const quotes = [
    "If you're good at something, never do it for free. \n- The Joker",
    "Self-control is strength. Right thought is mastery. Calmness is power. \n-James Allen",
    "A man is literally what he thinks, his character being the complete sum of all his thoughts. \n-James Allen",
    "The opposite of courage in our society is not cowardice ... it is conformity.” And there you have the reason for so many failures. Conformity — people acting like everyone else, without knowing why or where they are going. \n-Earl Nightingale",
    "Marcus Aurelius, the great Roman Emperor, said: “A man’s life is what his thoughts make of it. \n-Earl Nightingale",
    "Men are anxious to improve their circumstances, but are unwilling to improve themselves. \n-James Allen",
    "Open your eyes, look within. Are you satisfied with the life you're living? \n-Bob Marley",
    "Every man gotta right to decide his own destiny. \n-Bob Marley",
    "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively. \n-Bob Marley",
    "Success is more a function of consistent common sense than it is of genius. \n-An Wang",
    "Every little action of the common day makes or unmakes character. \n-Oscar Wilde",
    "A ship is always safe at the shore, but that is not what it is built for. \n-Albert Einstein", 
    "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid. \n-Albert Einstein",
    "I must be willing to give up what I am in order to become what I will be. \n-Albert Einstein",
    "Insanity is doing the same thing, over and over again, but expecting different results. \n-Albert Einstein",
    "It does not matter how slowly you go as long as you do not stop. \n-Confucuis"
];

function randomQuote() {
    let randomQte = ""
    for(quote of quotes) {
        randomQte = quotes[Math.floor(Math.random() * quotes.length)];
    }
    return randomQte;
};

randomQuote()


function random() {
    let randomNumber = Math.floor(Math.random() *256);
    return randomNumber;
};

function randomOpacity() {
    let opacity = Math.random() *2;
    return opacity;
};

function randomColor() {
    let color = `rgba(${random()}, ${random()}, ${random()}, ${randomOpacity()})`;
    colorize.style.background = color;
    currentQuote.textContent = randomQuote();
};

function changeColor() {
    setInterval(randomColor, 7000);
    currentQuote.style.display = "block";
    quotesBtn.style.display = "none";
};