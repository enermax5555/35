import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
	this._beat = new Beat();
	this._create();
	
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
	if (count == 6 ) {
		count = 0;
	}
	this._beat.on(Beat.events.BIT, (bit) => {
		this.emit(Beat.events.BIT);
    const message = document.createElement("div");
    message.classList.add("message");
	
	for (let i = 0; i < 1; i++) {
    message.innerText = lyrics[count];

    document.querySelector(".main").appendChild(message);
	count++;
	}
	})
  }
_create() {

}
}