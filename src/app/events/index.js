import boxEvents from "../events/boxevents.js";
import BoardEvents from "../events/board_events.js";
import backEvents from "./back-event.js";

let initEvents=(store,render)=>{
boxEvents(store,render);
BoardEvents(store,render);
backEvents(store,render);
}
export default initEvents;