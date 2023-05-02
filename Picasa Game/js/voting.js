let options = document.querySelectorAll(".options .option");
let votingDiv = document.querySelector(".content .container .voting");
let playersNumber = window.localStorage.getItem("playersNumber");
let playersObject = JSON.parse(window.localStorage.getItem("playersDataObj"));
let resultBtn = document.querySelector(".content .container .voting button");
var namesArray = [] 
let maxVoted = "";
let maxVotes = 0;
let maxVotesArray = [];
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

let increaseVoting = (text)=>{
    for(let j = 0; j < playersNumber; j++){
        console.log(playersObject[j].name)
        if(playersObject[j].name == text){
            playersObject[j].vote++;
            console.log(playersObject)
        }else{
            console.log("VOTE==");
        }
    }
}
let getMaxVote = ()=>{
    for(let j = 0; j < playersNumber; j++){
        if(maxVotes <= playersObject[j].vote){
            maxVotes = playersObject[j].vote;
        }
    }
    for(let j = 0; j < playersNumber; j++){
        if(playersObject[j].vote === maxVotes){
            maxVoted = playersObject[j].name;
            maxVotesArray.push(playersObject[j].name)
        }
    }

}

window.onload = ()=>{
    if(window.localStorage.getItem("index")){
        changeTheme(parseInt(window.localStorage.getItem("index")))
    }else{
        changeTheme(0)
    }
    var indexesList = [];
    for(let i = 0; i < playersNumber; i++){
        indexesList.push(i);
        namesArray.push(playersObject[i].name)
    }
    console.log(namesArray)
    for(let i = 0; i < playersNumber; i++){
        let playerVote = document.createElement("div");
        playerVote.classList.add("player-vote");
        let name = document.createElement("h3");
        name.classList.add("main-name");
        let randomIndex = Math.floor((indexesList.length) * Math.random())
        if(indexesList.includes(indexesList[randomIndex])){
            name.textContent = playersObject[indexesList[randomIndex]].name;
        }
        indexesList = indexesList.filter((ele)=>{
            return ele !== indexesList[randomIndex];
        })
        
        filteredNamesArray = namesArray.filter((ele)=>{
            return ele !== name.textContent;
        })
        let optionsParent = document.createElement("div");
        optionsParent.classList.add("options");
        for(let i = 0; i < playersNumber - 1; i++){
            let childOption = document.createElement("div")
            childOption.classList.add("option");
            childOption.textContent = filteredNamesArray[i];
            
            optionsParent.append(childOption)
        }
        playerVote.append(name,optionsParent)
        votingDiv.append(playerVote)
    }
    let options = votingDiv.querySelectorAll(".options .option");
    options.forEach((option,index)=>{
        option.onclick = ()=>{
            option.parentElement.querySelectorAll(".option").forEach((option)=>{
                option.classList.remove("active");
            })
            option.classList.add("active");
        }
    })
}

resultBtn.onclick = ()=>{
    votingDiv.querySelectorAll(".option").forEach((op)=>{
        console.log(op.textContent)
        if(op.classList.contains("active")){
            increaseVoting(op.textContent);
        }
    })
    getMaxVote();
    window.localStorage.setItem("maxVoted",maxVoted)
    window.localStorage.setItem("maxVotesArray",maxVotesArray)
    console.log(maxVotes)
    console.log(maxVoted)
    console.log(maxVotesArray)
    window.open("result.html","_self")
}