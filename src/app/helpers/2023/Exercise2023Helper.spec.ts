import { Exercise } from 'src/app/models/exercise';
import { Exercise2023Helper } from 'src/app/helpers/2023/Exercise2023Helper';

describe('Exercise2023Helper', () => {

    it('#getAll devrait retourner la liste complète des exercices', () => {
        // Given
        const MIN = 0;
        const MAX = 24;

        // When
        const exercises: Exercise[] = Exercise2023Helper.getAll();

        // Then
        expect(exercises.length).toEqual(25);

        // On vérifie que la liste d'exercices contiennent TOUS les identifiants attendus
        for (let i = MIN; i <= MAX; i++) {
            var id: number = Number.parseInt(exercises[i].id);
            expect(id).toEqual(i + 1);
        }
    });
});
