import {Duck} from "../common/Duck";
import {Flying} from "../common/Flying";
import {RedHeadDuckFlying} from "./RedHeadDuckFlying";
import {Crying} from "../common/Crying";
import {RedHeadDuckCrying} from "./RedHeadDuckCrying";

export class RedHeadDuck extends Duck {
    constructor(private flying: Flying = new RedHeadDuckFlying(), private crying: Crying = new RedHeadDuckCrying()) {
        super();
    }

    duckStart = (): void => {
        this.flying.fly();
        this.crying.cry();
    };
}