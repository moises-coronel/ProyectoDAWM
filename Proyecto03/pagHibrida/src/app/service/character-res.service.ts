import { Injectable } from '@angular/core';
import { Character } from '../interface/character';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterResService {
  private apiUrl = "https://rickandmortyapi.com/api/character/"; // URL to web api
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl)
  }
}
