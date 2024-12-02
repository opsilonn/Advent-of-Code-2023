import { ExerciseStrategy } from 'src/app/models/exercise-strategy';

interface Map {
    destination: number;
    source: number;
    range: number;
}

export class Exercise05Strategy implements ExerciseStrategy {

    private readonly BASE_10 = 10;

    /** Méthode temporaire */
    public resolve(data: string[]): number {
        const seeds = data[0].split(': ')[1].split(' ').map((n: string) => parseInt(n, this.BASE_10));
        const almanacs = this.getAlmanacs(data);
        return Math.min(...this.convertSeedsToLocation(seeds, almanacs));
    }

    /** Méthode temporaire */
    public resolve2(data: string[]): number {
        throw Error('Méthode non implémentée - ' + data.length);
    }

    /** Méthode temporaire */
    private getAlmanacs(data: string[]): Map[][] {
        const almanacs: Map[][] = [];
        let almanacsIndex = 0;
        let index = 2;
        
        while(index < data.length) {
            index++; // Pour ignorer la phrase 'machin-to-machine map:'
            almanacs[almanacsIndex] = [];

            while(index < data.length && data[index] !== '') {
                const [destination, source, range] = data[index].split(' ').map((str: string) => parseInt(str, this.BASE_10));
                almanacs[almanacsIndex].push({ destination, range, source });
                index++;
            }

            almanacsIndex++;
            index++;
        }

        return almanacs;
    }
    
    /** Méthode temporaire */
    private convertSeedsToLocation(seeds: number[], almanacs: Map[][]): number[] {
        const convertedSeeds = [...seeds];

        for (let i = 0; i < seeds.length; i++) {
            almanacs.forEach((almanac: Map[]) => {
                almanac
                    .filter((map: Map) => map.source <= convertedSeeds[i] && convertedSeeds[i] < map.source + map.range)
                    .forEach((map: Map) => convertedSeeds[i] = convertedSeeds[i] - map.source + map.destination);
            });
        }

        return convertedSeeds;
    }
}
