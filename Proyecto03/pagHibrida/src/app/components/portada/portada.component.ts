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
    
    
    let arreglo; new Object;
    const key= "rickymorty"
    
    /**
    this.resourcesService.getData(1).subscribe(response => {
      
      let rickymorty = localStorage.getItem(key);
      if(!rickymorty) {
        localStorage.setItem(key, JSON.stringify(response));
      }

    }) 
    */
    
    for (let i=1 ; i<=4;i++ ){

      if (i==1){
        this.resourcesService.getData(i).subscribe(response => {
          localStorage.setItem(key, JSON.stringify(Object.values(response)[1]));    
        }) 
      }else{
      let rickymorty = JSON.parse(localStorage.getItem(key)!);
      //localStorage.removeItem(key)
      let ids=new Array;
      for(let ob in rickymorty){
        console.log(rickymorty[ob].id);
        ids.push(rickymorty[ob].id)
      }
      this.resourcesService.getData(i).subscribe(response => {
    
        
        for (let ob in Object.values(response)[1]){
          
        if(!(ids.includes(Object.values(response)[1][ob].id))){
          rickymorty.push(Object.values(response)[1][ob])
        }
        
        }
         //console.log(Object.values(response)[1][0])
         
         localStorage.setItem(key, JSON.stringify(rickymorty));
        
        }) 
      }

    }
    
    //console.log(rickymorty);
    
    //arreglo.push(rickymorty);
    
      }


}
