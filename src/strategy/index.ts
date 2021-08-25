import {Duck} from "./common/Duck";
import {MallardDuck} from "./MallardDuck/MallardDuck";
import {RedHeadDuck} from "./RedHeadDuck/RedHeadDuck";
import {RubberDuck} from "./RubberDuck/RubberDuck";

const ducks: Duck[] = [new MallardDuck(), new RedHeadDuck(), new RubberDuck()];

ducks.forEach(duck => duck.duckStart());