import { Character } from './../../interface/character';
import { Component } from '@angular/core';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters !: Character[];

  constructor() {

    /* Leer desde el localStorage */
    let rickymorty = JSON.parse(localStorage.getItem("pagHibrida")!);
    console.log(rickymorty.results);
      
    if(rickymorty) {
      this.characters = rickymorty.results as Character[];
      //console.log(Array.from(this.characters));
    }
    
  }
}