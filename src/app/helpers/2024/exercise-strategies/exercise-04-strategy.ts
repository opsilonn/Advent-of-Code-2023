import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise04Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly WORD_XMAS = "XMAS";
    private readonly WORD_MAS = "MAS";

    /**
     * 
     * @param data Jeu de données à traiter
     * @returns
     */
    public resolve(data: string[]): number {
        var cpt: number = 0;
        var expectedWord: string = this.WORD_XMAS;

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                cpt += [
                    this.computeHorizontal(data, i, j, expectedWord),
                    this.computeVertical(data, i, j, expectedWord),
                    this.computeDiagonalUpLeftToDownRight(data, i, j, expectedWord),
                    this.computeDiagonalDownLeftToUpRight(data, i, j, expectedWord)
                ].filter((bool: boolean) => bool)
                .length;
            }
        }

        return cpt;
    }

    public resolve2(data: string[]): number {
        var cpt: number = 0;
        var expectedWord: string = this.WORD_MAS;

        for (let i = 1; i < data.length - 1; i++) {
            for (let j = 1; j < data[i].length - 1; j++) {
                if (this.isWordXShapped(data, i, j, expectedWord)) {
                    cpt++;
                }
            }
        }

        return cpt;
    }

    private computeHorizontal(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        if (this.isTooFarRight(data, indexVertical, indexHorizontal, expectedWord)) {
            return false;
        }

        var currentWord: string = "";
        for (let i = 0; i < expectedWord.length; i++) {
            currentWord += data[indexVertical][indexHorizontal + i];
        }
    
        return this.isWordValid(currentWord, expectedWord);        
    }

    private computeVertical(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        if (this.isTooFarDown(data, indexVertical, expectedWord)) {
            return false;
        }

        var currentWord: string = "";
        for (let i = 0; i < expectedWord.length; i++) {
            currentWord += data[indexVertical + i][indexHorizontal];
        }
    
        return this.isWordValid(currentWord, expectedWord);        
    }

    private computeDiagonalUpLeftToDownRight(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        if (this.isTooFarRight(data, indexVertical, indexHorizontal, expectedWord) || this.isTooFarDown(data, indexVertical, expectedWord)) {
            return false;
        }

        var currentWord: string = "";
        for (let i = 0; i < expectedWord.length; i++) {
            currentWord += data[indexVertical + i][indexHorizontal + i];
        }
    
        return this.isWordValid(currentWord, expectedWord);        
    }
    
    private computeDiagonalDownLeftToUpRight(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        if (this.isTooFarLeft(indexHorizontal, expectedWord) || this.isTooFarDown(data, indexVertical, expectedWord)) {
            return false;
        }

        var currentWord: string = "";
        for (let i = 0; i < expectedWord.length; i++) {
            currentWord += data[indexVertical + i][indexHorizontal - i];
        }
    
        return this.isWordValid(currentWord, expectedWord);        
    }

    private isWordXShapped(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        var str1: string = data[indexVertical - 1][indexHorizontal - 1]
            + data[indexVertical][indexHorizontal]
            + data[indexVertical + 1][indexHorizontal + 1];

        var str2: string = data[indexVertical - 1][indexHorizontal + 1]
            + data[indexVertical][indexHorizontal]
            + data[indexVertical + 1][indexHorizontal - 1];

        return this.isWordValid(str1, expectedWord) && this.isWordValid(str2, expectedWord);
    }

    private isTooFarLeft(indexHorizontal: number, expectedWord: string): boolean {
        return indexHorizontal < expectedWord.length - 1;
    }

    private isTooFarRight(data: string[], indexVertical: number, indexHorizontal: number, expectedWord: string): boolean {
        return indexHorizontal > data[indexVertical].length - expectedWord.length;
    }

    private isTooFarDown(data: string[], indexVertical: number, expectedWord: string): boolean {
        return indexVertical > data.length - expectedWord.length;
    }

    private isWordValid(currentWord: string, expectedWord: string) {
        return expectedWord === currentWord || expectedWord == this.reverseString(currentWord);
    }

    private reverseString(str: string): string {
        return str.split('')
            .reverse()
            .join('');
    }
}
