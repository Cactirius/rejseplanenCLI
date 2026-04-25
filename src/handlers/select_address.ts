import start from "./start.ts";
import type Handler from "../interfaces/ihandle.ts";
import { searchAddresses } from "../repository/search_addresses.ts";
import RejseState from "../classes/RejseState.ts";
import type Setting from "../interfaces/Setting.ts";
import HandleHandler from "../classes/HandleHandler.ts";
import search from "./search_addresses.ts";
import type iAddress from "../interfaces/iAddress.ts";
const select_address: Handler<iAddress> = {
    logs(state: RejseState, addresses: iAddress[]) {
        if (addresses) {
            console.log("Select an address:");
            var i = 0;
            for (const option of addresses) {
                console.log(++i + ": " + option.name);
            }
        }
    },
    handler(state: RejseState, query: string, setting: Setting, addresses: iAddress[]) {
        var yea = "from"
        var fromto = (addr: iAddress | undefined) => state.setFrom(addr)
        var name = ""
        if (setting.option === 1) {
            fromto = (addr: iAddress | undefined) => state.setTo(addr)
            yea = "to"
        }
        fromto(addresses[parseInt(query) - 1]);
        name = setting.option === 1 ? state.getTo()!.name : state.getFrom()!.name
        console.log("You selected this adress as " + yea + ": " + name);
        if (state.getTo() === undefined) {
            const a = new HandleHandler(state, search)
            a.setSetting({ option: 1, action: "none" })
            return a;
        }
        return undefined;
    }
}
export default select_address
