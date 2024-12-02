import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise {

    id: string;
    name: string;
    strategy: ExerciseStrategy | null;

    constructor(
        id: string,
        name: string,
        strategy: ExerciseStrategy | null
    ) {
        this.id = id;
        this.name = name;
        this.strategy = strategy;
    }
}
