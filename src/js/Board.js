// import Listen from "./Listen";

export default class Board {
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
    arrcells.forEach((element) => (element.className = "cell"));
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
