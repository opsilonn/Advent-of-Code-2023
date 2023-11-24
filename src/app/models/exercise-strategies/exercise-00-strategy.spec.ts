import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise00Strategy } from "src/app/models/exercise-strategies/exercise-00-strategy";

describe('Exercise00Strategy', () => {
    let strategy: Exercise00Strategy;

    beforeEach(() => MockBuilder(Exercise00Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise00Strategy);
    });

    it('Exercise00Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    [
        { data: ['0'], expectedResult: 0 },
        { data: ['0', '0'], expectedResult: 0 },
        { data: ['0', '10', '20', '30', '40', '50'], expectedResult: 50 },
        { data: ['50', '40', '30', '20', '10', '0'], expectedResult: 50 }
    ].forEach((params: { data: string[], expectedResult: number }) => {
        it('#resolve Quand on reçoit une liste de nombres, alors on calcule le delta entre les valeurs plus hautes / basses', () => {
            expect(strategy.resolve(params.data)).toEqual(params.expectedResult);
        });
    });

    [
        { data: ['0'], expectedResult: 0 },
        { data: ['0', '0'], expectedResult: 0 },
        { data: ['0', '10', '20', '30', '40', '50'], expectedResult: 25 },
        { data: ['50', '40', '30', '20', '10', '0'], expectedResult: 25 }
    ].forEach((params: { data: string[], expectedResult: number }) => {
        it('#resolve2 Quand on reçoit une liste de nombres, alors on calcule la moitié du delta entre les valeurs plus hautes / basses', () => {
            expect(strategy.resolve2(params.data)).toEqual(params.expectedResult);
        });
    });
});
