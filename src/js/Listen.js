import Board from "./Board";

export default class Listen {
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
