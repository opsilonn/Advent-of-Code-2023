import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise01Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Prends un jeu de données, fait des nombres composés des premiers et derniers chiffres contenu de chaque phrase, et en calcule la somme
     * @param data Jeu de données à traiter
     * @returns La somme des nombres composés des premiers et derniers chiffres de chaque ligne
     */
    public resolve(data: string[]): number {
        return data
            .map((str: string) => this.getFirstAndLastFromString(str))
            .reduce((sum: number, current: number) => sum + current, 0);
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }

    /**
     * Prends une phrase, en extrait le premier et dernier chiffre contenu dedans, et en fait un nombre
     * @param str Phrase à traiter
     * @returns Un nombre composé du premier et dernier chiffre contenu dans la phrase
     */
    private getFirstAndLastFromString(str: string): number {
        let first = -1;
        let last = -1;

        for (let i = 0; i < str.length; i++) {
            const currentChar: number = parseInt(str[i], this.BASE_10);
            const isNumber: boolean = !isNaN(currentChar);
            if (isNumber) {
                if (first === -1) {
                    first = currentChar;
                }
                last = currentChar;
            }
        }

        return first * 10 + last;
    }
}
