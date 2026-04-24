import HandleHandler from "../classes/HandleHandler.ts";
import type RejseState from "../classes/RejseState.ts";
import type Handler from "../interfaces/ihandle.ts";
import search from "./search_addresses.ts";
const start: Handler<any> = {
    logs() {
        console.log("1: Start ny rejse");
        console.log("X: Udgang");
    },
    handler(state:RejseState ,query: string, data) {
        switch (query) {
        case "1":
            return new HandleHandler(state, search);
        case "x":
            break;
        default:
            break;
        }
    }
}
export default start