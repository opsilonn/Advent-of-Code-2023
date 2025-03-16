import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise04Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Pour une liste de chiffres vainqueurs / chiffres tirés, retourne la valeur de votre tirage
     * @param data Jeu de données à traiter
     * @returns la valeur de votre tirage
     */
    public resolve(data: string[]): number {
        return data
            .map((line: string) => this.readLine(line))
            .reduce((sum: number, current: number) => sum + current, 0);
    }

    /**
     * Pour une liste de chiffres vainqueurs / chiffres tirés, retourne le nombre de ticket (des tickets sont rajoutés procéduralement)
     * @param data Jeu de données à traiter
     * @returns le nombre de tickets disponibles, après génération
     */
    public resolve2(data: string[]): number {
        const sizes: number[] = data.map(() => 1);

        data.forEach((line: string, index: number) => {
            const n: number = this.numberOfWinningNumbers(line);
            for (let i = index + 1; i <= index + n; i++) {
                sizes[i] += sizes[index];
            }
        });

        return sizes
            .reduce((sum: number, current: number) => sum + current, 0);
    }

    private readLine(line: string): number {
        // On supprime le morceau 'Partie XYZ :'
        line = line.split(':')[1];

        const [winningNumbersStr, elfNumbersStr]: string[] = line.split('|');
        const winningNumbers: number[] = winningNumbersStr
            .split(' ')
            .filter((str: string) => !!str)
            .map((str: string) => parseInt(str, this.BASE_10));
        const elfNumbers: number[] = elfNumbersStr
            .split(' ')
            .filter((str: string) => !!str)
            .map((str: string) => parseInt(str, this.BASE_10));

        let total = 0;
        elfNumbers.forEach((n: number) => {
            if (winningNumbers.includes(n)) {
                if (total === 0) {
                    total = 1;
                } else {
                    total *= 2;
                }
            }
        });
        return total;
    }

    private numberOfWinningNumbers(line: string): number {
        // On supprime le morceau 'Partie XYZ :'
        line = line.split(':')[1];

        const [winningNumbersStr, elfNumbersStr]: string[] = line.split('|');
        const winningNumbers: number[] = winningNumbersStr
            .split(' ')
            .filter((str: string) => !!str)
            .map((str: string) => parseInt(str, this.BASE_10));
        const elfNumbers: number[] = elfNumbersStr
            .split(' ')
            .filter((str: string) => !!str)
            .map((str: string) => parseInt(str, this.BASE_10));

        return elfNumbers
            .filter((n: number) => (winningNumbers.includes(n)))
            .length;
    }
}
