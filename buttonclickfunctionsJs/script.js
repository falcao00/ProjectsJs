var letters = document.querySelectorAll('.operations div');
var input = document.getElementById('input');
var clear = document.getElementById('clear');

  for (var i = 0; i < letters.length; i++){
    letters[i].addEventListener("click", function(e) {
        input.innerHTML += e.target.innerHTML;

    }); //number[i].addEventListener
}