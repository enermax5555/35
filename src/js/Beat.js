export default class Beat extends EventEmitter {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor(beat) {
	  this.beat = beat
    setInterval(() => {
      console.log("bit");
	  }, 600);
	this.emit(Beat.events.BIT);
  }
}
