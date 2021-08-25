import {Duck} from "../common/Duck";
import {Flying} from "../common/Flying";
import {Crying} from "../common/Crying";
import {MallardDuckFlying} from "./MallardDuckFlying";
import {MallardDuckCrying} from "./MallardDuckCrying";

export class MallardDuck extends Duck {
    constructor(private flying: Flying = new MallardDuckFlying(), private crying: Crying = new MallardDuckCrying()) {
        super();
    }

    duckStart = (): void => {
        this.flying.fly();
        this.crying.cry();
    };
}
