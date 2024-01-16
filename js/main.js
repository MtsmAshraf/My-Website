
let sections = document.querySelectorAll("section");
let animatedChildren = document.querySelectorAll("section .container > *");
let footerChildren = document.querySelectorAll("footer .container > *");
let navIcon = document.querySelector("header i");
let headerNavShow = false;
let scrollSpan = document.querySelector(".scroller span");
let landingLinks = document.querySelectorAll(".landing a")
navIcon.onclick = () => {
    if(headerNavShow === false){
        document.querySelector("header .header-nav").style.cssText = `
            height: 400px;
            width: 300px; 
            right: 10px;
            top: 30px;
            position: fixed;
            opacity:1;
        `;
        navIcon.classList.toggle("fa-bars-staggered");
        navIcon.classList.toggle("fa-xmark");
        if(navIcon.classList.contains("fa-xmark")){
            navIcon.style.color = "var(--sec-color)";
        }
        headerNavShow = true;
    }else{
        document.querySelector("header .header-nav").style.cssText = `
            position: absolute;
            height: 0px; 
            right: -20px;
            top: -20px;
            width: 0px; 
            opacity:0;
            z-index: -1;
        `;
        navIcon.classList.toggle("fa-bars-staggered");
        navIcon.classList.toggle("fa-xmark");
        headerNavShow = false;
    }
}
document.querySelector("header img").style.transition = "all 0.2s 0s linear";
let navLis = document.querySelectorAll("nav li");
let navSpans = document.querySelectorAll("nav li span");
navLis.forEach((li,index)=>{
    li.onclick = ()=>{
        navLis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
    };
    li.onmouseover = ()=>{
        cursor2.style.display= "none";
        navSpans[index].style.cssText = `
            opacity:1;
        `;
    };
    li.onmouseleave = ()=>{
        cursor2.style.display= "block";
        navSpans[index].style.cssText = `
            opacity:0;
        `;
    };
landingLinks.forEach((link) => {
    link.onmouseover = ()=>{
        cursor2.style.display= "none";
    };
    link.onmouseleave = ()=>{
        cursor2.style.display= "block";
    };
})
});
navSpans.forEach((span,index)=>{
    span.onclick = ()=>{
        window.scrollTo(0,sections[index].offsetTop)
    }
})
animatedChildren.forEach((child)=>{
    child.style.cssText = `
        opacity:0;
        transform:translateY(30px);
    `;
})
footerChildren.forEach((child)=>{
    child.style.cssText = `
        opacity:0;
        transform:translateY(30px);
    `;
})
let parallaxSections = document.querySelectorAll(".parallax");
window.onscroll = () => {
    animatedChildren.forEach((child,index)=>{
        if(scrollY >= child.offsetTop + 200){
            child.style.cssText = `
                opacity:1;
                transform:translateY(0px);
            `;
        }
    })
    footerChildren.forEach((child)=>{
        if(scrollY >= child.offsetTop - 500){
            child.style.cssText = `
                opacity:1;
                transform:translateY(0px);
            `;
        }
    })
    if(document.querySelector(".container").offsetWidth > 992){
        if(scrollY >= document.querySelector("section").offsetHeight - 100){
            // document.querySelector("header img").setAttribute("src","images/scroll-Logo.png");
            navIcon.style.color = "var(--sec-color)"; 
            navLis.forEach((li)=>{
                if(li.classList.contains("active")){
                    li.style.borderColor = "var(--sec-color)";
                    li.style.backgroundColor = "transparent";
                }else{
                    li.style.backgroundColor = "var(--sec-color)";
                }
            })
        }else{
            document.querySelector("header img").setAttribute("src","images/Logo-noBg.png");
            navIcon.style.color = "var(--main-color)"; 
            navLis.forEach((li)=>{
                if(li.classList.contains("active")){
                    li.style.borderColor = "var(--main-color)";
                    li.style.backgroundColor = "transparent";
                }else{
                    li.style.backgroundColor = "var(--main-color)";
                }
            })
        }
    }
    if( scrollY >= document.querySelector("footer").offsetTop - 450 ){
        document.querySelector("nav").style.display = "none";
    }else{
        document.querySelector("nav").style.display = "block";
    }
    if(scrollY >= 50 && scrollY < document.querySelector("footer").offsetTop - 100 ){
        document.querySelector("header a").style.cssText = `
            transform:rotateZ(90deg) scale(1.5);
            width: 100px;
    ;`;
    }else if( scrollY >= document.querySelector("footer").offsetTop - 450 ){
        document.querySelector("header a").style.cssText = `
            transform: rotateZ(0deg) scale(1);
            width: 200px;
        ;`;
    }else{
        document.querySelector("header a").style.cssText = `
            transform: rotateZ(0deg) scale(1);
            width: 200px;
        ;`;
    }
    sections.forEach((section,index)=>{
        if(scrollY >= section.offsetTop - 100){
            navLis.forEach((li)=>{
                li.classList.remove("active")
            })
            navLis[index].classList.add("active")
        };
    })
    scrollSpan.style.cssText = `
        width:${scrollY/document.body.offsetHeight * 120}%;
    `;
    parallaxSections.forEach((section)=>{
        let offset = window.scrollY;
        section.style.backgroundPositionY = -1 * offset * 0.4 - section.offsetTop + "px";
    })
    
}
let homeChildren = document.querySelectorAll("section:first-of-type .container > *");
window.onload = ()=>{
    homeChildren.forEach((child)=>{
        child.style.cssText = `
            opacity:1;
            transform:translateY(0px);
        `;
    })

    let content = description.textContent.trim();
    let typeEffect = setTimeout(() => {
        let j = content.length;
        let reverse = setInterval(()=>{
        description.textContent = content.slice(0,j); 
        if(j === 0){clearInterval (reverse)}
        j--;
        },2000/content.length)
        clearInterval (typeEffect);
    }, 1000);
}
// let parallaxedSection = document.querySelector(".parallax");
// window.addEventListener("scroll" , function () {
//     let offset = window.scrollY;
//     parallaxedSection.style.backgroundPositionY = offset * 0.7 + "px";
// })
let myJob = true;
let description = document.querySelector(".landing .text h2");
  // span.style.cssText = `
  //    animation:type 0.4s 2s steps(${span.textContent.length}) infinite alternate;
  // 

