import { Character } from './../../interface/character';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  character!: Character;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let id = params['id']; 

      let rickymorty = JSON.parse(localStorage.getItem("pagHibrida")!);
          
      if(rickymorty) {
        let characters = rickymorty.results as Array<Character>  
        let moviesfiltered = characters.filter(character => character["id"] == id)    
        this.character = moviesfiltered[0];
      }

  })

  }

}
