
// collecting the id's
const user_input =document.getElementById("user_input")
const result =document.getElementById("result")
const input_button =document.getElementById("input-button")

input_button.addEventListener("click",function () {
    var age= Number(user_input.value);

if (age >= 0 && age <= 12){
    result.textContent="You are a child 🤭";
}
else if(age >= 13 && age <= 17){
        result.textContent = "You are a mini adult 👨🏼‍🎓";
}
else if(age >= 18 && age <= 59){
        result.textContent="You are an adult v";
}
else if(age >=60 && age <=100){
    result.textContent="You are a senior citizen 🤧";
}
else{
    result.textContent="☝️wrong input, kindly input a number☝️";
}
})


