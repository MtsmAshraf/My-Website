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
let shuffleDots = document.querySelectorAll(".landing .shuffle > div");
let boxChildren = document.querySelectorAll(".landing .box > *:not(img)");
let boxes = document.querySelectorAll(".landing .box");

boxChildren.forEach((child)=>{
    child.style.cssText = `
        transform:translateY(100%) !important;
        opacity:0 !important;
    `;
});
window.onload = ()=>{
    boxes[0].children[1].style.cssText = `
    transform:translateY(0);
    opacity:1;
    `;
    boxes[0].children[2].style.cssText = `
    transform:translateY(0);
    opacity:1;
    `;
    boxes[0].children[3].style.cssText = `
    transform:translateY(0);
    opacity:1;
    `;
    let i = 0;
    let ani = setInterval(() => {
        if(i >= document.querySelectorAll(".landing .box").length){
            i=0;
            document.querySelector(".landing .content").style.cssText = `transform:translateX(-${i*document.querySelector(".landing .box").offsetWidth}px);`;
            console.log("done");
            clearInterval(ani);
        }
        document.querySelector(".landing .content").style.cssText = `transform:translateX(-${i*document.querySelector(".landing .box").offsetWidth}px);`;
        boxChildren.forEach((child)=>{
            child.style.cssText = `
                transform:translateY(100%) !important;
                opacity:0 !important;
            `;
        });
        boxes[i].children[1].style.cssText = `
            transform:translateY(0);
            opacity:1;
        `;
        boxes[i].children[2].style.cssText = `
        transform:translateY(0);
        opacity:1;
        `;
        boxes[i].children[3].style.cssText = `
        transform:translateY(0);
        opacity:1;
        `;
        shuffleDots.forEach((dot)=>{
            dot.classList.remove("active");
        })
        shuffleDots[i].classList.add("active");
        i++;
        
    }, 2000);
};
console.log(boxChildren);
shuffleDots.forEach((dot,index)=>{
    dot.onclick = ()=>{
        boxChildren.forEach((child)=>{
            child.style.cssText = `
                transform:translateY(100%) !important;
                opacity:0 !important;
            `;
        });
        shuffleDots.forEach((dot)=>{
            dot.classList.remove("active");
        });
        dot.classList.add("active");
        document.querySelector(".landing .content").style.cssText = `transform:translateX(-${index*document.querySelector(".landing .box").offsetWidth}px);`;
        boxes[index].children[1].style.cssText = `
            transform:translateY(0);
            opacity:1;
        `;
        boxes[index].children[2].style.cssText = `
        transform:translateY(0);
        opacity:1;
        `;
        boxes[index].children[3].style.cssText = `
        transform:translateY(0);
        opacity:1;
        `;
    }
});
let vidoesList = document.querySelectorAll(".recent ul li");
vidoesList.forEach((item)=>{
    item.onclick = ()=>{
        vidoesList.forEach((item)=>{
            item.classList.remove("active");
        })
        item.classList.add ("active");
    }
})
// window.onload = ()=>{
//     setTimeout(() => {
        
//     boxes[0].children[1].style.cssText = `
//     transform:translateY(0);
//     opacity:1;
//     `;
//     boxes[0].children[2].style.cssText = `
//     transform:translateY(0);
//     opacity:1;
//     `;
//     boxes[0].children[3].style.cssText = `
//     transform:translateY(0);
//     opacity:1;
//         `;
//     }, 2000);
// }