import {Flying} from "../common/Flying";

export class RedHeadDuckFlying implements Flying {
    fly(): void {
        console.log("RedheadDuck 은 날지 못한다.");
    }
}