let hour = document.getElementById('hour');
let minute = document.getElementById('minutes');
let second = document.getElementById('seconds');

let clock = setInterval(
    function time() {

        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        if(hr < 10)
        {
            hr = "0" + hr;
        }

        if(min < 10)
        {
            min = "0" + min;
        }

        if(sec < 10)
        {
            sec = "0" + sec;
        }

        hour.textContent = hr;
        minute.textContent = min;
        second.textContent = sec;
},1000)
