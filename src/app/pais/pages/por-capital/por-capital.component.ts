import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  txtBusqueda:string="";
  hayError:boolean= false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[]


  buscar(txtBusqueda:string):void{
    this.paisesSugeridos=[]
    this.hayError=false;
    this.txtBusqueda=txtBusqueda;
    
    this.paisSerive.getPaisPorCapital(txtBusqueda)
      .subscribe({
        next: (paises)=>{
          this.paises=paises;
          },
        error: (error) => { 
          console.log(error)
          this.hayError=true; 
          this.paises=[]
          }
       });
  }

  sugerencias(txtbuscar:string):void{
    this.hayError=false

    this.paisSerive.getPaisPorCapital(txtbuscar)
      .subscribe( { 
        next: (paises)=>this.paisesSugeridos=paises.splice(0,5),
        error: (error)=>this.paisesSugeridos=[]
       }
       )
  }

  constructor(private paisSerive:PaisService){}
}
