import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise06Strategy } from "src/app/models/exercise-strategies/exercise-06-strategy";

describe('Exercise06Strategy', () => {
    let strategy: Exercise06Strategy;

    beforeEach(() => MockBuilder(Exercise06Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise06Strategy);
    });

    it('Exercise06Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de string contenant des parties, alors retourne la multiplication des nombres de façon de battre le record de chaque partie', () => {
        // Given
        const data: string[] = [
            'Time:      7  15   30',
            'Distance:  9  40  200',
        ];
        // Game 1 : 4 façons (2, 3, 4, 5)
        // Game 2 : 8 façons (4, 5, ..., 10, 11)
        // Game 3 : 9 façons (11, 12, ..., 18, 19)
        const total = 4 * 8 * 9;

        // When && Then
        expect(strategy.resolve(data)).toEqual(total);
    });

    it('#resolve2 Quand on reçoit une liste de string contenant une partie éclatée, alors retourne le nombre de façon de battre le record de cette partie', () => {
        // Given
        const data: string[] = [
            'Time:      7  15   30',
            'Distance:  9  40  200',
        ];
        // à interpréter comme :
        // Time: 71530
        // Distance: 940200
        // Soit une Game avec 71503 façons (14, 15, ..., 71515, 71516)

        // When && Then
        expect(strategy.resolve2(data)).toEqual(71503);
    });
});
