let drawBtn = document.querySelector(".draw");
let items = document.querySelectorAll(".items span");
let input = document.querySelector("input");
let addBtn = document.querySelector("form button.add");
let resetBtn = document.querySelector("form button.reset");
let itemsHolder = document.querySelector(".items");
let list = [];
let random = 0;
input.focus();
addBtn.onclick = (e)=>{
    e.preventDefault();
    if(input.value !== ""){
        let span = document.createElement("span");
        random = Math.floor(list.length*Math.random());
        span.textContent = input.value;
        span.addEventListener("click",()=>{
            itemsHolder.removeChild(span);
            console.log("ITEM REMOVE")
        })
        list.push(span);
        itemsHolder.append(span);
        console.log(span.classList);
        console.log(list)
        input.focus();
        input.value = "";
        list.forEach((item,index)=>{
            item.classList.remove("chosen");
            list[random].className = "chosen";
        })
        console.log("added")
        console.log("L" ,list.length)
        console.log("R" ,random)
    }
};

// list.forEach((item,index)=>{
//     item.style.cssText = `
//         transition-delay:${(index + 1) * 0.1}s;
//     `;
    
//     console.log((index + 1) * 0.1);
// })

drawBtn.onclick = (e)=>{
    list.forEach((item,index)=>{
        item.style.cssText = `
            transition-delay:${(index + 1) / list.length * 1}s;
        `;
    })
    e.preventDefault();
    list.forEach((item)=>{
        if(item.classList.contains("chosen") === false){
            item.style.opacity = 0;
        }
    })
}
resetBtn.onclick = ()=>{
    list.forEach((item)=>{
        itemsHolder.removeChild(item);
    })
}
// position:absolute;
// top:50%;
// left:50%;
// transorm:translate(-50%,-50%);