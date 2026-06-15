const phrases = [
    "Learning Command Center.",
"Revision Intelligence System.",
"Research Companion.",
"Knowledge Hub.",
"AI Learning Partner.",
"Study Operating System.",
"Academic Assistant.",
"Second Brain."
];

const text = document.getElementById("dynamic-text");

let phrase = 0;
let letter = 0;

function typeWriter() {

    if (letter < phrases[phrase].length) {

        text.textContent += phrases[phrase][letter];

        letter++;

        setTimeout(typeWriter, 100);

    } else {

        setTimeout(() => {

            text.textContent = "";

            letter = 0;

            phrase = (phrase + 1) % phrases.length;

            typeWriter();

        }, 1500);

    }

}

typeWriter();