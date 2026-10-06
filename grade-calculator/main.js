
const input =document.getElementById("user_input")
const result =document.getElementById("result")
const input_button =document.getElementById("input-button")

input_button.addEventListener("click", function(){ 
var studentScore =Number(input.value); 
 

if (studentScore > 100 || studentScore < 0) {
    result.textContent = "Invalid input. are you for real right now, grades are 0-100. 🛑";
} else if (studentScore >= 70 && studentScore <= 100) {
    result.textContent = "A - Ate that and left no crumbs. 💅";
} else if (studentScore >= 60 && studentScore <= 69) {
    result.textContent = "B - Giving main character energy, but room for improvement. ✨";
} else if (studentScore >= 50 && studentScore <= 59) {
    result.textContent = "C - Mid, but we survive. 🤷‍♂️";
} else if (studentScore >= 40 && studentScore <= 49) {
    result.textContent = "D - Not very demure. Not very mindful. 😬";
} else if (studentScore >= 30 && studentScore <= 39) {
    result.textContent = "E - Bro is fighting for their life right now. 💀";
} else if (studentScore >= 20 && studentScore <= 29) {
    result.textContent = "F - Cooked. Absolutely deep-fried. 😭";
} else {
    result.textContent = "F - It's over for you. Just pack it up. 📉"; 
}

})