import { ExerciseStrategy } from "src/app/models/exercise-strategy";

interface Game {
    draws: Record<string, number>[];
    id: number;
}

export class Exercise02Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /**
     * Prends une liste de sets ayant eu plusieurs tirages, compile ceux qui peuvent correspondre à un set donné, et en retourne la somme des identifiants
     * @param data Jeu de données à traiter
     * @returns La somme des identifiants des sets correspondant à un set déterminé
     */
    public resolve(data: string[]): number {
        return data
            .map((str: string) => this.readGame(str))
            .filter((game: Game) => this.isGameValid(game))
            .reduce((sum: number, current: Game) => sum + current.id, 0);
    }

    /**
     * Prends une liste de parties, et calcule la somme de leurs puissances minimales
     * @param data Jeu de données à traiter
     * @returns La somme des puissances minimales de plusieurs parties
     */
    public resolve2(data: string[]): number {
        return data
            .map((str: string) => this.readGame(str))
            .reduce((sum: number, game: Game) => sum + this.minimumCubePowerForGame(game), 0);
    }

    /**
     * Convertit une partie sous format string en format objet
     * @param gameAsString Une partie sous format string
     * @returns Une partie sous format objet
     */
    private readGame(gameAsString: string): Game {
        const GAME_PREFIX_LENGTH = 'Game '.length;

        const [gameIdentifier, draws]: string[] = gameAsString.split(': ');
        
        return {
            draws: draws.split('; ').map((draw: string) => this.readDraw(draw)),
            id: parseInt(gameIdentifier.substring(GAME_PREFIX_LENGTH), this.BASE_10),
        };
    }

    /**
     * Convertit un round sous format string en format objet
     * @param drawAsString Un round sous format string
     * @returns Un round sous format objet
     */
    private readDraw(drawAsString: string): Record<string, number> {
        const draw: Record<string, number> = {};

        drawAsString.split(', ').map((colorAndValue: string) => {
            const [value, color]: string[] = colorAndValue.split(' ');
            draw[color] = parseInt(value, this.BASE_10);
        });

        return draw;
    }

    /** Vérifie si une partie est compatible avec le tirage de cubes colorés donné
     * @param game Partie à vérifier
     * @returns Si une partie est compatible avec le tirage de cubes colorés donné
     */
    private isGameValid(game: Game): boolean {
        const SET_DATA: Record<string, number> = {
            blue: 14,
            green: 13,
            red: 12,
        };

        return Object.keys(SET_DATA).every((color: string) => {
            const colorValue = SET_DATA[color];
            return game.draws.every((draw: Record<string, number>) => draw[color] ? draw[color] <= colorValue : true);
        });
    }

    /**
     * Retourne la puissance minimale d'une partie
     * Puissance minimale => multiplication des nombres de cubes de couleur minimaux pour passer tous les rounds
     * @param game Partie dont on veut calculer la puissance minimale
     * @returns  La puissance minimale d'une partie
     */
    private minimumCubePowerForGame(game: Game): number {
        const maxPerColor: Record<string, number> = {};
        
        game.draws.forEach((draw: Record<string, number>) => {
            Object.keys(draw)
                .filter((color: string) => !maxPerColor[color] || maxPerColor[color] < draw[color])
                .forEach((color: string) => maxPerColor[color] = draw[color]);
        });

        return Object.keys(maxPerColor).reduce((sum: number, currentColor: string) => sum * maxPerColor[currentColor], 1);
    }
}
