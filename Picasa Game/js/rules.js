let settingsIcon = document.querySelector(".header .settings");
let bodyOverlay = document.querySelector("body > .overlay")
let custom = document.querySelector(".custom");
let customCloseIcon = document.querySelector(".custom > .close");
let themesDivs = document.querySelectorAll(".custom .themes > div");
var playersDataObj = {};

// document.documentElement.style.setProperty(' --equal-shadow', 'hsl(6, 70%, 34%)');

let changeTheme = (index)=>{
    if(index === 0){
        console.log("main")
        document.documentElement.style.setProperty('--first-color', '#A37B73FF');
        document.documentElement.style.setProperty('--first-color-semi', 'rgba(163, 123, 115, 0.557)');
        document.documentElement.style.setProperty('--sec-color', '#DBBEA1FF');
        document.documentElement.style.setProperty('--sec-color-semi', '#f4b31a7e');
        document.documentElement.style.setProperty('--third-color', ' #021929');
        document.documentElement.style.setProperty('--third-color-semi', '#0219294f');
    }else if(index === 1){
        console.log("brown")
        document.documentElement.style.setProperty('--first-color', '#fffdbd');
        document.documentElement.style.setProperty('--first-color-semi', '#fffdbd3b');
        document.documentElement.style.setProperty('--sec-color', '#c6cb4c');
        document.documentElement.style.setProperty('--sec-color-semi', '#c7cb4c6c');
        document.documentElement.style.setProperty('--third-color', '#2a0101');
        document.documentElement.style.setProperty('--third-color-semi', '#2a010164');
    }else if(index === 2){
        console.log("dark and lime")
        document.documentElement.style.setProperty('--first-color', '#595252');
        document.documentElement.style.setProperty('--first-color-semi', '#59525272');
        document.documentElement.style.setProperty('--sec-color', '#32cd32');
        document.documentElement.style.setProperty('--sec-color-semi', '#0be10b6d');
        document.documentElement.style.setProperty('--third-color', '#000000');
        document.documentElement.style.setProperty('--third-color-semi', '#00000048');
    }
}

settingsIcon.onclick = ()=>{
    custom.style.cssText = `
        transform: translate(-50%, -0px);
        padding: 20px;
        width: 90%;
        height: 150px;
        opacity: 1;
    `
    bodyOverlay.style.cssText = `
        z-index: 3;
        opacity: 0.6;   
    `
    
}
customCloseIcon.onclick = ()=>{
    custom.style.cssText = `
        transform: translate(-50%, -200px);
        padding: 0px;
        width: 0%;
        height: 0px;
        opacity: 0;
    `
    bodyOverlay.style.cssText = `
        z-index: -1;
        opacity: 0;  
    `
}
bodyOverlay.onclick = ()=>{
    custom.style.cssText = `
        transform: translate(-50%, -200px);
        padding: 0px;
        width: 0%;
        height: 0px;
        opacity: 0;
    `
    bodyOverlay.style.cssText = `
        z-index: -1;
        opacity: 0;  
    `
}

themesDivs.forEach((div,index)=>{
    div.onclick = ()=>{
        themesDivs.forEach((div)=>{
            div.classList.remove("active");
        })
        div.classList.add("active");
        console.log(index)
        changeTheme(index)
        window.localStorage.setItem("index",index);
    }
})

window.onload = ()=>{
    if(window.localStorage.getItem("index")){
        changeTheme(parseInt(window.localStorage.getItem("index")))
    }else{
        changeTheme(0)
    }
}