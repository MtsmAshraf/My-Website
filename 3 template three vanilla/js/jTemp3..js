let discoverBtn = document.querySelector(".intro button");
discoverBtn.onclick = function(){
    window.scrollTo({
        left:0,
        top:document.querySelector(".about").offsetTop,
        behavior:"smooth"
    });
}
let lis = document.querySelectorAll(".gallery ul li");
let fLi = document.querySelector(".gallery ul li");
lis.forEach((li,index) => {
    li.onclick = function(){
        lis.forEach((li) => {
            li.classList.remove("active");
        })
        li.classList.add("active");
        let boxWidth = document.querySelector(".gallery .box").offsetWidth;
        if(document.querySelector(".container").offsetWidth >= 980){
            if(index === 0){
                document.querySelector(".gallery .boxes").style.cssText=`
                    transform:translateX(0);
                `;
            }else if(index === 1){
                document.querySelector(".gallery .boxes").style.cssText=`
                    transform:translateX(-${3*boxWidth + 90}px);
                `;
            }else if(index  === 2){
                document.querySelector(".gallery .boxes").style.cssText=`
                transform:translateX(-${(3*boxWidth + 90) + 2*boxWidth + 60}px);
            `;
            }
        }else if(document.querySelector(".container").offsetWidth >= 750){
            document.querySelector(".gallery .boxes").style.cssText=`
                    transform:translateX(-${2*index*boxWidth + 30*index*2}px);
                `;
        }
        else if(document.querySelector(".container").offsetWidth < 750){
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${index*boxWidth + 30*index}px);
        `;
        }
    }
})
let yearsSpans = document.querySelectorAll(".history span");
let historyBoxes = document.querySelectorAll(".history .box");
yearsSpans.forEach((span,index) =>{
    span.onclick = function(){
        yearsSpans.forEach((span)=>{
            span.classList.remove("active");
        })
        span.classList.add("active");
        historyBoxes.forEach((box)=>{
            box.classList.remove("active");
            historyBoxes[index].classList.add("active");
        })
    }
})
setInterval(() => {
    let boxWidth = document.querySelector(".gallery .box").offsetWidth;
    if(document.querySelector(".container").offsetWidth >= 980){
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${3*boxWidth + 90}px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[1].classList.add("active");
        }, 5000);
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${(3*boxWidth + 90) + 2*boxWidth + 60}px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[2].classList.add("active");
        }, 10000);
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(0);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[0].classList.add("active");
        }, 15000);
    }else if(document.querySelector(".container").offsetWidth >= 750){
        for(i=0;i<4;i++){
            setTimeout(() => {
                lis.forEach((li) => {
                    li.classList.remove("active");
                })
                lis[i].classList.add("active");
            }, 2000);
        }
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${2*boxWidth + 60}px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[1].classList.add("active");
        }, 2000);
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${2*(2*boxWidth + 60)}px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[2].classList.add("active");
        }, 4000);
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(-${3*(2*boxWidth + 60)}px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[3].classList.add("active");
        }, 6000);
        setTimeout(() => {
            document.querySelector(".gallery .boxes").style.cssText=`
            transform:translateX(0px);
            `;
            lis.forEach((li) => {
                li.classList.remove("active");
            })
            lis[0].classList.add("active");
        }, 8000);
    }else if(document.querySelector(".container").offsetWidth < 750){
        let i = 0;
        setInterval(() => {
                document.querySelector(".gallery .boxes").style.cssText=`
                transform:translateX(-${(i*boxWidth + i*30)}px);
                `;
                // lis.forEach((li) => {
                //     li.classList.remove("active");
                // })
                // lis[i].classList.add("active");
                if(i>=lis.length-1){
                    i=0;
                }else{
                    i++;
                }
            }, 2000);
    }   
}, 16000);

let navLinks = document.querySelectorAll(".nav a");
let dots = document.querySelectorAll(".nav i");
let sections = document.querySelectorAll("body > div");
navLinks.forEach((link,index) => {
    link.onclick = function(){
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        // dots.forEach((dot)=>{
        //     dot.classList.remove("active")
        // })
        link.classList.add("active");
        // dots[index].classList.add("active")
    }
})

let containers = document.querySelectorAll(".container");

    
window.onscroll = function(){
    dots.forEach((dot,index)=>{
        if(scrollY >= sections[index].offsetTop){
            dots.forEach((dot)=>{
            dot.classList.remove("active");
            });
            dots[index].classList.add("active");
        }
    });
    containers.forEach((container)=>{
        if(scrollY >= container.offsetTop - 600){
            container.style.cssText=`
            transform:translateX(0px);
            opacity:1;
        `;
        }
    });
};
dots.forEach(function(dot,index){
    dot.onclick = function(){
        dots.forEach((dot)=>{
            dot.classList.remove("active");
            });
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        navLinks[index].classList.add("active")
        dot.classList.add("active");
        window.scrollTo({
            left:0,
            top:sections[index].offsetTop,  
            behavior:"smooth",
        })
    }
})

// making cool parallax effect
let paraSections = document.querySelectorAll(".parallax");
paraSections.forEach((section) => {
    window.addEventListener("scroll",function(){
        let offset = window.scrollY;
        section.classList.add("active");
        console.log(section)
        // section.style.cssText = `background-position-y: ${49.599998474121094 * 70} px;`;
    })
})