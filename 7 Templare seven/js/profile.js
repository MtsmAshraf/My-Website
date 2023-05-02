// start index js
let navLis = document.querySelectorAll("aside nav li");
let navLinks = document.querySelectorAll("aside nav a")
navLis.forEach((li,index)=>{
    li.onclick = ()=>{
        navLis.forEach((li)=>{
            li.classList.remove("active");
        })
        li.classList.add("active");
        navLinks[index].click();
    }
})
let nightBtn = document.querySelector("body > button");
let nightBtnIcon = document.querySelector("body > button i");
let night = false;
nightBtn.onclick = function(){
    if(night === false){
        nightBtn.style.cssText = `
            color:var(--night-color);
            background-color:white;
            `;
            nightBtnIcon.classList.add("fa-sun");
            nightBtnIcon.classList.remove("fa-moon");
            // document.querySelector("main .content").style.cssText = "background-color:var(--night-color); color:white;";   
            document.querySelector(".page").style.cssText = "background-color:var(--night-color); color:white;";   
            // document.querySelector("h2").style.cssText = "color:white;";   
            document.querySelectorAll(".box").forEach((box)=>{
                box.style.cssText = "background-color:var(--night-color); color:white;";   
            })
            document.querySelectorAll(".box").forEach((box)=>{
                box.style.cssText = "background-color:var(--night-color); color:white;";   
            })
            document.querySelectorAll("section").forEach((section)=>{
                section.style.cssText = "background-color:var(--night-color); color:white;";   
            })
            document.querySelector(".header").style.backgroundColor = "var(--night-color)";
            document.querySelectorAll(".header i")[1].style.color = "white";
            document.querySelector("aside").style.backgroundColor = "var(--night-color)";
            document.querySelector("aside").style.boxShadow = "none";
            document.querySelector("aside").style.borderRightColor = "white";
            document.querySelector("aside").style.borderRightWidth = "1px";
            document.querySelector("aside").style.borderRightStyle = "solid";
            document.querySelectorAll("aside li a").forEach((a)=>{
                a.style.cssText = "color:white;";   
            }) 
            document.querySelector("aside li.active a").style.color = "var(--blue-color)";
            document.querySelectorAll("span").forEach((span)=>{
                span.style.cssText = "color:white;";   
            })
            document.querySelectorAll("input").forEach((input)=>{
            input.style.cssText = "color:white;";   
        })
        document.documentElement.style.setProperty('--imp-color', '#28518b');
        document.documentElement.style.setProperty('--grey-color', 'white');
        night = true;
        window.localStorage.setItem("nightMode",night);
    }else{
        nightBtn.style.cssText = `
        color:white;
            background-color:var(--night-color);
        `;
        // document.querySelector("main .content").style.cssText = "background-color:var(--back-color); color:white;";   
        document.querySelector(".page").style.cssText = "background-color:var(--imp-color); color:black;";   
        // document.querySelector("h2").style.cssText = "color:black;";   
        document.querySelectorAll(".box").forEach((box)=>{
            box.style.cssText = "background-color:var(--boxback-color); color:black;";   
        })
        document.querySelectorAll(".box").forEach((box)=>{
            box.style.cssText = "background-color:var(--boxback-color); color:black;";   
        })
        document.querySelectorAll("section").forEach((section)=>{
            section.style.cssText = "background-color:var(--boxback-color); color:black;";   
        })
        document.querySelector(".header").style.backgroundColor = "white";
        document.querySelectorAll(".header i")[1].style.color = "black";
        document.querySelector("aside").style.backgroundColor = "white";
        document.querySelectorAll("aside li a").forEach((a)=>{
            a.style.cssText = "color:black;";   
        })
        document.querySelector("aside li.active a").style.color = "var(--blue-color)";
        document.querySelectorAll("span").forEach((span)=>{
            span.style.cssText = "color:var(--grey-color);";   
        }) 
        document.querySelectorAll("input").forEach((input)=>{
            input.style.cssText = "color:#888;";   
        })
        document.documentElement.style.setProperty('--imp-color', '#eee');
        document.documentElement.style.setProperty('--grey-color', '#888');
        nightBtnIcon.classList.add("fa-moon");
        nightBtnIcon.classList.remove("fa-sun");
        night = false;
        window.localStorage.setItem("nightMode",night);
    }
}
window.onload = ()=>{
    if(window.localStorage.getItem("nightMode")){
        console.log("found")
        console.log(window.localStorage.getItem("nightMode"))
            if(window.localStorage.getItem("nightMode") === "true"){
            console.log("night");
            nightBtn.style.cssText = `
                color:var(--night-color);
                background-color:white;
            `;
            nightBtnIcon.classList.add("fa-sun");
            nightBtnIcon.classList.remove("fa-moon");
            // document.querySelector("main .content").style.cssText = "background-color:var(--night-color); color:white;";   
            document.querySelector(".page").style.cssText = "background-color:var(--night-color); color:white;";   
            // document.querySelector("h2").style.cssText = "color:white;";   
            document.querySelectorAll(".box").forEach((box)=>{
                box.style.cssText = "background-color:var(--night-color); color:white;";   
            })
            document.querySelectorAll("section").forEach((section)=>{
                section.style.cssText = "background-color:var(--night-color); color:white;";   
            })
            document.querySelector(".header").style.backgroundColor = "var(--night-color)";
            document.querySelectorAll(".header i")[1].style.color = "white";
            document.querySelector("aside").style.backgroundColor = "var(--night-color)";
            document.querySelector("aside").style.boxShadow = "none";
            document.querySelector("aside").style.borderRightColor = "white";
            document.querySelector("aside").style.borderRightWidth = "1px";
            document.querySelector("aside").style.borderRightStyle = "solid";
            document.querySelectorAll("aside li a").forEach((a)=>{
                a.style.cssText = "color:white;";   
            }) 
            document.querySelector("aside li.active a").style.color = "var(--blue-color)";
            document.querySelectorAll("span").forEach((span)=>{
                span.style.cssText = "color:white;";   
            })
            document.querySelectorAll("input").forEach((input)=>{
                input.style.cssText = "color:white;";   
            })
            document.documentElement.style.setProperty('--imp-color', '#28518b');
            document.documentElement.style.setProperty('--grey-color', 'white');
        }else{
            nightBtn.style.cssText = `
                color:white;
                background-color:var(--night-color);
            `;
            // document.querySelector("main .content").style.cssText = "background-color:var(--back-color); color:white;";   
            document.querySelector(".page").style.cssText = "background-color:var(--imp-color); color:black;";   
            // document.querySelector("h2").style.cssText = "color:black;";   
            document.querySelectorAll(".box").forEach((box)=>{
                box.style.cssText = "background-color:var(--boxback-color); color:black;";   
            }) 
            document.querySelectorAll("section").forEach((section)=>{
                section.style.cssText = "background-color:var(--boxback-color); color:black;";   
            })
            
            document.querySelector(".header").style.backgroundColor = "white";
            document.querySelectorAll(".header i")[1].style.color = "black";
            document.querySelector("aside").style.backgroundColor = "white";
            document.querySelectorAll("aside li a").forEach((a)=>{
                a.style.cssText = "color:black;";   
            })
            document.querySelector("aside li.active a").style.color = "var(--blue-color)";
            document.querySelectorAll("span").forEach((span)=>{
                span.style.cssText = "color:var(--grey-color);";   
            }) 
            document.querySelectorAll("input").forEach((input)=>{
                input.style.cssText = "color:#888;";   
            })
            document.documentElement.style.setProperty('--imp-color', '#eee');
            document.documentElement.style.setProperty('--grey-color', '#888');
            nightBtnIcon.classList.add("fa-moon");
            nightBtnIcon.classList.remove("fa-sun");
            night = false;
        }
    }
}
// end index js
let switchSliders = document.querySelectorAll(".switch");
let switchIcons = document.querySelectorAll(".switch i");
let control = true;
switchSliders.forEach((switchSlider,index)=>{
    switchSlider.onclick = ()=>{
        if(control === true){
            switchSlider.style.backgroundColor = 'var(--grey-color)';
            switchIcons[index].style.cssText = `
                color:var(--grey-color);
                right:calc(100% - 20px);
            `;
            switchIcons[index].classList.add("fa-xmark");
            switchIcons[index].classList.remove("fa-check");
            control = false;
        }else{
            switchSlider.style.backgroundColor = 'var(--blue-color)';
            switchIcons[index].style.cssText = `
                color:var(--blue-color);
                right:5px;
            `;
            switchIcons[index].classList.remove("fa-xmark");
            switchIcons[index].classList.add("fa-check");
            control = true;
        }
    }
})