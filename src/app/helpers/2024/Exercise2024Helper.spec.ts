import { Exercise } from 'src/app/models/exercise';
import { Exercise2024Helper } from 'src/app/helpers/2024/Exercise2024Helper';

describe('Exercise2024Helper', () => {

    it('#getAll devrait retourner la liste complète des exercices', () => {
        // Given
        const MIN = 0;
        const MAX = 24;

        // When
        const exercises: Exercise[] = Exercise2024Helper.getAll();

        // Then
        expect(exercises.length).toEqual(25);

        // On vérifie que la liste d'exercices contiennent TOUS les identifiants attendus
        for (let i = MIN; i <= MAX; i++) {
            var id: number = Number.parseInt(exercises[i].id);
            expect(id).toEqual(i + 1);
        }
    });
});
