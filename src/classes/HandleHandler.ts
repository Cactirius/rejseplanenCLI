import type IHandler from "../interfaces/ihandle";
import { SettingNone } from "../interfaces/Setting";
import type Setting from "../interfaces/Setting";
import type RejseState from "./RejseState";

export default class HandleHandler<T> {
    #handler: IHandler<T>;
    #data: T[] | undefined;
    #state: RejseState;
    #setting: Setting | undefined
    logs() {
        this.#handler.logs(this.#state, this.#data, this.#setting);
    }
    handle(query: string) {
        return this.#handler.handler(this.#state, query, this.#setting ?? SettingNone, this.#data)
    }
    setSetting(setting: Setting) {
        this.#setting = setting;
    }
    setData(data: T[]) {
        this.#data = data;
    }
    constructor(state: RejseState, handler: IHandler<T>) {
        this.#handler = handler;
        this.#state = state;
    }
}