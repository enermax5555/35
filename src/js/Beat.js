import EventEmitter from "eventemitter3";
export default class Beat{
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
  }
}
