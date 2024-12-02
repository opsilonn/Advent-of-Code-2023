import { Exercise } from 'src/app/models/exercise';
import { Exercise2023Helper } from 'src/app/helpers/2023/Exercise2023Helper';
import { Exercise2024Helper } from 'src/app/helpers/2024/Exercise2024Helper';

export class ExerciseHelper {

    public static getAll(year: string): Exercise[] {
        if (year == '2023') {
            return Exercise2023Helper.getAll();
        }

        if (year == '2024') {
            return Exercise2024Helper.getAll();
        }

        return [];
    }
}
