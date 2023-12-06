import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise01Strategy implements ExerciseStrategy {

    /** Méthode temporaire */
    public resolve(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }
}
