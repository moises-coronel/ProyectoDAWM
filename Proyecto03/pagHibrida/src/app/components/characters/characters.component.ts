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
    let rickymorty = JSON.parse(localStorage.getItem("rickymorty")!);
    //console.log(rickymorty.results);
      
    if(rickymorty) {
      this.characters = rickymorty as Character[];
      //console.log(Array.from(this.characters));
    }
    
  }
}