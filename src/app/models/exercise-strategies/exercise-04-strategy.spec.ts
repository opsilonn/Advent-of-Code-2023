import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise04Strategy } from "src/app/models/exercise-strategies/exercise-04-strategy";

describe('Exercise04Strategy', () => {
    let strategy: Exercise04Strategy;

    beforeEach(() => MockBuilder(Exercise04Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise04Strategy);
    });

    it('Exercise04Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve(data)).toThrowError('Méthode non implémentée - 0');
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
