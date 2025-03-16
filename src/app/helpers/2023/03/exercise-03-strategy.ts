import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

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

    /**
     * Pour une liste de string contenant des '*' cachées, retourne la somme des multiplications des nombres qui entourent chacun d'entre eux (il faut au moins 2 nombres autour)
     * @param data Jeu de données à traiter
     * @returns la somme des multiplications des nombres qui entourent chacun d'entre eux (il faut au moins 2 nombres autour)
     */
    public resolve2(data: string[]): number {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                const currentChar = data[i][j];
                if (this.isStar(currentChar)) {
                    total += this.getAdjacentTwoNumbers(data, i, j);
                }
            }
        }

        return total;
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

    private getAdjacentTwoNumbers(data: string[], indexI: number, indexJ: number): number {
        let numberArray: string[] = [];
        let numberIndex = 0;

        for (let i = indexI - 1; i <= indexI + 1; i++) {
            if (this.isInRange(i, data)) {
                for (let j = indexJ - 1; j <= indexJ + 1; j++) {
                    if (this.isInRange(j, data[i])) {
                        if (this.isNumber(data[i][j])) {
                            numberArray[numberIndex] = '';
                            while (this.isNumber(data[i][j-1])) {
                                j--;
                            }
                            while (this.isNumber(data[i][j])) {
                                numberArray[numberIndex] += data[i][j];
                                j++;
                            }
                        }
                        numberIndex++;
                    }
                }
            }
        }

        numberArray = numberArray.filter((str: string) => !!str);
        if (numberArray.length < 2) {
            return 0;
        }

        return parseInt(numberArray[0], 10) * parseInt(numberArray[1], 10);
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

    private isStar(char: string): boolean {
        return char === '*';
    }

    private isInRange(index: number, arr: string[] | string): boolean {
        return 0 <= index && index < arr.length;
    }
}
