window.onload = function (){
    var hours = document.getElementById('hours')
    var minuts = document.getElementById('minuts')
    var seconds = document.getElementById('seconds')
    var hor = 23;
    var sec = 55;
    var min = 59;
    var interval;
    
    clearInterval(interval)
    interval = setInterval(clockCounting, 1000)



    function clockCounting () {
        sec++
        if (sec <= 9){
            seconds.innerHTML = '0' + sec
        }

        if (sec > 9) {
            seconds.innerHTML = sec
        }

        if(sec >= 60){
            sec = 0
            seconds.innerHTML = '0' + 0
            min++
            minuts.innerHTML = '0' + min
        }

        if (min > 9) {
            minuts.innerHTML = min
        }

        if(min >= 60){
            min = 0
            minuts.innerHTML = '0' + 0
            hor++
            hours.innerHTML = '0' + hor
        }

        if (hor > 9) {
            hours.innerHTML = hor
        }

        if(hor >= 24){
            hor=0
            hours.innerHTML = '0' + 0
        }


    }
}