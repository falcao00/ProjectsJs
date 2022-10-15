window.onload = function () {

    var seconds = 00; 
    var tens = 00; 
    var buttonstart = document.getElementById('button-start');
    var buttonstop = document.getElementById('button-stop');
    var buttonreset = document.getElementById('button-reset');
    var secAppens = document.getElementById('seconds');
    var mileAppens = document.getElementById('mile');
    var interval;

    buttonstart.onclick = function () {

        clearInterval(interval)
        interval = setInterval(startTimer, 10)
    }

    buttonstop.onclick = function () {
        clearInterval(interval)
    }

    buttonreset.onclick = function () {
        clearInterval(interval)
        tens = 00
        seconds = 00
        mileAppens.innerHTML = tens
        secAppens.innerHTML = seconds
    }

    function startTimer () {
        tens++

        if(tens <= 9){
            mileAppens.innerHTML = "0" + tens
        }

        if(tens > 9){
            mileAppens.innerHTML = tens;
        }

        if(tens > 99){
            seconds++
            secAppens.innerHTML = "0" + seconds
            tens = 0
            mileAppens.innerHTML = "0" + 0
        }

        if(seconds > 9){
            secAppens.innerHTML = seconds;
        }        
    }

    //counter function V

    var buttoncounter = document.getElementById('button-counter')
    var buttoncounterdown = document.getElementById('button-counter-down')
    var buttonResetCounter = document.getElementById('reset-counter');
    var counter = document.getElementById('counter');
    var number = 0;

    buttoncounter.onclick = function (){
        counter.innerHTML = ++number
    }

    buttoncounterdown.onclick = function () {
        counter.innerHTML = --number;
    }

    buttonResetCounter.onclick = function () {
        number = 0
        counter.innerHTML = 0;
    }
}