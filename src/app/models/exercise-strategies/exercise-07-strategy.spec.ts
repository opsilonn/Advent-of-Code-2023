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
