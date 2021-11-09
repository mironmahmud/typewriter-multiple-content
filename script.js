// varible declare
let textArray = ['ui/ux designer?', 'mern engineer?', 'digital marketer?'];
let textType = document.querySelector('.type-text');

let textArrIndex = 0;
let textCharIndex = 0;

let typingDelay = 200;
let erasingDelay = 100;
let newTypingDelay = 800;
let stayErasingDelay = 1500


function typing() {
    // when text character index smaller then 
    // text array index length character
    if(textCharIndex < textArray[textArrIndex].length) { 

        // horizontally text array index length character added in html tag one by one
        textType.textContent += textArray[textArrIndex].charAt(textCharIndex); 
        textCharIndex++; // text character index increasing
        setTimeout(typing, typingDelay);

        // for console character typing view
        // console.log(`${textType.textContent} = ${textCharIndex}`);
    }
    else {
        setTimeout(erasing, stayErasingDelay);
    }
}

function erasing() {
    if(textCharIndex > 0) { // when text character index grater then 0

        // horizontally text array index length character remove in html tag 
        // one by one without last text index character
        textType.textContent = textArray[textArrIndex].slice(0, textCharIndex - 1); 
        textCharIndex--; // text character index decreasing
        setTimeout(erasing, erasingDelay);

        // // for console character erasing view
        // console.log(`${textType.textContent} = ${textCharIndex}`);
    }
    else {
        textArrIndex++; // typing new text arry index

        // when text array index grater then or equal text array length
        // then star typing again text array index 0
        if(textArrIndex >= textArray.length) textArrIndex = 0;
        setTimeout(typing, newTypingDelay);
    }
}

// when html content load without external file 
// then star this event listener
document.addEventListener('DOMContentLoaded', () => { typing(); });