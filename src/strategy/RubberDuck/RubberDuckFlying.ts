import {Flying} from "../common/Flying";

export class RubberDuckFlying implements Flying {
    fly(): void {
        console.log("RubberDuck 은 물에서 난다.");
    }
}