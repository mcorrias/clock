function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    
    
    var session = "";
    const cb = document.getElementById('time-format');
    if(cb.checked){
        
        session = "AM";

        if(hours === 0){
            hours = 12;
        }
        
        if(hours > 12){
            hours -= 12;
            session = "PM";
        }
            
    }

    var time = `${hours}:${minutes}:${seconds} ${session}`;

    const clock = document.getElementById("my-clock-display"); 
    
    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTime, 1000);
    
}

showTime();