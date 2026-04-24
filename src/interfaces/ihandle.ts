import type HandleHandler from "../classes/HandleHandler";
import type RejseState from "../classes/RejseState"
import type Setting from "./Setting";

export default interface IHandler<T> {
    logs(arg0: RejseState, arg1?: T[], arg2? : Setting): void,
    handler(arg0: RejseState, query: string, setting: Setting, data?: T[]): HandleHandler<any> | undefined | Promise<HandleHandler<any>> | Promise<undefined>,
    updater?: (arg0: RejseState) => void,
}