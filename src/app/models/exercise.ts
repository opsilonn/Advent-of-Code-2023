import { Exercise00Strategy } from "src/app/models/exercise-strategies/exercise-00-strategy";
import { Exercise01Strategy } from "src/app/models/exercise-strategies/exercise-01-strategy";
import { Exercise02Strategy } from "src/app/models/exercise-strategies/exercise-02-strategy";
import { Exercise03Strategy } from "src/app/models/exercise-strategies/exercise-03-strategy";
import { Exercise04Strategy } from "src/app/models/exercise-strategies/exercise-04-strategy";
import { Exercise05Strategy } from "src/app/models/exercise-strategies/exercise-05-strategy";
import { Exercise06Strategy } from "src/app/models/exercise-strategies/exercise-06-strategy";
import { ExerciseStrategy } from "src/app/models/exercise-strategy";

export class Exercise {
    static readonly Exercise00 = new Exercise('00', 'Trouver la différence entre 2 extrêmes', new Exercise00Strategy());
    static readonly Exercise01 = new Exercise('01', 'Trebuchet?!', new Exercise01Strategy());
    static readonly Exercise02 = new Exercise('02', 'Cube Conundrum', new Exercise02Strategy());
    static readonly Exercise03 = new Exercise('03', 'Gear Ratios', new Exercise03Strategy());
    static readonly Exercise04 = new Exercise('04', 'Scratchcards', new Exercise04Strategy());
    static readonly Exercise05 = new Exercise('05', 'If You Give A Seed A Fertilizer', new Exercise05Strategy());
    static readonly Exercise06 = new Exercise('06', 'Wait For It', new Exercise06Strategy());
    static readonly Exercise07 = new Exercise('07', '???', null);
    static readonly Exercise08 = new Exercise('08', '???', null);
    static readonly Exercise09 = new Exercise('09', '???', null);
    static readonly Exercise10 = new Exercise('10', '???', null);
    static readonly Exercise11 = new Exercise('11', '???', null);
    static readonly Exercise12 = new Exercise('12', '???', null);
    static readonly Exercise13 = new Exercise('13', '???', null);
    static readonly Exercise14 = new Exercise('14', '???', null);
    static readonly Exercise15 = new Exercise('15', '???', null);
    static readonly Exercise16 = new Exercise('16', '???', null);
    static readonly Exercise17 = new Exercise('17', '???', null);
    static readonly Exercise18 = new Exercise('18', '???', null);
    static readonly Exercise19 = new Exercise('19', '???', null);
    static readonly Exercise20 = new Exercise('20', '???', null);
    static readonly Exercise21 = new Exercise('21', '???', null);
    static readonly Exercise22 = new Exercise('22', '???', null);
    static readonly Exercise23 = new Exercise('23', '???', null);
    static readonly Exercise24 = new Exercise('24', '???', null);
    static readonly Exercise25 = new Exercise('25', '???', null);

    id: string;
    name: string;
    strategy: ExerciseStrategy | null;

    constructor(
        id: string,
        name: string,
        strategy: ExerciseStrategy | null
    ) {
        this.id = id;
        this.name = name;
        this.strategy = strategy;
    }

    public static getAll(): Exercise[] {
        return [
            Exercise.Exercise00,
            Exercise.Exercise01,
            Exercise.Exercise02,
            Exercise.Exercise03,
            Exercise.Exercise04,
            Exercise.Exercise05,
            Exercise.Exercise06,
            Exercise.Exercise07,
            Exercise.Exercise08,
            Exercise.Exercise09,
            Exercise.Exercise10,
            Exercise.Exercise11,
            Exercise.Exercise12,
            Exercise.Exercise13,
            Exercise.Exercise14,
            Exercise.Exercise15,
            Exercise.Exercise16,
            Exercise.Exercise17,
            Exercise.Exercise18,
            Exercise.Exercise19,
            Exercise.Exercise20,
            Exercise.Exercise21,
            Exercise.Exercise22,
            Exercise.Exercise23,
            Exercise.Exercise24,
            Exercise.Exercise25,
        ];
    }
}
