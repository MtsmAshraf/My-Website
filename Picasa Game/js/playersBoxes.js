let playersBoxes = document.querySelectorAll(".content .container .player");
let questionsLink = document.querySelector(".content .container:has(.player) a");
let playerInnerBoxes = document.querySelectorAll(".content .container .player .box");
let container = document.querySelector(".content .container")
let activeIndex = 0;
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
var categoriesObj = {
    animals: ["cat","dog","elephant","lion","horse","tiger","lizard","giraffe"],
    jobs: ["teacher","doctor","pilot","officer","driver","engineer"],
    food: ["pizza","pasta","chicken","milk","cheese","fish","tomato","banana","mango"],
    sports: ["football","basketball","tennis","swimming","baseball","handball","boxing","volleyball"],
}

if(window.localStorage.getItem("chosenCategory") == ""){
    let randomCategoryIndex = Math.floor(Object.keys(categoriesObj).length * Math.random());
    var chosenCategory = Object.keys(categoriesObj)[randomCategoryIndex];
    console.log(chosenCategory)
}else{
    var chosenCategory = window.localStorage.getItem("chosenCategory");
}
console.log(categoriesObj[chosenCategory].length)
// import {playersDataObj} from "../js/mid"
// console.log(playersDataObj)
window.onload = ()=>{
    if(window.localStorage.getItem("index")){
        changeTheme(parseInt(window.localStorage.getItem("index")))
    }else{
        changeTheme(0)
    }
    questionsLink.style.display = "none";
    let playersNumber = window.localStorage.getItem("playersNumber");
    let playersObject = JSON.parse(window.localStorage.getItem("playersDataObj"));
    let testObj = playersObject;
    var indexesList = [];
    let chosenPlayerIndex = Math.floor(playersNumber * Math.random());
    let chosenPlayerName = playersObject[chosenPlayerIndex].name;
    window.localStorage.setItem("imposter",chosenPlayerName)
    console.log("imposter",chosenPlayerName)
    console.log(chosenPlayerName)
    var chosenItemIndex = Math.floor(categoriesObj[chosenCategory].length * Math.random());
    var diffChosenItemIndex = Math.floor(categoriesObj[chosenCategory].length * Math.random());
    console.log(chosenPlayerIndex)
    for(let i = 0; i < playersNumber; i++){
        indexesList.push(i);
    }
    for(let i = 0; i < playersNumber; i++){
        console.log(playersObject[i].name)
        let playerParentDiv = document.createElement("div");
        playerParentDiv.classList.add("player")
        if(i === 0){
            playerParentDiv.classList.add("active")
        }
        let playerName = document.createElement("h2");
        playerName.classList.add("player-name");
        let randomIndex = Math.floor((indexesList.length) * Math.random())
        if(indexesList.includes(indexesList[randomIndex])){
            playerName.textContent = playersObject[indexesList[randomIndex]].name;
        }
        indexesList = indexesList.filter((ele)=>{
            return ele !== indexesList[randomIndex];
        })
        
        let playerBox = document.createElement("div");
        playerBox.classList.add("box");
        playerBox.onclick = ()=>{
            if(playerBox.querySelector("span").textContent != 1){
                playerBox.querySelector("span").textContent--
            }else{
                playerBox.querySelector(".cover").style.display = "none";
            }
        }
        let boxCover = document.createElement("div");
        boxCover.classList.add("cover");
        boxCover.innerHTML = `Tap <span> 3 </span> times!`;
        let boxItem = document.createElement("div")
        boxItem.classList.add("item");
        let itemImg = document.createElement("div");
        itemImg.classList.add("img");
        let itemP = document.createElement("p");
        for(let i = 0; i < 1000; i++){
            if(categoriesObj[chosenCategory][diffChosenItemIndex] === categoriesObj[chosenCategory][chosenItemIndex]){
                var diffChosenItemIndex = Math.floor(categoriesObj[chosenCategory].length * Math.random());
                console.log("equal")
            }else{
                console.log("NOT equal")
                break;
            }
        }
        console.log(diffChosenItemIndex, " ", chosenItemIndex)
        if(i === chosenPlayerIndex){
            // playerName.textContent = chosenPlayerName
            playerBox.classList.add("empty");
            itemImg.innerHTML = `<img src="imgs/${categoriesObj[chosenCategory][diffChosenItemIndex]}.png" alt="">`
            boxItem.append(itemP);
            itemP.innerText = categoriesObj[chosenCategory][diffChosenItemIndex];
            boxItem.append(itemImg,itemP)
        }else{
            itemImg.innerHTML = `<img src="imgs/${categoriesObj[chosenCategory][chosenItemIndex]}.png" alt="">`
            itemP.innerText = categoriesObj[chosenCategory][chosenItemIndex];
            boxItem.append(itemImg,itemP)
        }
        playerBox.append(boxCover,boxItem);
        playerParentDiv.append(playerName,playerBox)
        container.append(playerParentDiv)
    }
    let players = container.querySelectorAll(".player");
    let checkPlayerBoxes = ()=>{
        players.forEach((player)=>{
            if(player.classList.contains("active")){
                player.style.display = "block"
            }else{
                player.style.display = "none"
            }
        })
    }
    let checkActiveIndex = ()=>{
        players.forEach((player,index)=>{
            if(player.classList.contains("active")){
                activeIndex = index;
            }
        })
    }
    checkPlayerBoxes();
    let nextPlayerBtn = document.createElement("button");
    nextPlayerBtn.textContent = "Next Player";
    nextPlayerBtn.onclick = (e)=>{
        e.preventDefault();
        console.log("BUTTON")
        console.log(activeIndex)
        checkActiveIndex();
        activeIndex++;
        players.forEach((player,index)=>{
            player.classList.remove("active")
        })
        players.forEach((player,index)=>{
            if(index === activeIndex){
                player.classList.add("active")
            }
        })
        checkPlayerBoxes();
        if(activeIndex >= players.length){
            nextPlayerBtn.style.display = "none";
            questionsLink.style.display = "block";
        }
    }
    container.append(nextPlayerBtn)
}


