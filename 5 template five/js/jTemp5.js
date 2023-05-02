let header = document.querySelector("body .header");
let homeImgs = document.querySelectorAll(".home  img");
window.onload = function(){
        homeImgs.forEach((img)=> {
            img.style.cssText=`  
            transform:translateX(0px);
            opacity:1;
        `;
        })
        document.querySelector(".home .content").style.cssText=`
            transform:translateX(0px);
            opacity:1;
        `;
        document.querySelector("body > img:first-of-type").style.cssText = `
        transform:translateX(0px);
        opacity:1;
        `;
        header.style.cssText = "transform: translateY(0%);";
}
let headerLinks = document.querySelectorAll(".header ul li a");
headerLinks.forEach((link)=>{
    link.onclick = ()=>{
        headerLinks.forEach((link)=>{
            link.classList.remove("active");
        })
        link.classList.add("active");
    }
})
window.onscroll = function(){
    if(scrollY >= header.offsetHeight){
        header.style.cssText = `
            position:sticky;
            top:0;
            left:0;
            background-color:white;
            transform: translateY(0%);
        `;
    }else{
        header.style.cssText = `
            position: absolute;
            top: 0;
            left: 0px;
            background-color:transparent;
            transform: translateY(0%);
        `;
    }
    headerLinks.forEach((link)=>{
        
    })
}
let peopleList = document.querySelectorAll(".clients ul li");
let opinions = document.querySelectorAll(".clients .opinions .opinion");
document.querySelector(".clients .content .opinions .opinion.active").style.cssText = `
            display:block;
        `;

peopleList.forEach((item,index)=>{
    item.onclick = function(){
        peopleList.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
        console.log(document.querySelector(".clients .opinions .opinion.active"),index);
        document.querySelector(".clients .opinions .opinion.active").style.cssText = `
            animation: op-show 1s ease-in-out 0s 1 forwards reverse;
        `;
        opinions[index].classList.add("shown");
        opinions.forEach((op)=>{
            
            op.classList.remove("active");
        });
        opinions[index].classList.add("active");
        // console.log(opinions);
        document.querySelector(".clients .opinions .opinion.active").style.cssText = `
            animation: op-show 0.3s ease-in-out 0s 1 forwards normal;
            display:block;
        `;
    }
});
let servicesBoxes = document.querySelectorAll(".services .box");
let servicesImgs = document.querySelectorAll(".services .box img");

servicesBoxes.forEach((box,index)=>{
    box.style.cssText = "background-color:white;"
    box.addEventListener("mouseover",function(){
        servicesImgs[index].setAttribute("src",`images/service-icon-hover-0${index+1}.png`);
    })
    box.addEventListener("mouseout",function(){
        servicesImgs[index].setAttribute("src",`images/service-icon-0${index+1}.png`);
    })
})