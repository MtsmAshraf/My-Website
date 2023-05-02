
let counter = setInterval(() => {
    let starting = new Date().getTime();
    let end = new Date("Apr 17, 2023 00:00:00").getTime();
    let timeDiff = end - starting;
    let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    let hrs = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(timeDiff % (1000 * 60) / (1000));
    
    document.querySelector(".days div").innerHTML = days < 10? `0${days}` : days;
    document.querySelector(".hours div").innerHTML = hrs < 10? `0${hrs}` : hrs;
    document.querySelector(".minutes div").innerHTML = mins < 10? `0${mins}` : mins;
    document.querySelector(".seconds div").innerHTML = secs < 10? `0${secs}` : secs;

    if(timeDiff <= 0 ){
        document.querySelector("body > .container h2 p").style.opacity = "1";
        document.querySelectorAll(".box div").forEach((div)=>{
            div.innerHTML = "-";
        })
    clearInterval(counter);
    }
}, 1000);