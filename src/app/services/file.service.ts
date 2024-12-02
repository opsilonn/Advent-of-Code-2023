import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FileService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * Permet de lire le contenu d'un fichier
     * @param filePath Chemin du fichier à ouvrir
     * @returns Le contenu du fichier
     */
    public async read(filePath: string): Promise<string[]> {
        const ASCII_BACKSPACE = 10;
        const ASCII_CARRIAGE_RETURN = 13;
        const SEPARATOR = String.fromCharCode(ASCII_CARRIAGE_RETURN) + String.fromCharCode(ASCII_BACKSPACE);

        try {
            const fileContent: string = await firstValueFrom(this.httpClient.get(`assets/${filePath}`, { responseType: 'text' }));
            return fileContent.split(SEPARATOR);
        } catch (e: unknown) {
            return [];
        }
    }
}
