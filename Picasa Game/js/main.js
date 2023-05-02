let categoriesBoxes = document.querySelectorAll(".categories .boxes .box");
let noOfPlayersInput = document.querySelector(".number-of-players input");
let noOfPlayersBtn = document.querySelector(".number-of-players button");
let addPlayersInputsParent = document.querySelector(".added-players");
let addPlayersInputs = document.querySelectorAll(".added-players .add-player input");
let addPlayersBtns = document.querySelectorAll(".added-players .add-player button");
let allDoneBtn = document.querySelector(".all-done");
let addPlayersPs = document.querySelectorAll(".added-players .add-player p");
let settingsIcon = document.querySelector(".header .settings");
let bodyOverlay = document.querySelector("body > .overlay")
let custom = document.querySelector(".custom");
let customCloseIcon = document.querySelector(".custom > .close");
let themesDivs = document.querySelectorAll(".custom .themes > div");
var playersDataObj = {};

// document.documentElement.style.setProperty(' --equal-shadow', 'hsl(6, 70%, 34%)');

let changeTheme = (index)=>{
    if(index === 0){
        document.documentElement.style.setProperty('--first-color', '#A37B73FF');
        document.documentElement.style.setProperty('--first-color-semi', 'rgba(163, 123, 115, 0.557)');
        document.documentElement.style.setProperty('--sec-color', '#DBBEA1FF');
        document.documentElement.style.setProperty('--sec-color-semi', '#f4b31a7e');
        document.documentElement.style.setProperty('--third-color', ' #021929');
        document.documentElement.style.setProperty('--third-color-semi', '#0219294f');
    }else if(index === 1){
        document.documentElement.style.setProperty('--first-color', '#fffdbd');
        document.documentElement.style.setProperty('--first-color-semi', '#fffdbd3b');
        document.documentElement.style.setProperty('--sec-color', '#c6cb4c');
        document.documentElement.style.setProperty('--sec-color-semi', '#c7cb4c6c');
        document.documentElement.style.setProperty('--third-color', '#2a0101');
        document.documentElement.style.setProperty('--third-color-semi', '#2a010164');
    }else if(index === 2){
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
let makePlayerInput = ()=>{
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("add-player");
    let p = document.createElement("p");
    let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","Name");
    input.oninput = ()=>{
        p.textContent = input.value.trim();
    }
    let btn = document.createElement("button");
    btn.onclick = (e)=>{
        console.log("CLIKCED")
        e.preventDefault();
        if(input.value !== ""){
            p.style.display = "block";
            input.style.display = "none";
            btn.style.display = "none";
        }
    }
    btn.textContent = "Done";
    parentDiv.append(p,input,btn)
    addPlayersInputsParent.append(parentDiv)
   
}
var chosenCategory = "";
console.log(addPlayersInputsParent.querySelectorAll("button"))
categoriesBoxes.forEach((box)=>{
    box.onclick = ()=>{
        if(box.classList.contains("active")){
            categoriesBoxes.forEach((box)=>{
                box.classList.remove("active")
                chosenCategory = "";
                window.localStorage.setItem("chosenCategory",chosenCategory)
            })
        }else{
            categoriesBoxes.forEach((box)=>{
                box.classList.remove("active")
            })
            box.classList.add("active")
            chosenCategory = box.querySelector("p").textContent.toLowerCase();
            window.localStorage.setItem("chosenCategory",chosenCategory)
        }
        console.log(chosenCategory)
    }
})
console.log(Math.floor((+noOfPlayersInput.value) * Math.random()))
var indexesList = [];

noOfPlayersBtn.onclick = (e)=>{
    e.preventDefault();
    if(noOfPlayersInput.value != 0){ 
        var indexesList = [];
        window.localStorage.setItem("playersNumber",noOfPlayersInput.value)
        addPlayersInputsParent.querySelectorAll(".add-player").forEach(child => {
            child.style.display = "none";
        });
        for(let i=0; i < noOfPlayersInput.value; i++){
            makePlayerInput();
            indexesList.push(i)
            console.log(indexesList)
        }
        addPlayersInputsParent.querySelectorAll("button").forEach((button,i)=>{
            button.addEventListener("click",()=>{
                let randomIndex = Math.floor((indexesList.length) * Math.random())
                if(indexesList.includes(indexesList[randomIndex])){
                    playersDataObj[`${indexesList[randomIndex]}`] = {
                        name : `${addPlayersInputsParent.querySelectorAll("input")[i].value}`,
                        vote: 0
                    };
                }
                indexesList = indexesList.filter((ele)=>{
                    return ele !== indexesList[randomIndex];
                })
                window.localStorage.setItem("playersDataObj",JSON.stringify(playersDataObj))
                console.log(JSON.parse(window.localStorage.getItem("playersDataObj")));
            })
        })
        document.querySelector(".add-players form h4").style.display = "block";
    }
}
allDoneBtn.onclick = () => {
    playersDataObj = {};
    document.querySelectorAll(".add-players button:not(.players-number-button)").forEach((btn,index) => {
        if(document.querySelectorAll("input:not([type='number'])")[index].value !== ""){
            btn.style.display = "none";
            document.querySelectorAll(".add-players p")[index].style.display = "block";
            document.querySelectorAll("input:not([type='number'])")[index].style.display = "none";
            btn.click()
            // let randomIndex = Math.floor((indexesList.length) * Math.random())
            // if(indexesList.includes(indexesList[randomIndex])){
            //     playersDataObj[`${indexesList[randomIndex]}`] = {
            //         name : `${addPlayersInputsParent.querySelectorAll("input")[i].value}`,
            //         vote: 0
            //     };
            // }
            // indexesList = indexesList.filter((ele)=>{
            //     return ele !== indexesList[randomIndex];
            // })
            // window.localStorage.setItem("playersDataObj",JSON.stringify(playersDataObj))
            // console.log(JSON.parse(window.localStorage.getItem("playersDataObj")));
        }
    })
}