import { Exercise } from 'src/app/models/exercise';

describe('Exercise', () => {

    it('#Exercise.getAll devrait retourner la liste complète des exercices', () => {
        // Given
        const MIN = 0;
        const MAX = 25;

        // When
        const exercises: Exercise[] = Exercise.getAll();

        // Then
        // On vérifie que la liste d'exercices contiennent TOUS les identifiants attendus
        for (let i = MIN; i <= MAX; i++) {
            expect(Number.parseInt(exercises[i].id)).toEqual(i);
        }
    });
});
