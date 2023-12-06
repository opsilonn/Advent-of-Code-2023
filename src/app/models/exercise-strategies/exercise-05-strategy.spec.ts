import { TestBed } from "@angular/core/testing";
import { MockBuilder } from "ng-mocks";
import { AppModule } from "src/app/app.module";
import { Exercise05Strategy } from "src/app/models/exercise-strategies/exercise-05-strategy";

describe('Exercise05Strategy', () => {
    let strategy: Exercise05Strategy;

    beforeEach(() => MockBuilder(Exercise05Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise05Strategy);
    });

    it('Exercise05Strategy should be created', () => {
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
