import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise03Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Pour une liste de string contenant des nombres cachés, retourne la somme des nombres entourés par au moins un caractère spécial
     * @param data Jeu de données à traiter
     * @returns la somme des chiffres entourés par au moins un caractère spécial
     */
    public resolve(data: string[]): number {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            let currentNumber = '';
            for (let j = 0; j < data[i].length; j++) {
                const currentChar = data[i][j];
                if (this.isNumber(currentChar)) {
                    currentNumber += currentChar;

                    const isLastChar: boolean = j === data[i].length - 1;
                    const isEndOfNumber: boolean = !this.isNumber(data[i][j + 1]);
                    if (isLastChar || isEndOfNumber) {
                        if (this.isNumberSurrounded(data, i, j, currentNumber)) {
                            total += parseInt(currentNumber, this.BASE_10);
                        }
                        currentNumber = '';
                        j++;
                    }
                }
            }
        }

        return total;
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }

    private isNumberSurrounded(data: string[], indexI: number, indexJ: number, currentNumber: string): boolean {
        for (let i = indexI - 1; i <= indexI + 1; i++) {
            if (this.isInRange(i, data)) {
                for (let j = indexJ - currentNumber.length; j <= indexJ + 1; j++) {
                    if (this.isInRange(j, data[i]) && this.isSpecialChar(data[i][j])) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private isNumber(char: string): boolean {
        return !isNaN(parseInt(char, this.BASE_10));
    }

    private isDot(char: string): boolean {
        return char === '.';
    }

    private isSpecialChar(char: string): boolean {
        return !this.isNumber(char) && !this.isDot(char);
    }

    private isInRange(index: number, arr: string[] | string): boolean {
        return 0 <= index && index < arr.length;
    }
}
