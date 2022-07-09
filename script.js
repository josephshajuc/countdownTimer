
const daysEl=document.getElementById('days')         
const hoursEl=document.getElementById('hours')                   
const minutesEl=document.getElementById('minutes')                 
const secondsEl=document.getElementById('seconds')                 

const launch='1 Jan 2023';

function calculateTime()
{
    const launchDate=new Date(launch);
    const currentDate=new Date();

    const seconds=(launchDate-currentDate)/1000;
    const days =seconds/(60*60*24);
    const hours =(seconds%(60*60*24))/(60*60);
    const minutes=((seconds%(60*60*24))%(60*60))/(60);
    const balanceSeconds=(((seconds%(60*60*24))%(60*60))%(60))
    daysEl.innerHTML= formatTime(Math.floor(days));
    hoursEl.innerHTML= formatTime(Math.floor(hours));
    secondsEl.innerHTML= formatTime(Math.floor(balanceSeconds));
    minutesEl.innerHTML= formatTime(Math.floor (minutes));
}

function formatTime(time)
{
    return(time<10 ? `0${time}` : time)
}

calculateTime();
setInterval(calculateTime,1000);