setInterval(() => {
    if(myJob === false){
        description.textContent = "Moatasim Ashraf";
        myJob = true;
    }else{
        description.textContent = "Frontend Developer.";
        myJob = false;
    }
    let content = description.textContent.trim();
    description.textContent = "";
    let i = 0;
    let typeEffect = setInterval(()=>{
    description.textContent = content.slice(0,i); 
    i++;
    if(i === content.length ){
        setTimeout(() => {
            let j = content.length;
            let reverse = setInterval(()=>{
            description.textContent = content.slice(0,j); 
            if(j === 0){clearInterval (reverse)}
            j--;
            },2000/content.length)
            clearInterval (typeEffect);
        }, 2000);
    }
    }
    ,2000/content.length)
}, 6000);

let workIcon = document.querySelector(".other-work > i");
let workBtn = document.querySelector(".skills button");
workIcon.onclick = ()=>{
        document.querySelector(".other-work").style.cssText = `
            height: 0px;
            padding: 0px;
            box-shadow: none;
            border:none;
        `;
        document.querySelector(".skills .other-work .other-work-links").style.cssText = `
            transition: all 0.5s 0s ease-out;
            transform: translateY(50px);
            opacity: 0;
        `;
}
workBtn.onclick = ()=>{
    document.querySelector(".other-work").style.cssText = `
        height: 90vh !important;
        padding: 40px;
        padding-top: 70px !important;
        border: 2px solid var(--main-color);
        border-right: none;
        border-left: none;
        box-shadow: 2px 2px 20px 5px var(--main-color);
    `;
    document.querySelector(".skills .other-work .other-work-links").style.cssText = `
        transition: all 0.5s 0.3s ease-out;
        transform: translateY(0px);
        opacity: 1;
    `;
    apps.style.cssText = `
        height: 0px;
        padding: 0px;
        box-shadow: none;
        border:none;
    `;
    appsLinks.style.cssText = `
        transform: translateY(50px);
        opacity: 0;
    `;
};
let gameBtn = document.querySelector(".game");
let apps = document.querySelector(".apps");
let appsLinks = document.querySelector(".apps .apps-links");
let appsClose = document.querySelector(".apps i");
gameBtn.onclick = ()=>{
    apps.style.cssText = `
        height: 90vh;
        padding: 50px;
        border: 2px solid var(--sec-color);
        border-right: none;
        border-left: none;
        box-shadow: 2px 2px 20px 5px var(--sec-color);
    `;
    appsLinks.style.cssText = `
        transform: translateY(0px);
        opacity: 1;
    `;
    document.querySelector(".other-work").style.cssText = `
        height: 0px;
        padding: 0px;
        box-shadow: none;
        border:none;
    `;
    document.querySelector(".skills .other-work .other-work-links").style.cssText = `
        transition: all 0.5s 0s ease-out;
        transform: translateY(50px);
        opacity: 0;
    `;
    // window.open("../game test/Game2test.html");
}
appsClose.onclick = ()=>{
    apps.style.cssText = `
        height: 0px;
        padding: 0px;
        border:none;
        box-shadow: none;
    `;
    appsLinks.style.cssText = `
        transform: translateY(50px);
        opacity: 0;
    `;
}
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",(event)=>{
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor2.style.left = `${event.clientX}px`;
    cursor2.style.top = `${event.clientY}px`;
})
let loader = document.querySelector(".loader")
window.addEventListener("load",()=>{
    setTimeout(() => {
        loader.classList.add("loader-hidden");
    }, 1000);
})

