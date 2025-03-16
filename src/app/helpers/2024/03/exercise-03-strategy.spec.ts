import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { Exercise03Strategy } from 'src/app/helpers/2024/03/exercise-03-strategy';

describe('Exercise03Strategy_2024', () => {
    let strategy: Exercise03Strategy;

    beforeEach(() => MockBuilder(Exercise03Strategy, AppModule));

    beforeEach(() => {
        strategy = TestBed.inject(Exercise03Strategy);
    });

    it('Exercise03Strategy should be created', () => {
        expect(strategy).toBeTruthy();
    });

    it('#resolve Quand on reçoit une liste de lignes, alors calcule la somme des multiplications cachées dans les lignes', () => {
        // Given
        const data: string[] = [
            'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)',
            '+mul(32,64]then(mul(11,8)mul(8,5))'
        ];
        // mul(2,4) => 8
        // mul(5,5) => 25
        // mul(11,8) => 88
        // mul(8,5) => 40
        // total => 161

        // When && Then
        expect(strategy.resolve(data)).toEqual(161);
    });

    it(`#resolve2 Quand on reçoit une liste de lignes, alors ne garde que le texte activé par le début du string ou un "do()", et désactivé par un "don't(),"`
        + ` et calcule la somme des multiplications cachées dans les lignes`, () => {
        // Given
        const data: string[] = [
            `[#from())when()/}+%mul(2,7)mul(7,2)}}don't(){:,$+mul(395,45)[; what()!mul(328,373)?!`,
            `?why()mul(56,627):-?+-what()from()(}mul(55,437)(*%&$do()<mul(1,13)$?where()~`
        ];
        // mul(2,7) => 14
        // mul(7,2) => 14
        // mul(1,13) => 13
        // total => 41

        // When && Then
        expect(strategy.resolve2(data)).toEqual(41);
    });
});
