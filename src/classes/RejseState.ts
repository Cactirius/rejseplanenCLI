import type iAddress from "../interfaces/iAddress";

export default class RejseState {
    #from?: iAddress
    #to?: iAddress
    setFrom(addr?: iAddress) {
        this.#from = addr;
    }
    setTo(addr?: iAddress) {
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