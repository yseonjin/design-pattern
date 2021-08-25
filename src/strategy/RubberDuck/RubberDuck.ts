import {Duck} from "../common/Duck";
import {Flying} from "../common/Flying";
import {RubberDuckFlying} from "./RubberDuckFlying";
import {Crying} from "../common/Crying";
import {RubberDuckCrying} from "./RubberDuckCrying";

export class RubberDuck extends Duck {
    constructor(private flying: Flying = new RubberDuckFlying(), private crying: Crying = new RubberDuckCrying()) {
        super();
    }

    duckStart = (): void => {
        this.flying.fly();
        this.crying.cry();
    };

}