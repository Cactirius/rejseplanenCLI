import type Address from "./Address";

export default class RejseState {
    #from?: Address
    #to?: Address
    setFrom(addr?: Address) {
        this.#from = addr;
    }
    setTo(addr?: Address) {
        this.#to = addr;
    }
    getFrom() {
        return this.#from;
    }
    getTo() {
        return this.#to;
    }
    constructor() {
        
    }
}