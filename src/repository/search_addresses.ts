import type iAddress from "../interfaces/iAddress.ts";
import type { SelectAddress } from "../interfaces/SelectAddress.ts";
import FetchBuilder from "../util/fetchwrapper.ts";

export async function searchAddresses(query: string): Promise<iAddress[]> {
    const request = new FetchBuilder().addPath("location.name")
    .addQuery("input",query)
    const result = await request.fetchData<SelectAddress>();
    var c = result.stopLocationOrCoordLocation.map((e)=>{
        if (e.StopLocation) {
            return e.StopLocation! as iAddress
        } else if (e.CoordLocation) {
            return e.CoordLocation! as iAddress
        }
        throw new Error("This address is neither a CoordLocation nor a StopLocation");
    });
    return c;
}