import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';

  paises:Country[]=[]

  constructor(private paisService:PaisService) { }

  getClassCss_RegionActiva(region:string):string{
    return `btn ${(region==this.regionActiva)? 'btn-primary': 'btn-outline-primary'} ms-2`
  }

  activarRegion(region:string){
    if(region===this.regionActiva)return
    this.regionActiva=region;

    this.paisService.getPaisesPorRegion(region)
      .subscribe((paises) => { 
        this.paises=paises;
       })
  }

}
