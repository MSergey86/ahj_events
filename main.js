/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Board.js
// import Listen from "./Listen";

class Board {
  checkRandom(number) {
    while (typeof x === "undefined") {
      const randomnumber = Math.floor(Math.random() * 16);
      if (number !== randomnumber) {
        return randomnumber;
      }
    }
  }

  // removegoblin() {
  //   const delgoblin = document.querySelector(".goblin");
  //   if (delgoblin !== null) {
  //     delgoblin.remove();
  //   }
  // }

  newposition(number) {
    const arrcells = document.querySelectorAll(".cell");
    arrcells.forEach(element => element.className = "cell");
    // const cellforposition = arrcells[number];
    // const newdiv = document.createElement("div");
    // newdiv.classList.add("goblin");
    // cellforposition.append(newdiv);
    arrcells[number].className = "cell goblin";
  }
  goblincounter(count, deadcount) {
    let countDead = document.getElementById("dead");
    let countLost = document.getElementById("lost");
    if (deadcount == countDead.textContent) {
      count = count + 1;
      if (count >= 5) {
        alert("Вы проиграли! " + 5 + " гоблинов пропущено");
        count = 0;
        countDead.textContent = 0;
        countLost.textContent = 0;
      }
    } else {
      count = 0;
    }
    // console.log(count);
    return [count, countDead.textContent];
  }
  start() {
    let number = 1;
    let goblincount = 0;
    let countDead = document.getElementById("dead");
    let countDeadNumber = Number(countDead.textContent);
    setInterval(() => {
      number = this.checkRandom(number);
      // this.removegoblin();
      this.newposition(number);
      let arrgoblincount = this.goblincounter(goblincount, countDeadNumber);
      goblincount = arrgoblincount[0];
      countDeadNumber = arrgoblincount[1];
    }, 1500);
  }
}
;// CONCATENATED MODULE: ./src/js/Listen.js

class Listen {
  game() {
    let countDead = document.getElementById("dead");
    let countLost = document.getElementById("lost");
    let arr = document.querySelectorAll(".cell"); // создает массив всех элементов с '.cell'

    const a = arr.length;
    // let res = 1;

    function clicker() {
      for (let i = 0; i < a; i++) {
        arr[i].onclick = () => {
          if (arr[i].className == "cell goblin") {
            countDead.textContent = Number(countDead.textContent) + 1;
            result(countDead.textContent, countLost.textContent);
            arr[i].classList.remove("goblin");
            // const resetCount = new Board();
            // reset(true);
          } else {
            countLost.textContent = Number(countLost.textContent) + 1;
            result(countDead.textContent, countLost.textContent);
          }
        };
      }
      setTimeout(clicker, 1); // ещё раз, через миллисекунду
    }

    clicker();
    function result(dead, lost) {
      if (dead > 4) {
        alert("Вы выиграли! Прибито " + countDead.textContent + " гоблинов");
        countDead.textContent = 0;
        countLost.textContent = 0;
      }
      if (lost > 4) {
        alert("Вы проиграли! " + countLost.textContent + " промахов");
        countDead.textContent = 0;
        countLost.textContent = 0;
      }
    }
    // function reset(a) {
    //   if (a == true) {
    //     res = 0;
    //     return res;
    //   } else {
    //     return true;
    //   }
    // }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const counterGoblin = new Board();
const countGamer = new Listen();
counterGoblin.start();
countGamer.game();
// setTimeout(() => {
//   countGamer.counter();
// }, 1010);
;// CONCATENATED MODULE: ./src/index.js


console.log("Start!");
/******/ })()
;