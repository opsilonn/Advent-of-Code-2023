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
