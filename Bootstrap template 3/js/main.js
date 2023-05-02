let navLis = document.querySelectorAll("nav li");
let sections = document.querySelectorAll("body > .scroll");
navLis.forEach((li,index)=>{
    li.onclick = ()=>{
        navLis.forEach((li)=>{
            li.classList.remove("active");
        });
        li.classList.add("active");
    }
})

window.onscroll = ()=>{
    sections.forEach((section,index)=>{
        if(scrollY >= section.offsetTop - 400){
            navLis.forEach((li)=>{
                li.classList.remove("active");
            });
            navLis[index].classList.add("active");
        }
    })
}