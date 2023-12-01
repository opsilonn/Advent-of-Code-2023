import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise01Strategy } from "src/app/models/exercise-strategies/exercise-01-strategy";

describe('Exercise01Strategy', () => {
    let strategy: Exercise01Strategy;

    beforeEach(() => MockBuilder(Exercise01Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise01Strategy);
    });

    it('Exercise01Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de mots ayant des chiffres insérés, alors on calcule la somme des nombres composés des premiers et derniers chiffres de chaque ligne', () => {
        // Given
        const data: string[] = [
            '1abc2', // 12
            'pqr3stu8vwx', // 38
            'a1b2c3d4e5f', // 15
            'treb7uchet', // 77
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(142);
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
