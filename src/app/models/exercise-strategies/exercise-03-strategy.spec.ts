import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise03Strategy } from "src/app/models/exercise-strategies/exercise-03-strategy";

describe('Exercise03Strategy', () => {
    let strategy: Exercise03Strategy;

    beforeEach(() => MockBuilder(Exercise03Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise03Strategy);
    });

    it('Exercise03Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de string contenant des nombres cachés, alors retourne la somme des nombres entourés par au moins un caractère spécial', () => {
        // Given
        const data = [
            '467..114..',
            '...*......',
            '..35..633.',
            '......#...',
            '617*......',
            '.....+.58.',
            '..592.....',
            '......755.',
            '...$.*....',
            '.664.598..',
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(4361);
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
