import dotenv from "dotenv"
dotenv.config()
export default class FetchBuilder {
    #method = "GET"
    #query = "?"
    #header = {}
    #body = {}
    #endpoint
    setMethod(method: string) {
        this.#method = method.toUpperCase();
        return this;
    }
    addQuery(name: string, value: any) {
        this.#query += name + "=" + value + "&";
        return this
    }
    addHeader(header: object) {
        this.#header = header
        return this
    }
    addPath(value: string) {
        this.#endpoint += "/" + value
        return this
    }
    addBody(body: object) {
        this.#body = body
        return this
    }
    constructor(endpoint: string = "https://www.rejseplanen.dk/api") {
        this.#endpoint = endpoint;
        this.addQuery("accessId", process.env.API_KEY)
            .addQuery("format", "json")
    }
    #build(): [string, object] {
        let request: object;
        if (this.#method === "GET") {
            request = {
                method: this.#method,
                header: this.#header
            }
        } else {
            request = {
                method: this.#method,
                header: this.#header,
                body: this.#body
            }
        }
        return [this.#endpoint + this.#query, request]
    }
    async fetchData<T>(): Promise<T> {
        return await fetch(...this.#build())
            .then((v) => v.json() as T)
            .catch((e) => {
                console.error("An error occured when fetching: " + e);
                throw new Error(e);
            })
    }
}