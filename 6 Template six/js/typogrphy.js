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