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
