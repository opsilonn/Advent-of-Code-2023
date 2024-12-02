import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise00Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Prends un jeu de données, et calcule la différence entre les valeurs les plus hautes / basses
     * @param data Jeu de données à traiter
     * @returns Le différentiel entre la valeur la plus haute et la valeur la plus basse
     */
    public resolve(data: string[]): number {
        const numbers: number[] = data.map((n: string) => Number.parseInt(n, this.BASE_10));
        const min: number = Math.min(...numbers);
        const max: number = Math.max(...numbers);
        return max - min;
    }

    /**
     * Prends un jeu de données, et calcule la moitié de la différence entre les valeurs les plus hautes / basses
     * @param data Jeu de données à traiter
     * @returns La moitié du différentiel entre la valeur la plus haute et la valeur la plus basse
     */
    public resolve2(data: string[]): number {
        return this.resolve(data) / 2;
    }
}
