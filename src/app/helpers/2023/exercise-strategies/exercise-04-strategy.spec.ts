import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise04Strategy } from "src/app/helpers/2023/exercise-strategies/exercise-04-strategy";

describe('Exercise04Strategy', () => {
    let strategy: Exercise04Strategy;

    beforeEach(() => MockBuilder(Exercise04Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise04Strategy);
    });

    it('Exercise04Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de string contenant les numéros gagnants et les numéros que l\'on, alors retourne la valeur totale de nos billets', () => {
        // Given
        const data = [
            'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
            'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
            'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
            'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
            'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
            'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(13);
    });

    it('#resolve Quand on reçoit une liste de string contenant les numéros gagnants et les numéros que l\'on, alors retourne la valeur totale de nos billets en cumulant des parties', () => {
        // Given
        const data = [
            'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
            'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
            'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
            'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
            'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
            'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
        ];

        // When && Then
        expect(strategy.resolve2(data)).toEqual(30);
    });
});
