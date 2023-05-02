let bars = document.querySelector(".header > i");
let shown = false;
bars.onclick = function(){
    if(shown == false){
        document.querySelector(".header ul").style.height = "280px";
        shown = true;
    }else{
        document.querySelector(".header ul").style.height = "0px";
        shown = false;
    }
}
let navLinks = document.querySelectorAll(".header ul a");
navLinks.forEach((link)=>{
    link.onclick = function(){
        navLinks.forEach((link)=>{
            link.classList.remove("active");
        })
        link.classList.add("active");
        if(document.body.offsetWidth <= 767){
            document.querySelector(".header ul").style.height = "0px";
            shown = false;
        }
    }
})
let sections = document.querySelectorAll("body > .nav");
let children = document.querySelectorAll("body > div > *:not(.img) > *:not(.img)");
console.log(children)
children.forEach((child) => {
    child.style.cssText = "transform:translateY(100px);opacity:0;";
});
let header = document.querySelector(".header");
window.onscroll = function(){
    sections.forEach((section,index)=>{
        if(scrollY >= section.offsetTop){
            navLinks.forEach((link)=>{
                link.classList.remove("active");
            })
            navLinks[index].classList.add("active");
        }
    })
    children.forEach((child) => {
        if(scrollY >= child.offsetTop - 500){
            child.style.cssText = "transform:translateY(0px);opacity:1;";
        }
    })
    document.querySelectorAll(".testimonials > *").forEach((child) => {
        if(scrollY >= document.querySelector(".testimonials").offsetTop - 500){
            console.log("testi")
            child.style.cssText = "transform:translateY(0px);opacity:1;";
        }else{
            document.querySelectorAll(".testimonials > *").forEach((child) => {
                child.style.cssText = "transform:translateY(100px);opacity:0;";
            });
        }
    })
    if(scrollY >= header.offsetHeight){
        header.style.cssText = `
            position:sticky;
            background-color:white;
            box-shadow: 0px 2px 7px 1px #ddd;
        `;
    }else{
        header.style.cssText = `
            position:absolute;
            background-color:transparent;
            box-shadow: none;
        `;
    }
}
window.onload = function(){
    document.querySelectorAll(".home .text > *").forEach((child)=>{
        child.style.cssText = "transform:translateY(0px);opacity:1;";
    })
}



