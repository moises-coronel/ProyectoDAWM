import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterResourcesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://rickandmortyapi.com/api/character/')
  }
}
