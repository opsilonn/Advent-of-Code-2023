import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

export class Exercise01Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;
    private readonly SEPARATOR = '   ';

    /**
     * Prends un jeu de données, ordonne chaque colonne dans l'ordre croissant, et retourne la somme des différences entre les valeurs de chaque niveau
     * @param data Jeu de données à traiter
     * @returns La somme des différences entre les valeurs de chaque niveau, ordonné dans l'ordre croissant
     */
    public resolve(data: string[]): number {
        var leftVars: number[] = [];
        var rightVars: number[] = [];

        for (let i = 0; i < data.length; i++) {
            let keyPair: string[] = data[i].split(this.SEPARATOR);
            leftVars.push(parseInt(keyPair[0], this.BASE_10));
            rightVars.push(parseInt(keyPair[1], this.BASE_10));
        }

        leftVars.sort();
        rightVars.sort();

        return leftVars
            .map((leftValue: number, i: number) => {
                var rightValue: number = rightVars[i];
                return Math.abs(rightValue - leftValue);
            })
            .reduce((total: number, currentValue: number) => total + currentValue, 0);
    }

    /**
     * Prends un jeu de données, et retourne la somme des poids de chaque chiffre de gauche par le nombre de fois où il appararaît dans la colonne de droite
     * @param data Jeu de données à traiter
     * @returns La somme des poids de chaque chiffre de gauche par le nombre de fois où il appararaît dans la colonne de droite
     */
    public resolve2(data: string[]): number {
        var leftWeightedValues: Record<number, number> = {};
        var rightWeightedValues: Record<number, number> = {};

        for (let i = 0; i < data.length; i++) {
            let keyPair: string[] = data[i].split(this.SEPARATOR);
            this.computeWeight(leftWeightedValues, keyPair[0]);
            this.computeWeight(rightWeightedValues, keyPair[1]);
        }

        return Object.entries(leftWeightedValues)
            .map(([key, leftWeight]: [string, number]) => {
                const numericKey = Number(key);
                const rightWeight = rightWeightedValues[numericKey] || 0;
                return numericKey * leftWeight * rightWeight;
            })            
            .reduce((total: number, currentValue: number) => total + currentValue, 0);
    }

    /**
     * Augmente l'index d'un chiffre s'il est présent, sinon l'initialise à 1
     * @param weightedValues Record contenant toutes les valeurs
     * @param newValue valeur dont on veut incrémenter le poid
     */
    private computeWeight(weightedValues: Record<number, number>, newValue: string): void {
        var newNumber = parseInt(newValue, this.BASE_10);
        if (weightedValues[newNumber]) {
            weightedValues[newNumber]++;
        } else {
            weightedValues[newNumber] = 1;
        }
    }
}
