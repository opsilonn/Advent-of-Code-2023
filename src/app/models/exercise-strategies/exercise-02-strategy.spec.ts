import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise02Strategy } from "src/app/models/exercise-strategies/exercise-02-strategy";

describe('Exercise02Strategy', () => {
    let strategy: Exercise02Strategy;

    beforeEach(() => MockBuilder(Exercise02Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise02Strategy);
    });

    it('Exercise02Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de parties composées de différents tirages, alors retourne la somme des Ids des parties correspondant à un jeu donné', () => {
        // Given
        const data = [
            'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green', // Oui !
            'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue', // Oui !
            'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', // Nope...
            'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red', // Nope...
            'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green' // Oui !
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(8);
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
