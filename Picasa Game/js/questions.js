let container = document.querySelector(".questions .content .container");
let boxes = document.querySelectorAll(".questions .content .container .box");
let activeIndex = 0;
let playersNumber = window.localStorage.getItem("playersNumber");
let playersObject = JSON.parse(window.localStorage.getItem("playersDataObj"));
let votingLink = document.querySelector(".questions .content .container a");
let askingNamesArray = [];
let askedNamesArray = [];
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


// for(let i = 0; i < playersNumber; i++){
    
// }

let checkPlayerBoxes = ()=>{
    boxes.forEach((box)=>{
        if(box.classList.contains("active")){
            box.style.display = "flex"
        }else{
            box.style.display = "none"
        }
    })
}
let checkActiveIndex = ()=>{
    boxes.forEach((box,index)=>{
        if(box.classList.contains("active")){
            activeIndex = index;
        }
    })
}
checkPlayerBoxes();

window.onload = ()=>{
    if(window.localStorage.getItem("index")){
        changeTheme(parseInt(window.localStorage.getItem("index")))
    }else{
        changeTheme(0)
    }
    var indexesList = [];
    let nextPlayerBtn = document.createElement("button");
    nextPlayerBtn.textContent = "Next"
    for(let i = 0; i < playersNumber; i++){
        indexesList.push(i);
    }
    for(let i = 0; i < playersNumber; i++){
        let box = document.createElement("div");
        box.classList.add("box")
        if(i === activeIndex){
            box.classList.add("active");
        }
        let askingPlayerDiv = document.createElement("div");
        askingPlayerDiv.classList.add("asking-player");
        askingPlayerDiv.textContent = "Asking player" + i;
        let directionDiv = document.createElement("div");
        directionDiv.classList.add("direction");
        let directionIcon = document.createElement("i")
        directionIcon.classList.add("fa-solid", "fa-arrow-down-long")
        let directionP = document.createElement("p")
        directionP.textContent = "ASK";
        directionDiv.append(directionIcon,directionP)
        let askedPlayerDiv = document.createElement("div");
        askedPlayerDiv.classList.add("asked-player");
        askedPlayerDiv.textContent = "Asked player";
        box.append(askingPlayerDiv,directionDiv,askedPlayerDiv)
        container.append(box)
        let randomIndex = Math.floor((indexesList.length) * Math.random())
        if(indexesList.includes(indexesList[randomIndex])){
            askingNamesArray.push(playersObject[indexesList[randomIndex]].name)
            askedNamesArray.push(playersObject[indexesList[randomIndex]].name)
        }
        indexesList = indexesList.filter((ele)=>{
            return ele !== indexesList[randomIndex];
        })
        
        
    }
    // askingNamesArray = askingNamesArray.sort().reverse();
    console.log(askingNamesArray)
    let askingPlayerDivs = container.querySelectorAll(".asking-player")
    let askedPlayerDivs = container.querySelectorAll(".asked-player")
    var first = "";
    askingPlayerDivs.forEach((player,index)=>{
        if(index === 0){
            first = askingNamesArray[index];
        }
        if(index === (askingNamesArray.length - 1)){
            player.textContent = askingNamesArray[index];
            askedPlayerDivs[index].textContent = first;
        }else{
            player.textContent = askingNamesArray[index];
            askedPlayerDivs[index].textContent = askingNamesArray[index + 1];
        }
       

    //     // making a random index for asking name
    //     var randomAskingNameIndex = Math.floor((askingNamesArray.length) * Math.random());
    //     // put the name in the asking box
    //     player.textContent = askingNamesArray[randomAskingNameIndex];
    //     // making a random index for the asked name
    //     var randomAskedNameIndex = Math.floor((askedNamesArray.length) * Math.random());
    //     // making sure the asking name is not the same as the asked name
    //     console.log("TEST")
    //     var randomAskedNameIndex = Math.floor((askedNamesArray.length) * Math.random());
    //     console.log("asking BEFORE", askingNamesArray[randomAskingNameIndex])
    //     console.log("asked BEFORE", askedNamesArray[randomAskedNameIndex])
    //     let n = 0;
    //     do{
    //         var randomAskedNameIndex = Math.floor((askedNamesArray.length) * Math.random());
    //         n++;
    //     }while(n < 10)
    //  // }while(askingNamesArray[randomAskingNameIndex] === askedNamesArray[randomAskedNameIndex])
    //     console.log("asking AFTER", askingNamesArray[randomAskingNameIndex])
    //     console.log("asked AFTER", askedNamesArray[randomAskedNameIndex])
    //     console.log(askingNamesArray)
    //     console.log(askedNamesArray)
    //     // removing the name from the asking names array
    //     askingNamesArray = askingNamesArray.filter((ele)=>{
    //         return ele !==  askingNamesArray[randomAskingNameIndex]
    //     })
    //     // put the name in the asked box box        
    //     askedPlayerDivs[index].textContent = askedNamesArray[randomAskedNameIndex];
    //     // removing the name from the asked names array
    //     askedNamesArray = askedNamesArray.filter((ele)=>{
    //         return ele !==  askedPlayerDivs[index].textContent
    //     })
        // logging asking and asked arrays
        // var filteringAskingNamesArray = askingNamesArray.filter((ele)=>{
        //     return ele !== askingNamesArray[randomAskingNameIndex]; 
        // })
        // if(filteringAskingNamesArray.length === playersNumber -1){
        //     first = askingNamesArray[randomAskingNameIndex];
        // }
        // if(filteringAskingNamesArray.length === 0){
        //     askedPlayerDivs[index].textContent = askedNamesArray[randomAskedNameIndex];
        // }else{
        //     askedPlayerDivs[index].textContent = askedNamesArray[randomAskedNameIndex];
        // }
    })
    let boxes = container.querySelectorAll(".box")
        let checkPlayerBoxes = ()=>{
            boxes.forEach((box)=>{
                if(box.classList.contains("active")){
                    box.style.display = "flex"
                }else{
                    box.style.display = "none"
                }
            })
        }
        let checkActiveIndex = ()=>{
            boxes.forEach((box,index)=>{
                if(box.classList.contains("active")){
                    activeIndex = index;
                }
            })
        }
        nextPlayerBtn.onclick = (e)=>{
            e.preventDefault();
            console.log("BUTTON")
            console.log(activeIndex)
            checkActiveIndex();
            activeIndex++;
            boxes.forEach((box,index)=>{
                box.classList.remove("active")
            })
            boxes.forEach((box,index)=>{
                if(index === activeIndex){
                    box.classList.add("active")
                }
            })
            checkPlayerBoxes();
            if(activeIndex >= boxes.length){
                nextPlayerBtn.style.    display = "none";
                votingLink.style.display = "block";
            }
        }   
        console.log(boxes.length)
    container.append(nextPlayerBtn)
}

