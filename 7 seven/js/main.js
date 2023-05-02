let rulesBtn = document.querySelector(".rules-btn");
let rules = document.querySelector(".rules");
let rulesPopUp = document.querySelector(".rules .pop-up");
let rulesShown = false;
let rulesClose = document.querySelector(".rules .close");
let choices = document.querySelectorAll(".choose .img");
let chooseP = document.querySelector(".choose p");
let mainPage = document.querySelector(".choose");
let secondPage = document.querySelector(".you-picked");
let againBtn = document.querySelector(".you-picked > span");
let youPickedP = document.querySelector(".you-picked > p");
let result = document.querySelector(".result");
let score = document.querySelector(".score span");
let computerImgDiv = document.querySelector(".house .img");
let computerImg = document.querySelector(".house .img img");
let house = document.querySelector(".house");
let yourImgDiv = document.querySelector(".you .img");
let yourImg = document.querySelector(".you .img img");
let finalScore = 0;
let choicesList = [];

rulesBtn.onclick = () => {
  rules.style.cssText = "transform:scale(1)";
  rulesPopUp.style.cssText = "transform:scale(1)";
};
rulesClose.onclick = () => {
  rules.style.cssText = "transform:scale(0)";
  rulesPopUp.style.cssText = "transform:scale(0)";
};

choices.forEach((choice) => {
  choicesList.push(choice.id);
  choice.onclick = () => {
    let myPick = choice.id;
    mainPage.style.display = "none";
    secondPage.style.display = "flex";
    let random = Math.floor(3 * Math.random());
    let computerPick = choicesList[random];
    let check = false;
    console.log(`my `, myPick);
    console.log(`computer `, computerPick);
    if (myPick === computerPick) {
      console.log("TIE");
      check = "undefined";
    } else {
      if (myPick === "scissors") {
        if (computerPick === "paper") {
          console.log("winner");
          check = true;
        } else {
          console.log("loser");
          check = false;
        }
      } else if (myPick === "paper") {
        if (computerPick === "rock") {
          console.log("winner");
          check = true;
        } else {
          console.log("loser");
          check = false;
        }
      } else if (myPick === "rock") {
        if (computerPick === "scissors") {
          console.log("winner");
          check = true;
        } else {
          console.log("loser");
          check = false;
        }
      }
    }

    yourImgDiv.classList.add(`${myPick}`);
    yourImg.setAttribute("src", `images/icon-${myPick}.svg`);
    computerImgDiv.classList.add(`${computerPick}`);
    computerImg.setAttribute("src", `images/icon-${computerPick}.svg`);
    setTimeout(() => {
      if (check === true) {
        result.innerHTML = "YOU WIN!";
        document.documentElement.style.setProperty(
          "--result-bg",
          "rgb(6, 190, 0)"
        );
        score.textContent++;
      } else if (check === false) {
        result.innerHTML = "YOU LOSE!";
        document.documentElement.style.setProperty(
          "--result-bg",
          "rgb(226, 12, 12)"
        );
        score.textContent--;
      } else if (check === "undefined") {
        result.innerHTML = "DRAW!";
        document.documentElement.style.setProperty(
          "--result-bg",
          "rgb(135, 135, 135)"
        );
      }

      computerImgDiv.style.cssText = `
                transform: scale(1) translate(-50%,-100%);
            `;
      youPickedP.style.color = "white";
      youPickedP.style.opacity = "1";
    }, 1000);
  };
  choice.onmouseover = () => {
    chooseP.innerHTML = choice.id.toUpperCase();
  };
  choice.onmouseleave = () => {
    chooseP.innerHTML = "PICK ONE!";
  };
});
againBtn.onclick = () => {
  mainPage.style.display = "block";
  secondPage.style.display = "none";
  computerImgDiv.style.cssText = `
        transform: scale(0) translate(-50%,-100%);
    `;
  computerImgDiv.classList.remove(`${computerImgDiv.classList[2]}`);
  youPickedP.style.color = "var(--result-bg)";
  youPickedP.style.opacity = "0";
  yourImgDiv.classList.remove(`${yourImgDiv.classList[2]}`);
};
console.log(choicesList);
