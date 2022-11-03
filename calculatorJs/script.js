var input = document.getElementById('input'),
number = document.querySelectorAll('.numbers div'),
operator = document.querySelectorAll('.operations div'),
result = document.getElementById('result'),
clear = document.getElementById('clear'),
resultDisplayed = false;


//click handlers
for (var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(e) {
        input.innerHTML += e.target.innerHTML;
 
    }); //number[i].addEventListener
}