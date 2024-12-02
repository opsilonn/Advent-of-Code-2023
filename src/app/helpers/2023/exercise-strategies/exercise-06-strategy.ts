import { ExerciseStrategy } from "src/app/models/exercise-strategy";

interface Game {
    distance: number;
    time: number;
}

export class Exercise06Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Prends un jeu de données, et multiplie les nombres de possibilités permettant de battre le record par partie
     * @param data Jeu de données à traiter
     * @returns La multiplication des nombres de possibilités permettant de battre le record par partie
     */
    public resolve(data: string[]): number {
        return this
            .readGames(data)
            .map((game: Game) => this.numberOfBetterTimes(game))
            .reduce((total: number, current: number) => total * current, 1);
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        return this
            .readGames2(data)
            .map((game: Game) => this.numberOfBetterTimes(game))
            .reduce((total: number, current: number) => total * current, 1);
    }

    /**
     * Construit le jeu de parties
     * @param data Données des temps et distances par partie
     * @returns le jeu de parties
     */
    private readGames(data: string[]): Game[] {
        const games: Game[] = [];

        const times = this.readLine(data[0]);
        const distances = this.readLine(data[1]);

        for (let i = 0; i < times.length; i++) {
            games.push({ distance: distances[i], time: times[i] });
        }

        return games;
    }

    /**
     * Construit le jeu de parties en ignorant les espaces
     * @param data Données des temps et distances par partie
     * @returns le jeu de parties
     */
    private readGames2(data: string[]): Game[] {
        const games: Game[] = [];

        const times = this.readLine(data[0].replaceAll(' ', '').replaceAll(':', ': '));
        const distances = this.readLine(data[1].replaceAll(' ', '').replaceAll(':', ': '));

        for (let i = 0; i < times.length; i++) {
            games.push({ distance: distances[i], time: times[i] });
        }

        return games;
    }

    /**
     * Les nombres qui composent une ligne
     * @param line Jeu de données composé de plusieurs nombres
     * @returns Les nombres qui composent une ligne
     */
    private readLine(line: string): number[] {
        return line
            .split(': ')[1]
            .split(' ')
            .filter((item: string) => !!item)
            .map((item: string) => parseInt(item, this.BASE_10));
    }

    private numberOfBetterTimes(game: Game): number {
        let betterTimes = 0;
        let acceleration = 1;

        for (let i = 1; i < game.time - 1; i++) {
            const distanceRan: number = acceleration * (game.time - i);
            if (game.distance < distanceRan) {
                betterTimes++;
            }

            acceleration++;
        }

        return betterTimes;
    }
}
