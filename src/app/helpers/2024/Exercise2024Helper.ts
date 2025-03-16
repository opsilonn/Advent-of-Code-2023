import { Exercise } from 'src/app/models/exercise';
import { Exercise01Strategy } from 'src/app/helpers/2024/01/exercise-01-strategy';
import { Exercise02Strategy } from 'src/app/helpers/2024/02/exercise-02-strategy';
import { Exercise03Strategy } from 'src/app/helpers/2024/03/exercise-03-strategy';
import { Exercise04Strategy } from 'src/app/helpers/2024/04/exercise-04-strategy';

export class Exercise2024Helper {

    public static getAll(): Exercise[] {
        return [
            new Exercise('01', 'Day 1: Historian Hysteria', new Exercise01Strategy()),
            new Exercise('02', 'Day 2: Red-Nosed Reports', new Exercise02Strategy()),
            new Exercise('03', 'Day 3 : Mull It Over', new Exercise03Strategy()),
            new Exercise('04', 'Day 3 : Ceres Search', new Exercise04Strategy()),
            new Exercise('05', '???', null),
            new Exercise('06', '???', null),
            new Exercise('07', '???', null),
            new Exercise('08', '???', null),
            new Exercise('09', '???', null),
            new Exercise('10', '???', null),
            new Exercise('11', '???', null),
            new Exercise('12', '???', null),
            new Exercise('13', '???', null),
            new Exercise('14', '???', null),
            new Exercise('15', '???', null),
            new Exercise('16', '???', null),
            new Exercise('17', '???', null),
            new Exercise('18', '???', null),
            new Exercise('19', '???', null),
            new Exercise('20', '???', null),
            new Exercise('21', '???', null),
            new Exercise('22', '???', null),
            new Exercise('23', '???', null),
            new Exercise('24', '???', null),
            new Exercise('25', '???', null)
        ];
    }
}
