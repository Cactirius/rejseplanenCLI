import type iAddress from "./iAddress"

export interface SelectAddress {
    stopLocationOrCoordLocation: {
        StopLocation?: any,
        CoordLocation?: any
    }[]
}