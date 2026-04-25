import HandleHandler from "../classes/HandleHandler.ts";
import type RejseState from "../classes/RejseState.ts";
import type Handler from "../interfaces/ihandle.ts";
import { searchAddresses } from "../repository/search_addresses.ts";
import select_address from "./select_address.ts";
const search: Handler<undefined> = {
    logs(_, __, setting){
        var ft = "from"
        if (setting?.option === 1) {
            ft = "to"
        }
        console.log("Search " + ft);
    },
    async handler(state: RejseState, query: string, setting) {
        var a = await searchAddresses(query);
        var b = new HandleHandler(state, select_address);
        b.setSetting(setting)
        b.setData(a)
        return b;
    }
}
export default search
