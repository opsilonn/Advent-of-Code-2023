import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise03Strategy } from 'src/app/helpers/2023/exercise-strategies/exercise-03-strategy';

describe('Exercise03Strategy', () => {
    let strategy: Exercise03Strategy;

    beforeEach(() => MockBuilder(Exercise03Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise03Strategy);
    });

    it('Exercise03Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de string contenant des nombres cachés, alors retourne la somme des nombres entourés par au moins un caractère spécial', () => {
        // Given
        const data = [
            '467..114..',
            '...*......',
            '..35..633.',
            '......#...',
            '617*......',
            '.....+.58.',
            '..592.....',
            '......755.',
            '...$.*....',
            '.664.598..',
        ];

        // When && Then
        expect(strategy.resolve(data)).toEqual(4361);
    });

    it('#resolve2 Quand on reçoit une liste de string contenant des symboles \'*\', alors retourne la somme des multiplications des nombres qui l\'entourent', () => {
        // Given
        const data = [
            '467..114..',
            '...*......',
            '..35..633.',
            '......#...',
            '617*......',
            '.....+.58.',
            '..592.....',
            '......755.',
            '...$.*....',
            '.664.598..',
        ];
        const total = 467*35 + 755*598;

        // When && Then
        expect(strategy.resolve2(data)).toEqual(total);
    });

    it('#resolve2 Quand on reçoit une liste de string contenant des symboles \'*\', alors retourne la somme des multiplications des nombres qui l\'entourent', () => {
        // Given
        const data = [
            '............830..743.......59..955.......663..........................................367...........895....899...............826...220......',
            '.......284.....*............*.....$...+.....*...377..................*.......419.............488...*.......*...................*..-....939..',
            '....%.........976..679.461.7..........350..33.........$.380...$...151.897..........295..#......*....105.....418.............481........&....',
        ];
        const total = 830*976 + 59*7 + 663*33 + 151*897 + 895*105 + 899*418 + 826*481;

        // When && Then
        expect(strategy.resolve2(data)).toEqual(total);
    });
});
