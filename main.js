import {moo} from "./moo.js";
import { say } from "cowsay";


const name = "Anthony"; 
console.log(say({ text: moo(name) }));