import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise07Strategy } from "src/app/models/exercise-strategies/exercise-07-strategy";

describe('Exercise07Strategy', () => {
    let strategy: Exercise07Strategy;

    beforeEach(() => MockBuilder(Exercise07Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise07Strategy);
    });

    it('Exercise07Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on lui passe une liste de main, alors fait la somme des paris multiplié par une valeur représentant leur ordre de valeur', () => {
        // Given
        const data: string[] = [
            '32T3K 765', // 5ème meilleure main => 1 pts
            'T55J5 684', // 2ème meilleure main => 4 pts
            'KK677 28', // 3ème meilleure main => 3 pts
            'KTJJT 220', // 4ème meilleure main => 2 pts
            'QQQJA 483', // 1ère meilleure main => 5 pts
        ];
        const total = 765 * 1 + 684 * 4 + 28 * 3 + 220 * 2 + 483 * 5;

        // When && Then
        expect(strategy.resolve(data)).toEqual(total);
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
