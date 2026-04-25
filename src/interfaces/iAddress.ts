export default interface iAddress {
    timezoneOffset: number,
    id: string,
    extId: string,
    name: string,
    lon: number,
    lat: number,
    weight: number,
    products: number,
    minimumChangeDuration: string,
    LocationNotes: {
        LocationNote: {
            value: string,
            key: string,
            type: string,
            txtN: string
        }[]
    },
    productAtStop: {
        icon: {
            res: string,
        },
        name: string,
        internalName: string,
        line: string,
        lineId: string,
        catOut: string,
        catIn: string,
        catCode: string,
        cls: string,
        catOutS: string,
        catOutL: string
    }[],
}