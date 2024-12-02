import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise01Strategy } from 'src/app/helpers/2024/exercise-strategies/exercise-01-strategy';

describe('Exercise01Strategy', () => {
    let strategy: Exercise01Strategy;

    beforeEach(() => MockBuilder(Exercise01Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise01Strategy);
    });

    it('Exercise01Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de deux colonnes de nombres,'
        + ' alors retourne la somme de la différence entre chaque niveau, ordonné dans l\'ordre croissant', () => {
        // Given
        const data: string[] = [
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3'
        ];
        // Quand ordonnée, la liste donne (Avec les distances associées) :[
        //    '1   3', => 2
        //    '2   3', => 1
        //    '3   3', => 0
        //    '3   4', => 1
        //    '3   5', => 2
        //    '4   9'  => 5
        // ];  => total : 2 + 1 + 0 + 1 + 2 + 5 = 11

        // When && Then
        expect(strategy.resolve(data)).toEqual(11);
    });

    it('#resolve Quand on reçoit une liste de deux colonnes de nombres,'
        + ' alors retourne la somme des différences entre les valeurs de chaque niveau', () => {
        // Given
        const data: string[] = [
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3'
        ];
        // Quand ordonnée, la liste donne (Avec les distances associées) :[
        //    le 1 (1 occurence), n'apparaît jamais à droite
        //    le 2 (1 occurence), n'apparaît jamais à droite
        //    le 3 (3 occurences), apparaît 3 fois à droite => 3 * 3 * 3 = 27
        //    le 4 (1 occurence), apparaît 1 fois à droite => 4 * 1 * 1 = 4
        //    les 5 et 9 n'apparaissent jamais à gauche, donc ils sont ignorés
        // ];  => total : 27 + 4 = 31

        // When && Then
        expect(strategy.resolve2(data)).toEqual(31);
    });
});
