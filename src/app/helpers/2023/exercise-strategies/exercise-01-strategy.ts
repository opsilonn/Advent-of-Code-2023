import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise01Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly NUMBER_AS_STRING = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    /**
     * Prends un jeu de données, fait des nombres composés des premiers et derniers chiffres contenu de chaque phrase, et en calcule la somme
     * @param data Jeu de données à traiter
     * @returns La somme des nombres composés des premiers et derniers chiffres de chaque ligne
     */
    public resolve(data: string[]): number {
        return data
            .map((str: string) => this.getFirstAndLastFromString(str, false))
            .reduce((sum: number, current: number) => sum + current, 0);
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        return data
            .map((str: string) => this.getFirstAndLastFromString(str, true))
            .reduce((sum: number, current: number) => sum + current, 0);
    }

    /**
     * Prends une phrase, en extrait le premier et dernier chiffre contenu dedans, et en fait un nombre
     * @param str Phrase à traiter
     * @returns Un nombre composé du premier et dernier chiffre contenu dans la phrase
     */
    private getFirstAndLastFromString(str: string, doIncludeNumberAsString: boolean): number {
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

            if (doIncludeNumberAsString) {
                const indexNumberAsString: number = this.NUMBER_AS_STRING.findIndex((numberAsString: string) => str.substring(i, i + numberAsString.length) === numberAsString);
                if (indexNumberAsString !== -1) {
                    if (first === -1) {
                        first = indexNumberAsString;
                    }
                    last = indexNumberAsString;
                }
            }
        }

        return first * 10 + last;
    }
}
