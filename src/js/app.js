import Board from "./Board";
import Listen from "./Listen";

const counterGoblin = new Board();
const countGamer = new Listen();

counterGoblin.start();
countGamer.game();
// setTimeout(() => {
//   countGamer.counter();
// }, 1010);