// let mouseClickAudio = new Audio();
// mouseClickAudio.src = "../images/audio/Mouse-Click.mp3";
// document.querySelector("header").onclick = () => {
//     mouseClickAudio.currentTime = 2 ;
//     mouseClickAudio.play();
//     console.log("sound")
// }
 

// TESTIMONIALS
let people = document.querySelectorAll(".testimonials .person");
let shuffleLis = document.querySelectorAll(".testimonials ul li");

let shuffleIndex = 1;
shuffleLis.forEach((li,index)=>{
    li.onclick = ()=>{
        shuffleIndex = index;
        shuffleLis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
        people.forEach((person)=>{
            people.forEach((person)=>{
                person.classList.remove("active");
            })
            people[index].classList.add("active");
        })
    }
})
setInterval(() => {
    shuffleLis[shuffleIndex].click();
    if(shuffleIndex === (shuffleLis.length - 1)){
        shuffleIndex = 0;
    }
    else{
        shuffleIndex++;
    }
}, 3000);


var formBtn = document.querySelector(".contact form button");
formBtn.addEventListener("click",function(e){
    e.preventDefault();
    var name = document.querySelector(".contact form #name").value;
    var userEmail = document.querySelector(".contact form #mail").value;
    var message = document.querySelector(".contact form textarea").value;
    var body = `name: ` +name +`<br/> email: ` + userEmail + `<br/> message: ` + message;
    // Email.send({
    //     // Host : "smtp.gmail.com",
    //     Host :"smtp.elasticemail.com",
    //     Username : "moatasimwebsite@gmail.com",
    //     Password : "xuscorijnhwomshp",
    //     // Password : "988CCA74DC68497CC7F17927A78082D58E41",
    //     To : 'moatasimwebsite@gmail.com',
    //     From : userEmail,
    //     Subject : "Subject",
    //     Body : body
    // }).then(
    //   message => alert(message)
    // );
    Email.send({
        SecureToken : "635a8c39-6159-4641-a7ab-2906a965ebc2",
        To : 'mo32000a@gmail.com',
        From : "moatasimwebsite@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );
})

// function setup(){
//     createCanvas(innerWidth,innerHeight);
//     noStroke()
// }
// function draw(){
//     background("black");
// }