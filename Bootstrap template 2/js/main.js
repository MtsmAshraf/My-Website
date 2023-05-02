let navLinks = document.querySelectorAll(".nav-link");
let navLis = document.querySelectorAll("nav ul li");
let header = document.querySelector("nav");
let sections = document.querySelectorAll("body > div:not(:first-of-type)");
let landing = document.querySelector(".landing");
let contact = document.querySelector(".contact");

navLis.forEach((li)=>{
    li.onclick = ()=>{
        navLis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
    }
})
window.onscroll = ()=>{
    if(scrollY >= 1){
        header.classList.remove("bg-transparent");
        header.classList.add("bg-white");
        header.style.cssText = `
            position:sticky !important;
            top:0;
            left:0;
        `;
    }else{
        header.classList.add("bg-transparent");
        header.classList.remove("bg-white");
        header.style.cssText = `
            position:absolute !important;
            top:0;
            left:0;
        `;
    };
    navLis.forEach((li,index)=>{
        if(scrollY >= sections[index].offsetTop - 400){
            navLis.forEach((li,index)=>{
                li.classList.remove("active");
            })
            li.classList.add("active");
        }else if(scrollY < sections[0].offsetTop - 400){
            navLis.forEach((li,index)=>{
                li.classList.remove("active");
            })
        }
    })
    let offset = window.scrollY;
    landing.style.backgroundPositionY = offset * 0.7 + "px";
    contact.style.backgroundPositionY = offset * 0.7 + contact.offsetTop + "px";
};