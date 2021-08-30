//Type a value(Alphabets)in the console window and find if its a vowel or not if not print please enter any charecter
var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input=createInput()
  input.position(5,60)
  heading=createElement("h4","Enter Any Alphabet")
  heading.position(5,20)
}

function draw() {
var value=input.value()
switch(value)
{
case "a":
console.log("its a vowel")
break
case "e":
console.log("its a vowel")
break
case "i":
console.log("its a vowel")
break
case "o":
console.log("its a vowel")
break
case "u":
console.log("its a vowel")
break
case "":
break
default:
console.log("please enter any charecter")
break
} 
}

