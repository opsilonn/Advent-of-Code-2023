import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise04Strategy } from 'src/app/helpers/2024/04/exercise-04-strategy';

describe('Exercise04Strategy_2024', () => {
    let strategy: Exercise04Strategy;

    beforeEach(() => MockBuilder(Exercise04Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise04Strategy);
    });

    it('Exercise04Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de lignes, alors calcule le nombre d\'occurence d\'un mot, que ce soit en vertical, horizontal ou diagonal', () => {
        // Given
        const data: string[] = [
            'MMMSXXMASM',
            'MSAMXMSMSA',
            'AMXSXMAAMM',
            'MSAMASMSMX',
            'XMASAMXAMM',
            'XXAMMXXAMA',
            'SMSMSASXSS',
            'SAXAMASAAA',
            'MAMMMXMMMM',
            'MXMXAXMASX'
        ];

        /*
        The filtered text is as : (with 18 XMAS occurences)
        '....XXMAS.',
        '.SAMXMS...',
        '...S..A...',
        '..A.A.MS.X',
        'XMASAMX.MM',
        'X.....XA.A',
        'S.S.S.S.SS',
        '.A.A.A.A.A',
        '..M.M.M.MM',
        '.X.X.XMASX',
        */

        // When && Then
        expect(strategy.resolve(data)).toEqual(18);
    });

    it('#resolve2 Quand on reçoit une liste de lignes, alors calcule le nombre d\'occurence d\'un mot, dans la forme d\'une croix X', () => {
        // Given
        const data: string[] = [
            'MMMSXXMASM',
            'MSAMXMSMSA',
            'AMXSXMAAMM',
            'MSAMASMSMX',
            'XMASAMXAMM',
            'XXAMMXXAMA',
            'SMSMSASXSS',
            'SAXAMASAAA',
            'MAMMMXMMMM',
            'MXMXAXMASX'
        ];

        /*
        The filtered text is as : (with 9 MAS occurences)
        '.M.S......',
        '..A..MSMS.',
        '.M.S.MAA..',
        '..A.ASMSM.',
        '.M.S.M....',
        '..........',
        'S.S.S.S.S.',
        '.A.A.A.A..',
        'M.M.M.M.M.',
        '..........',
        */

        // When && Then
        expect(strategy.resolve2(data)).toEqual(9);
    });
});
