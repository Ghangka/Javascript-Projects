// const -> variable that won't change
// let or var -> dynamic variable that can change

// referencing whole html document
// gives us the body tag 
// returns an array of the elements that have this tagname
const body = document.getElementsByTagName("body")[0];
//body.style.background = "red";

function setColour(colour){
    body.style.backgroundColor = colour;
}

// generating random RGB colour (goes from 0 to 255)
function setRandomColour(){
    // using round() to get rid of decimal points
    // using random() to get a random number and multiplying it by 255
    // random() generates a value from 0 and 1
    const red = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);

    const colour = `rgb(${red}, ${blue}, ${green})`;

    body.style.backgroundColor = colour;
}