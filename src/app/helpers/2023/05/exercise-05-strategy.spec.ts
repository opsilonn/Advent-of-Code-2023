import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise05Strategy } from 'src/app/helpers/2023/05/exercise-05-strategy';

describe('Exercise05Strategy', () => {
    let strategy: Exercise05Strategy;

    beforeEach(() => MockBuilder(Exercise05Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise05Strategy);
    });

    it('Exercise05Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de string contenant des parties, alors retourne la multiplication des nombres de façon de battre le record de chaque partie', () => {
        // Given
        const data: string[] = [
            'seeds: 79 14 55 13',
            '',
            'seed-to-soil map:',
            '50 98 2',
            '52 50 48',
            '',
            'soil-to-fertilizer map:',
            '0 15 37',
            '37 52 2',
            '39 0 15',
            '',
            'fertilizer-to-water map:',
            '49 53 8',
            '0 11 42',
            '42 0 7',
            '57 7 4',
            '',
            'water-to-light map:',
            '88 18 7',
            '18 25 70',
            '',
            'light-to-temperature map:',
            '45 77 23',
            '81 45 19',
            '68 64 13',
            '',
            'temperature-to-humidity map:',
            '0 69 1',
            '1 0 69',
            '',
            'humidity-to-location map:',
            '60 56 37',
            '56 93 4',
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(35);
    });

    it('#resolve2 Devrait échouer', () => {
        // Given
        const data: string[] = [];

        // When && Then
        expect(() => strategy.resolve2(data)).toThrowError('Méthode non implémentée - 0');
    });
});
