import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise02Strategy } from 'src/app/helpers/2024/02/exercise-02-strategy';

describe('Exercise02Strategy', () => {
    let strategy: Exercise02Strategy;

    beforeEach(() => MockBuilder(Exercise02Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise02Strategy);
    });

    it('Exercise02Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de lignes, alors retourne le nombre de lignes valides', () => {
        // Given
        const data: string[] = [
            '7 6 4 2 1', // Safe
            '1 2 7 8 9', // Unsafe because 2 7 is an increase of 5.
            '9 7 6 2 1', // Unsafe because 6 2 is a decrease of 4.
            '1 3 2 4 5', // Unsafe because 1 3 is increasing but 3 2 is decreasing.
            '8 6 4 4 1', // Unsafe because 4 4 is neither an increase or a decrease.
            '1 3 6 7 9' // Safe
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(2);
    });

    it('#resolve Quand on reçoit une liste de lignes, alors retourne le nombre de lignes valides, notamment celles où l\'on ignore un chiffre', () => {
        // Given
        const data: string[] = [
            '7 6 4 2 1', // Safe
            '1 2 7 8 9', // Unsafe regardless of which level is removed.
            '9 7 6 2 1', // Unsafe regardless of which level is removed.
            '1 3 2 4 5', // Safe by removing the second level, 3.
            '8 6 4 4 1', // Safe by removing the third level, 4.
            '1 3 6 7 9' // Safe
        ];

        // When && Then
        expect(strategy.resolve2(data)).toEqual(4);
    });
});
