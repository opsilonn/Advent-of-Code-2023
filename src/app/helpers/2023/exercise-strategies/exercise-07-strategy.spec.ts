import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise07Strategy } from 'src/app/helpers/2023/exercise-strategies/exercise-07-strategy';

describe('Exercise07Strategy', () => {
    let strategy: Exercise07Strategy;

    beforeEach(() => MockBuilder(Exercise07Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise07Strategy);
    });

    it('Exercise07Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on lui passe une liste de main, alors fait la somme des paris multiplié par une valeur représentant leur ordre de valeur', () => {
        // Given
        const data: string[] = [
            '32T3K 765', // 5ème meilleure main => 1 pts
            'T55J5 684', // 2ème meilleure main => 4 pts
            'KK677 28', // 3ème meilleure main => 3 pts
            'KTJJT 220', // 4ème meilleure main => 2 pts
            'QQQJA 483', // 1ère meilleure main => 5 pts
        ];
        const total = 765 * 1 + 684 * 4 + 28 * 3 + 220 * 2 + 483 * 5;

        // When && Then
        expect(strategy.resolve(data)).toEqual(total);
    });

    it('#resolve2 Quand on lui passe une liste de main, alors fait la somme des paris multiplié par une valeur représentant leur ordre de valeur, une fois optimisé', () => {
        // Given
        const data: string[] = [
            '32T3K 765', // 5ème meilleure main => 1 pts
            'T55J5 684', // 3ème meilleure main => 3 pts
            'KK677 28', // 4ème meilleure main => 2 pts
            'KTJJT 220', // 1ère meilleure main => 5 pts
            'QQQJA 483', // 2ème meilleure main => 4 pts
        ];
        const total = 765 * 1 + 684 * 3 + 28 * 2 + 220 * 5 + 483 * 4;

        // When && Then
        expect(strategy.resolve2(data)).toEqual(total);
    });

    it('#resolve2 Quand on lui passe une liste de main avec des quintuplets, alors celui composé de Jokers est valué plus bas', () => {
        // Given
        const data: string[] = [
            'AAAAA 10', // 1ère meilleure main => 2 pts
            'JJJJJ 1', // 2ème meilleure main => 1 pts
        ];
        const total = 10 * 2 + 1 * 1;

        // When && Then
        expect(strategy.resolve2(data)).toEqual(total);
    });

    fit('#resolve2 Quand on lui passe une liste de main, alors fait la somme des paris multiplié par une valeur représentant leur ordre de valeur, une fois optimisé', () => {
        // Given
        const data = [
            { input: '424KT 464', value: 5 },
            { input: '3J4QA 723', value: 3 },
            { input: '94Q85 210', value: 1 },
            { input: '25722 304', value: 12 },
            { input: 'Q4QQQ 176', value: 19 },
            { input: '3J777 548', value: 17 },
            { input: '37687 944', value: 4 },
            { input: '8J6TK 274', value: 7 },
            { input: '99TQA 623', value: 8 },
            { input: '58389 577', value: 6 },
            { input: 'AAAQA 346', value: 20 },
            { input: '33A66 773', value: 11 },
            { input: '2K2K7 626', value: 10 },
            { input: '37776 242', value: 13 },
            { input: 'ATAA5 750', value: 16 },
            { input: 'T46KA 551', value: 2 },
            { input: '99J9T 916', value: 18 },
            { input: 'Q4Q7Q 307', value: 15 },
            { input: '9JA4A 90', value: 14 },
            { input: 'TT2KQ 19', value: 9 },
        ];
        const total = data.reduce((cpt, current) => cpt + current.value * (parseInt(current.input.split(' ')[1], 10)), 0);

        // When && Then
        expect(strategy.resolve2(data.map(_ => _.input))).toEqual(total);
    });
});
