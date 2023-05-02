let stats = document.querySelectorAll(".stats .box span");

let done = false;
window.onscroll = function(){
    console.log(scrollY)
    console.log(document.querySelector(".stats").offsetTop)
    if(scrollY >= document.querySelector(".stats").offsetTop - 300){
        if(done === false){
            stats.forEach((stat) => {
                let max = parseInt(stat.textContent);
                console.log(max)
                stat.textContent = 0;
                let counter = setInterval(() => {
                    stat.textContent = parseInt(stat.textContent) +1;
                    if(parseInt(stat.textContent) >= max){
                        clearInterval(counter);
                    }
                }, 1 / max);
            })
            done = true;
        }
    }
};

