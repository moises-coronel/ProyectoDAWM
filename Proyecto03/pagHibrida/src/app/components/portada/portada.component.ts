import { Component, OnInit } from '@angular/core';
import { CharacterResourcesService } from 'src/app/services/character-resources.service';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  constructor(private resourcesService: CharacterResourcesService) {
  }

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      
      let rickymorty = localStorage.getItem("pagHibrida");
      if(!rickymorty) {
        localStorage.setItem("pagHibrida", JSON.stringify(response));
      }

    })
  }


}
