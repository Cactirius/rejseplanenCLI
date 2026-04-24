import Address from "../classes/Address.ts";
import type { SelectAddress } from "../interfaces/SelectAddress.ts";
import FetchBuilder from "../util/fetchwrapper.ts";

export async function searchAddresses(query: string) {
    const request = new FetchBuilder().addPath("location.name")
    .addQuery("input",query)
    const result = await request.fetchData<SelectAddress>();
    var c = result.stopLocationOrCoordLocation.map((e)=>{return new Address(e)});
    return c;
}