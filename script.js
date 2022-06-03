function displayTime(){
    var dateTime = new Date();
    var _hours = dateTime.getHours();
    var _minutes = dateTime.getMinutes();
    var _seconds = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(_hours >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(_hours > 12){
        _hours = _hours - 12;
    }

    document.getElementById('hours').innerHTML = _hours;
    document.getElementById('minutes').innerHTML = _minutes;
    document.getElementById('seconds').innerHTML = _seconds;
}
setInterval(displayTime, 10);