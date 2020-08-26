import renderBoard from "../board/board.js";
import renderBox from "../boxFigure/box.js";
import Store from "../store/store.js";
import initEvents from "../events/index.js";
import renderBack from "../board/back.js"

const app = (root) => {
  const store=new Store();
  const render = () => {
    const data=store.getStore();
    root.innerHTML = `
      ${renderBoard(data.board,data.selected)}
      ${renderBox(data.figure)}
      ${renderBack()}
    `;
    initEvents(store,render);
  };

  render();
};

export default app;