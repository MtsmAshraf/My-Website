let tasks = [];
let doneSfx = document.querySelector(".done-sfx");
let wellDoneMsg = document.querySelector(".well-done-msg")
let wellDoneMsgCover = document.querySelector(".well-done-msg .cover")
window.onload = () => {
  document.querySelector(".add input").focus();
  if (window.localStorage.getItem("tasks")) {
    for (
        index = 0;
        index < JSON.parse(window.localStorage.getItem("tasks")).length;
        index++
    ) {
        let listItem = document.createElement("div");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let iconsDiv = document.createElement("div");
        let i = document.createElement("i");
        let deleteBtn = document.createElement("button");
        let deleteI = document.createElement("i");
        tasks.push(JSON.parse(window.localStorage.getItem("tasks"))[index]);
        span.textContent = JSON.parse(window.localStorage.getItem("tasks"))[
        index
        ];
        iconsDiv.classList.add("icons");
        i.classList.add("fa-regular", "fa-check");
        deleteI.classList.add("fa-solid", "fa-trash" , "delete-icon");
        iconsDiv.append(i);
        li.append(span, iconsDiv);
        deleteBtn.append(deleteI);
        listItem.classList.add("list-item");
        listItem.appendChild(li);
        deleteBtn.addEventListener("click",()=>{
            deleteBtn.parentElement.parentElement.removeChild(listItem);
            tasks = tasks.filter((item)=>{
                return item !== li.firstElementChild.textContent;
            })
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
        })
        listItem.appendChild(deleteBtn);
        li.addEventListener("click", () => {
            console.log("li clicked")
            if (li.classList.contains("done") === false) {
                doneSfx.play();
                wellDoneMsg.style.cssText = `
                    z-index: 2;
                    height: 170px;
                    width: 170px;
                    padding: 30px;
                    border-bottom: 1px solid var(--main-color);
                    border-top: 1px solid var(--main-color);
                `;
                setTimeout(() => {
                    wellDoneMsgCover.style.cssText = `
                        opacity:0;
                        transform: translateY(100%) rotateZ(120deg);
                    `;
                }, 400);
                setTimeout(() => {
                    wellDoneMsg.style.cssText = `
                        z-index: 2;
                        height: 0px;
                        width: 170px;
                        padding: 0px;
                        border:none;
                    `;
                    wellDoneMsgCover.style.cssText = `
                        transform: translateY(0%) rotateZ(120deg);
                        opacity:1;
                    `;
                }, 1500);
                let cLi = listItem.cloneNode(true);
                listItem.style.display = "none";
                cLi.querySelector("li").classList.add("done");
                cLi.querySelector("button").addEventListener("click",(e)=>{
                    cLi.parentElement.removeChild(cLi);
                })
                document.querySelector(".done ul").append(cLi);
                cLi.querySelector("li").addEventListener("click", () => {
                    cLi.style.display = "none";
                    listItem.style.display = "flex";
                    listItem.querySelector("li").classList.remove("done");
                    tasks.push(listItem.firstElementChild.textContent);
                    window.localStorage.setItem("tasks", JSON.stringify(tasks));
                });
            }   
            li.classList.toggle("done");
            tasks = tasks.filter((item) => {
                return item !== li.firstElementChild.textContent;
            });
            window.localStorage.setItem("tasks", JSON.stringify(tasks));
            console.log(tasks);
            });
        document.querySelector(".add input").value = "";
        document.querySelector(".add input").focus();
        document.querySelector(".to-do ul").append(listItem);
    }
    // console.log(JSON.parse(window.localStorage.getItem("tasks")))
  }
};
let addButton = document.querySelector(".add button");
let j = 0;
addButton.onclick = (e) => {
    e.preventDefault();
  if (document.querySelector(".add input").value !== "") {
    let listItem = document.createElement("div");
    let li = document.createElement("li");
    let span = document.createElement("span");
    let iconsDiv = document.createElement("div");
    let i = document.createElement("i");
    let deleteBtn = document.createElement("button");
    let deleteI = document.createElement("i");
    span.textContent = document.querySelector(".add input").value;
    iconsDiv.classList.add("icons");
    i.classList.add("fa-regular", "fa-check");
    deleteI.classList.add("fa-solid", "fa-trash" , "delete-icon");
    iconsDiv.append(i);
    li.append(span, iconsDiv);
    deleteBtn.appendChild(deleteI);
    listItem.classList.add("list-item");
    listItem.appendChild(li);
    deleteBtn.addEventListener("click",()=>{
        deleteBtn.parentElement.parentElement.removeChild(listItem);
        tasks = tasks.filter((item)=>{
            return item !== li.firstElementChild.textContent;
        })
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    })
    listItem.appendChild(deleteBtn);
    console.log(listItem)
    tasks.push(span.textContent);
    li.addEventListener("click", (e) => {
        console.log("li clicked")
        if(li.classList.contains("done") === false) {
            doneSfx.play();
            wellDoneMsg.style.cssText = `
                z-index: 2;
                height: 170px;
                width: 170px;
                padding: 30px;
                border-bottom: 1px solid var(--main-color);
                border-top: 1px solid var(--main-color);
            `;
            setTimeout(() => {
                wellDoneMsgCover.style.cssText = `
                        opacity:0;
                        transform: translateY(100%) rotateZ(120deg);
                `;
            }, 400);
            setTimeout(() => {
                wellDoneMsg.style.cssText = `
                    z-index: 2;
                    height: 0px;
                    width: 170px;
                    padding: 0px;
                    border:none;
                `;
                wellDoneMsgCover.style.cssText = `
                    opacity:1;
                    transform: translateY(0%) rotateZ(120deg)
                `;
            }, 1500);
            let cLi = listItem.cloneNode(true);
            listItem.style.display = "none";
            cLi.querySelector("li").classList.add("done");
            cLi.querySelector("button").addEventListener("click",(e)=>{
                cLi.parentElement.removeChild(cLi);
            })
            document.querySelector(".done ul").append(cLi);
            cLi.querySelector("li").addEventListener("click", () => {
                cLi.style.display = "none";
                listItem.style.display = "flex";
                listItem.querySelector("li").classList.remove("done");
                tasks.push(listItem.firstElementChild.textContent);
                window.localStorage.setItem("tasks", JSON.stringify(tasks));
            });
        }
        li.classList.toggle("done");
        tasks = tasks.filter((item) => {
            return item !== li.firstElementChild.textContent;
        });
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    window.localStorage.setItem("tasks", JSON.stringify(tasks));
    document.querySelector(".add input").value = "";
    document.querySelector(".add input").focus();
    document.querySelector(".to-do ul").append(listItem);
  }
};
document.querySelector("#clear").onclick = function () {
  if (window.confirm(" Are You Sure? ALL TASKS WILL BE PERMANENTLY DELETED.")) {
    localStorage.clear();
    for (i = 0; i < tasks.length; i++) {
        tasks.pop();
    }
    document.querySelectorAll(".list-item").forEach((li) => {
        li.style.display = "none";
    });
  }
};
