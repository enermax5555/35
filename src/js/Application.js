import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor(beat) {
    super(beat);
	this._beat = new Beat()
	
	
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;
	
	this._beat.on(Beat.events.BIT, (bit) => {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = lyrics[bit];

    document.querySelector(".main").appendChild(message);
	})
    this.emit(Application.events.READY);
	this.emit(Beat.events.BIT);
  }
}
