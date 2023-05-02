let navBars = document.querySelector(".header .container > i");
let navShown = false;
let socialIcon = document.querySelector(".header ul.dots");
let socialShown = false;
let navLinks = document.querySelectorAll(".header .nav li");
navLinks.forEach((link)=>{
    link.onclick = ()=>{    
        navLinks.forEach((link)=>{
            link.classList.remove("active")
        })
        link.classList.add("active")
    }
})
navBars.onclick = function(){ 
    if(document.body.offsetWidth <= 992){
        console.log("[sdionfsko");       
        if(navShown === false){
            document.querySelector(".header ul.nav").style.cssText = "transform:translateX(0) !important;";
            navShown = true;
        }else if(navShown === true){
            document.querySelector(".header ul.nav").style.cssText = "transform:translateX(-100%) !important;";
            navShown = false;
        }
    }
    // else if(document.querySelector(".container").offsetWidth > 980){
    //         console.log(document.body.offsetWidth);
    //         document.querySelector(".header ul.nav").style.cssText = "transform:translateX(0);";
    //         console.log("big");
    //         navShown = false;         
    // };
}

socialIcon.onclick = ()=>{
    if(socialShown === false){
        document.querySelector(".header ul.social").style.cssText = "top:70px;opacity:1;z-index:2;";
        socialShown = true;
    }else{
        document.querySelector(".header ul.social").style.cssText = "top:50px;opacity:0;z-index:-1;";
        socialShown = false;
    }
}
let header = document.querySelector(".header");
window.onscroll = ()=>{
    if(scrollY >= header.offsetHeight){
        header.style.cssText = `
            position:fixed;
            top:0;
            left:0;
            background-color:#222d4f;
            border-bottom: 1px solid white;
        `;
    }
    else{
        header.style.cssText = `
            background-color: transparent;
            border-bottom: 1px solid transparent;
            position: absolute;
            top: 0;
            left: 0;
        `;
    }
}
let as = document.querySelectorAll(".change ul a");
as.forEach((a)=>{
    a.onclick = (e)=>{
        e.preventDefualt();
    }
})
let audioLis = document.querySelectorAll(".change ul li");
let audios = document.querySelectorAll(".change .audio");
audioLis.forEach((li,index)=>{
    li.onclick = (e)=>{
        audioLis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
        audios.forEach((audio)=>{
            audio.classList.remove("active");
        })
        audios[index].style.cssText = "opacity:0;";
        audios[index].classList.add("active");
        setTimeout(() => {
            audios[index].style.cssText = "opacity:1;";
        }, 50);
    }
})
let awardsBoxes = document.querySelectorAll(".awards .box");
// window.onresize = ()=>{
    awardsBoxes.forEach((box)=>{
        if(document.querySelector(".container").offsetWidth > 980){
            box.onclick = ()=>{console.log("BIG")};
            box.style.cssText = `
            width: ${document.querySelector(".container").offsetWidth / 3}px;
        `;
        }else if(document.querySelector(".container").offsetWidth <= 980 && document.querySelector(".container").offsetWidth > 750){
            box.onclick = ()=>{console.log("mid")};
            box.style.cssText = `
            width: ${document.querySelector(".container").offsetWidth / 2}px;
        `;
        }else if(document.querySelector(".container").offsetWidth < 750 && document.querySelector(".container").offsetWidth > 700){
            box.onclick = ()=>{console.log("small")};
            box.style.cssText = `
            width: ${document.querySelector(".container").offsetWidth / 2}px;
        `;
        }else if(document.querySelector(".container").offsetWidth < 700){
            box.onclick = ()=>{console.log("tiny")};
            box.style.cssText = `
            width: calc(100% / 5) !important;
        `;
        }
    })
    console.log(document.querySelector(".container").offsetWidth);
// }
let awardsArrowleft = document.querySelector(".awards > i:first-of-type");
let awardsArrowRight = document.querySelector(".awards > i:last-of-type");
let offset = 0;

if(document.querySelector(".container").offsetWidth > 980){
    awardsArrowleft.onclick = () => {
        offset += awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
    console.log("ya ALLAH")
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 2){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 2){
            awardsArrowleft.style.display = "none"; 
        }
    }
    awardsArrowRight.onclick = () => {
        offset -= awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 2){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 2){
            awardsArrowleft.style.display = "none"; 
        }
    }
}else if(document.querySelector(".container").offsetWidth <= 980 && document.querySelector(".container").offsetWidth > 750){
    awardsArrowleft.onclick = () => {
        offset += awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
       console.log("ya RAB")
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 3){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 3){
            awardsArrowleft.style.display = "none"; 
        }
    }
    awardsArrowRight.onclick = () => {
        offset -= awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 3){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 3){
            awardsArrowleft.style.display = "none"; 
        }
    }
}else if(document.querySelector(".container").offsetWidth < 750){
    awardsArrowleft.onclick = () => {
        offset += awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
       console.log("ya RABBY")
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 5){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 5){
            awardsArrowleft.style.display = "none"; 
        }
    }
    awardsArrowRight.onclick = () => {
        offset -= awardsBoxes[0].offsetWidth;
        document.querySelector(".awards .content").style.cssText = `transform:translateX(-${offset}px)`;
        if(offset === 0){
            awardsArrowRight.style.display = "none"; 
        }else if(offset > 0 && offset < awardsBoxes[0].offsetWidth * 5){
            awardsArrowRight.style.display = "block"; 
            awardsArrowleft.style.display = "block"; 
        }else if(offset ===  awardsBoxes[0].offsetWidth * 5){
            awardsArrowleft.style.display = "none"; 
        }
    }
}


window.onload = () => {awardsArrowRight.style.display = "none"};
    