string = "fish"
function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
var uppercase = string.toUpperCase
var lowercase = string.toLowerCase
var ily = "I love you, Grandma."
if(uppercase === string.toUpperCase) {
  return "YES INDEED!"
} else if (lowercase === string.toLowerCase) {
  return "I can't hear you!"
} else if (ily) {
  return "I love you, too."
}
  
}