import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise02Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly SEPARATOR = ' ';

    /**
     * Prends un jeu de données, et retourne le nombre de lignes valides.
     * Une ligne est valide si les chiffres sont tous croissants ou tous décroissants,
     * avec un écart entre chaque chiffre compris entre 1 et 3.
     * @param data Jeu de données à traiter
     * @returns Le nombre de lignes valides.
     */
    public resolve(data: string[]): number {
        return this.readFile(data)
            .filter((line: number[]) => this.isLineValid(line))
            .length;
    }

    /**
     * Prends un jeu de données, et retourne le nombre de lignes valides.
     * Une ligne est valide si les chiffres sont tous croissants ou tous décroissants,
     * avec un écart entre chaque chiffre compris entre 1 et 3.
     * Une ligne est aussi considérée valide si l'on obtient une sous-ligne valide en ignorant l'un de ses chiffres.
     * @param data Jeu de données à traiter
     * @returns Le nombre de lignes valides.
     */
    public resolve2(data: string[]): number {
        return this.readFile(data)
            .filter((line: number[]) => this.isLineValidEvenWithOneItemRemoved(line))
            .length;
    }

    /** Convertit le fichier en modèle de données */
    private readFile(data: string[]): number[][] {
        return data.map((line: string) => line.split(this.SEPARATOR).map((value: string) => parseInt(value, this.BASE_10)));
    }
    /**
     * Prends un jeu de données, et retourne le nombre de lignes valides.
     * Une ligne est valide si les chiffres sont tous croissants ou tous décroissants,
     * avec un écart entre chaque chiffre compris entre 1 et 3.
     * @param data Jeu de données à traiter
     * @returns Le nombre de lignes valides.
     */

    /**
     * Retourne si une ligne est valide.
     * Une ligne est valide si les chiffres sont tous croissants ou tous décroissants,
     * avec un écart entre chaque chiffre compris entre 1 et 3.
     * @param line ligne à traiter
     * @returns Si une lignes est valide.
     */
    private isLineValid(line: number[]): boolean {
        let isIncreasing: boolean = (line[1] - line[0]) > 0;

        for (let i = 0; i< line.length - 1; i++) {
            if (this.isDeltaInvalid(line[i], line[i + 1], isIncreasing)) {
                return false;
            }
        }

        return true;
    }

    /**
     * Retourne si une ligne est valide.
     * Une ligne est valide si les chiffres sont tous croissants ou tous décroissants,
     * avec un écart entre chaque chiffre compris entre 1 et 3.
     * Une ligne est aussi considérée valide si l'on obtient une sous-ligne valide en ignorant l'un de ses chiffres.
     * @param line ligne à traiter
     * @returns Si une lignes est valide.
     */
    private isLineValidEvenWithOneItemRemoved(line: number[]): boolean {
        let allPosibilities: number[][] = [line];

        for (let i = 0; i< line.length; i++) {
            let copy: number[] = line.slice();
            copy.splice(i, 1); // We remove the current item
            allPosibilities.push(copy);
        }

        return allPosibilities.some((currentLine: number[]) => this.isLineValid(currentLine));
    }

    /**
     * Retourne si le Delta entre 2 chiffres consécutif est invalide.
     * Le delta est invalide si l'écart entre les  chiffres n'est pas compris entre 1 et 3.
     * @param firstNumber Le premier chiffre de la suite
     * @param secondNumber Le deuxième chiffre de la suite
     * @param isIncreasing Si la suite est croissante ou non.
     * @returns Si le Delta entre 2 chiffres consécutif est invalide.
     */
    private isDeltaInvalid(firstNumber: number, secondNumber: number, isIncreasing: boolean): boolean {
        return !this.isDeltaValid(firstNumber, secondNumber, isIncreasing);
    }

    /**
     * Retourne si le Delta entre 2 chiffres consécutif est valide.
     * Le delta est valide si l'écart entre les  chiffres est compris entre 1 et 3.
     * @param firstNumber Le premier chiffre de la suite
     * @param secondNumber Le deuxième chiffre de la suite
     * @param isIncreasing Si la suite est croissante ou non.
     * @returns Si le Delta entre 2 chiffres consécutif est valide.
     */
    private isDeltaValid(firstNumber: number, secondNumber: number, isIncreasing: boolean): boolean {
        let delta: number = isIncreasing
            ? secondNumber - firstNumber
            : firstNumber - secondNumber;

        return 1 <= delta && delta <= 3;
    }
}
