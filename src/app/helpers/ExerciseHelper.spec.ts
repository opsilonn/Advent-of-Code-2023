import { Exercise } from 'src/app/models/exercise';
import { ExerciseHelper } from 'src/app/helpers/ExerciseHelper';

describe('ExerciseHelper', () => {

    ['2023', '2024'].forEach((year: string) => {
        it(`#getAll Quand on lui donne une année valide comme ${year}, alors retourne la liste complète des exercices`, () => {
            // Given
            const MIN = 0;
            const MAX = 24;
    
            // When
            const exercises: Exercise[] = ExerciseHelper.getAll(year);
    
            // Then
            expect(exercises.length).toEqual(25);
    
            // On vérifie que la liste d'exercices contiennent TOUS les identifiants attendus
            for (let i = MIN; i <= MAX; i++) {
                var id: number = Number.parseInt(exercises[i].id);
                expect(id).toEqual(i + 1);
            }
        });
      });

      ['', '2000', 'lalilulelo'].forEach((year: string) => {
          it(`#getAll Quand on lui donne une année invalide comme ${year}, alors retourne une liste vide`, () => {
              // When
              const exercises: Exercise[] = ExerciseHelper.getAll(year);
      
              // Then
              expect(exercises).toEqual([]);
          });
        });
});
