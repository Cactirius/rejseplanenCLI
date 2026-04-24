export default class Address {
    #address;
    getName() {
        return this.#address.name;
    }
    constructor(address: any) {
        if (address.StopLocation) {
            this.#address = address.StopLocation;
        }
        if (address.CoordLocation) {
            this.#address = address.CoordLocation;
        }
    }
}