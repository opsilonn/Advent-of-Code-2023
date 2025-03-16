import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise03Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly DOABLE_TEXT: RegExp = /(?:^|do\(\))(.*?)(?:don't\(\)|$)/g;
    private readonly REGEX_MULTIPLIER: RegExp = /mul\(\d{1,3},\d{1,3}\)/g;

    /**
     * Prends un jeu de données, trouve toutes les multiplications, et retourne la somme des résultats
     * @param data Jeu de données à traiter
     * @returns Retourne la somme de toutes les multiplications cachées dans le fichier
     */
    public resolve(data: string[]): number {
        return data.map((str: string) => this.getMultiplier(str))
            .flat()
            .map((str: string) => this.computeMultiplication(str))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    /**
     * Prends un jeu de données, trouve toutes les multiplications "active", et retourne la somme des résultats.
     * Une multiplication est "active" après le mot "do()", et n'est "plus active" après le mot "don't()".
     * Note : on considère que le jeu de données commence au status  "actif".
     * @param data Jeu de données à traiter
     * @returns Retourne la somme de toutes les multiplications "active" cachées dans le fichier
     */
    public resolve2(data: string[]): number {
        var entireFile: string = data.reduce((accumulator, currentValue) => accumulator + currentValue, "");
        return this.getDoableText(entireFile)
            .map((str: string) => this.getMultiplier(str))
            .flat()
            .map((str: string) => this.computeMultiplication(str))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    private getMultiplier(str: string): string[] {
        return this.readRegex(str, this.REGEX_MULTIPLIER);
    }
    private getDoableText(str: string): string[] {
        return this.readRegex(str, this.DOABLE_TEXT);
    }

    private readRegex(str: string, regex: RegExp): string[] {
        const matches = str.match(regex);
        return matches ? matches : [];
    }

    private computeMultiplication(str: string): number {
        const regex = /\d{1,3}/g;
        const matches = str.match(regex);
        if (!matches) {
            return 0;
        }

        var numberLeft: number = parseInt(matches[0], this.BASE_10);
        var numberRight: number = parseInt(matches[1], this.BASE_10);
        return numberLeft * numberRight;
    }
}
