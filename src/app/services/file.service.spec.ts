import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { AppModule } from 'src/app/app.module';
import { FileService } from 'src/app/services/file.service';

describe('FileService', () => {
    let service: FileService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => MockBuilder(FileService, AppModule).replace(HttpClientModule, HttpClientTestingModule));

    beforeEach(() => {
        service = TestBed.inject(FileService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('FileService should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#read Quand on reçoit le chemin d\'un fichier à lire, alors on récupère son contenu', waitForAsync(() => {
        // Given
        const ASCII_BACKSPACE = 10;
        const ASCII_CARRIAGE_RETURN = 13;
        const separator = String.fromCharCode(ASCII_CARRIAGE_RETURN) + String.fromCharCode(ASCII_BACKSPACE);

        // When
        service.read('toto.txt')
            .then((file: string[]) => expect(file).toEqual([
                'Il était un',
                'Petit navire,',
                '',
                'Il était un',
                'Petit navire...',
            ]));

        // Then
        const testRequest: TestRequest = httpTestingController.expectOne('assets/toto.txt');
        testRequest.flush(`Il était un${separator}Petit navire,${separator}${separator}Il était un${separator}Petit navire...`);
        expect(testRequest.request.method).toEqual('GET');
        httpTestingController.verify();
    }));

    it('#read Quand on reçoit le chemin d\'un fichier qui n\'existe pas, alors on renvoie une liste vide par défaut', waitForAsync(() => {
        // When
        service.read('toto.txt')
            .then((file: string[]) => expect(file).toEqual([]));

        // Then
        const testRequest: TestRequest = httpTestingController.expectOne('assets/toto.txt');
        testRequest.flush({ message: { message: 'AÏE, un truc a cassé...' } }, { status: 400, statusText: '' });
        expect(testRequest.request.method).toEqual('GET');
        httpTestingController.verify();
    }));
});
