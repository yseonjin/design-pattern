import {Crying} from "../common/Crying";

export class MallardDuckCrying implements Crying {
    cry(): void {
        console.log("MallardDuck 은 꽥꽥");
    }
}