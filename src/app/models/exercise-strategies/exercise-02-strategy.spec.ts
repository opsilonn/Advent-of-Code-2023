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
