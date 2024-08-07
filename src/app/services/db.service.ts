import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  apiUrl: string = environment.api_url;
  privateKey: string = environment.private_key;
  publicKey: string = environment.public_key;

  constructor(private http: HttpClient) {}

  generateHash(timeStamp: any) {
    return Md5.hashStr(timeStamp + this.privateKey + this.publicKey);
  }

  //API Calls for Comics

  getComicById(comicId: number): Observable<any> {
    const timeStamp = new Date().getTime().toString();
    const hash = this.generateHash(timeStamp);

    return this.http.get(
      `${this.apiUrl}comics/${comicId}?apikey=${this.publicKey}&ts=${timeStamp}&hash=${hash}`
    );
  }

  getComicsThisWeek(): Observable<any> {
    const timeStamp = new Date().getTime().toString();
    const hash = this.generateHash(timeStamp);

    return this.http.get(
      `${this.apiUrl}comics?dateDescriptor=thisWeek&orderBy=-onsaleDate&limit=10&apikey=${this.publicKey}&ts=${timeStamp}&hash=${hash}`
    );
  }

  //API Calls for Characters

  getCharacters(limit: number): Observable<any> {
    const timeStamp = new Date().getTime().toString();
    const hash = this.generateHash(timeStamp);
    return this.http.get(
      `${this.apiUrl}characters?orderBy=name&limit=${limit}&apikey=${this.publicKey}&ts=${timeStamp}&hash=${hash}`
    );
  }

  getCharacterById(characterId: number): Observable<any> {
    const timeStamp = new Date().getTime().toString();
    const hash = this.generateHash(timeStamp);
    return this.http.get(
      `${this.apiUrl}characters/${characterId}?apikey=${this.publicKey}&ts=${timeStamp}&hash=${hash}`
    );
  }

  getComicsByCharacterId(characterId: number, limit: number): Observable<any> {
    const timeStamp = new Date().getTime().toString();
    const hash = this.generateHash(timeStamp);
    return this.http.get(
      `${this.apiUrl}characters/${characterId}/comics?limit=${limit}&apikey=${this.publicKey}&ts=${timeStamp}&hash=${hash}`
    );
  }
}
