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
