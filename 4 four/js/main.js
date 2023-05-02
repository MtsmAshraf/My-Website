let headerIcon = document.querySelector(".header ul + img");
let nav = document.querySelector(".header ul");
let navLinks = document.querySelectorAll(".header ul li");
let members = document.querySelectorAll(".crew .member");
let shuffleDots = document.querySelectorAll(".crew .shuffle li");
let techs = document.querySelectorAll(".techs .tech");
let shuffleNums = document.querySelectorAll(".techs .shuffle li");
let navShown = false;

shuffleDots.forEach((dot,index)=>{
    dot.onclick = ()=>{
        shuffleDots.forEach((dot)=>{
            dot.classList.remove("active");
        })
        dot.classList.add("active");
        members.forEach((member)=>{
            member.classList.remove("active");
        })
        members[index].classList.add("active");
    }
})

shuffleNums.forEach((num,index)=>{
    num.onclick = ()=>{
        shuffleNums.forEach((num)=>{
            num.classList.remove("active");
        })
        num.classList.add("active");
        techs.forEach((tech)=>{
            tech.classList.remove("active");
        })
        techs[index].classList.add("active");
    }
})