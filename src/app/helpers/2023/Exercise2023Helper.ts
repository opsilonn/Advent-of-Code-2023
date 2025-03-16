import { Exercise } from 'src/app/models/exercise';
import { Exercise01Strategy } from 'src/app/helpers/2023/01/exercise-01-strategy';
import { Exercise02Strategy } from 'src/app/helpers/2023/02/exercise-02-strategy';
import { Exercise03Strategy } from 'src/app/helpers/2023/03/exercise-03-strategy';
import { Exercise04Strategy } from 'src/app/helpers/2023/04/exercise-04-strategy';
import { Exercise05Strategy } from 'src/app/helpers/2023/05/exercise-05-strategy';
import { Exercise06Strategy } from 'src/app/helpers/2023/06/exercise-06-strategy';
import { Exercise07Strategy } from 'src/app/helpers/2023/07/exercise-07-strategy';

export class Exercise2023Helper {

    public static getAll(): Exercise[] {
        return [
            new Exercise('01', 'Trebuchet?!', new Exercise01Strategy()),
            new Exercise('02', 'Cube Conundrum', new Exercise02Strategy()),
            new Exercise('03', 'Gear Ratios', new Exercise03Strategy()),
            new Exercise('04', 'Scratchcards', new Exercise04Strategy()),
            new Exercise('05', 'If You Give A Seed A Fertilizer', new Exercise05Strategy()),
            new Exercise('06', 'Wait For It', new Exercise06Strategy()),
            new Exercise('07', 'Camel Cards', new Exercise07Strategy()),
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
