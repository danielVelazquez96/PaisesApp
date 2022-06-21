import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      li{
        cursor: pointer;
      }
    ` 
  ]
})
export class PorPaisComponent  {

  txtbusqueda:string="";
  hayerror:boolean= false;
  paises:Country[]=[];
  paisesSugeridos:Country[]=[]


  buscar(txtbusqueda:string):void{
    this.paisesSugeridos=[];
    this.hayerror=false;
    this.txtbusqueda=txtbusqueda;
    
    this.paisSerive.getPaisPorPais(txtbusqueda)
      .subscribe({
        next: (paises)=>{
          this.paises=paises;
          },
        error: (error) => { 
          console.log(error)
          this.hayerror=true; 
          this.paises=[]
          }
       });
  }

  obtenerSugerencias(txtbuscar:string):void{

    this.hayerror=false
    
    this.paisSerive.getPaisPorPais(txtbuscar)
      .subscribe({ 
        next:(paises)=>this.paisesSugeridos=paises.splice(0,5),
       error: (error)=>this.paisesSugeridos=[],
      })
  }

  constructor(private paisSerive:PaisService){}
}

