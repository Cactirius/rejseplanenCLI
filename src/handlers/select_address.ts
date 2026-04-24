import start from "./start.ts";
import type Handler from "../interfaces/ihandle.ts";
import { searchAddresses } from "../repository/search_addresses.ts";
import RejseState from "../classes/RejseState.ts";
import type Address from "../classes/Address.ts";
import type Setting from "../interfaces/Setting.ts";
import HandleHandler from "../classes/HandleHandler.ts";
import search from "./search_addresses.ts";
const select_address: Handler<Address> = {
    logs(state: RejseState, addresses: Address[]) {
        const addrs = addresses;
        if (addrs) {
            console.log("Select an address:");
            var i = 0;
            for (const option of addrs) {
                console.log(++i + ": " + option.getName());
            }
        }
    },
    handler(state: RejseState, query: string, setting: Setting, addresses: Address[]) {
        var yea = "from"
        var fromto = (addr: Address | undefined) => state.setFrom(addr)
        var name = ""
        if (setting.option === 1) {
            fromto = (addr: Address | undefined) => state.setTo(addr)
            yea = "to"
        }
        fromto(addresses[parseInt(query) - 1]);
        name = setting.option === 1 ? state.getTo()?.getName() : state.getFrom()?.getName()
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
