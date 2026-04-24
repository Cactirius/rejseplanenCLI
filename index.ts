import dotenv from "dotenv"
dotenv.config()
import readline from "readline"
import start from "./src/handlers/start.ts"
import type Handler from "./src/interfaces/ihandle.ts";
import RejseState from "./src/classes/RejseState.ts";
import HandleHandler from "./src/classes/HandleHandler.ts";
import type Address from "./src/classes/Address.ts";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
})
let state: RejseState = new RejseState();
let nextHandler: HandleHandler<any> | undefined = new HandleHandler(state, start);
rl.on('line', async (line: string) => {
    if (line === "" || line === "\n") {
        console.log("Input was not accepted!");
        
        nextHandler?.logs();
        return;
    }
    nextHandler = await nextHandler?.handle(line);
    if (nextHandler == undefined) {
        rl.close();
        return;
    }
    nextHandler?.logs();
})
console.log("Hello via Bun!");
nextHandler.logs();
