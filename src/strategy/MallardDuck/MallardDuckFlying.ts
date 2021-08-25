import {Flying} from "../common/Flying";

export class MallardDuckFlying implements Flying {
    fly(): void {
        console.log("MallardDuck 이 날아간다.");
    }
}