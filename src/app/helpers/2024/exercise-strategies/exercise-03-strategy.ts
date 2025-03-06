import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise03Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly DOABLE_TEXT: RegExp = /(?:^|do\(\))(.*?)(?:don't\(\)|$)/g;
    private readonly REGEX_MULTIPLIER: RegExp = /mul\(\d{1,3},\d{1,3}\)/g;

    /**
     * Prends un jeu de données, ordonne chaque colonne dans l'ordre croissant, et retourne la somme des différences entre les valeurs de chaque niveau
     * @param data Jeu de données à traiter
     * @returns La somme des différences entre les valeurs de chaque niveau, ordonné dans l'ordre croissant
     */
    public resolve(data: string[]): number {
        return data.map((str: string) => this.getMultiplier(str))
            .flat()
            .map((str: string) => this.computeMultiplication(str))
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    public resolve2(data: string[]): number {
        var entireFile: string = data.reduce((accumulator, currentValue) => accumulator + currentValue, "");
        console.log(this.getDoableText(entireFile));
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
