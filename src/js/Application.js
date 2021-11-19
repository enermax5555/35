import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
	constructor(beat, create)
	this._beat = new Beat()
	this._create = new Create()
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor(beat, create) {
    super(beat, create);
	this._beat = new Beat()
	this._create = new Create()
    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = "Ah";

    document.querySelector(".main").appendChild(message);
	this.emit(Beat.events.BIT)
    this.emit(Application.events.READY);
  }
}
