import EventEmitter from "eventemitter3";
export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor(beat) {
	  super();
	  this.beat = beat
    setInterval(() => {
      console.log("bit");
	  this.emit(Beat.events.BIT);
	  }, 600);
  }
}
