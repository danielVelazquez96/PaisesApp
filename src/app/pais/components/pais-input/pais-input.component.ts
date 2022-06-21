import { Component,EventEmitter, Output,OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  
  txtBusqueda:string=''
  doebouncer:Subject<string>=new Subject();

  
  ngOnInit(): void {
    this.doebouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe(valor=>{
        this.onDebounce.emit(valor)
      })
  }

  @Input('placeholder') placeholderText:string=''
  
  @Output() onEnter:EventEmitter<string>=new EventEmitter();
  @Output() onDebounce:EventEmitter<string>=new EventEmitter();


  teclaPresionada():void{
    this.doebouncer.next(this.txtBusqueda)
  }

  buscar():void{
    this.onEnter.emit(this.txtBusqueda);
    this.txtBusqueda='';  
    //TODO Encontrar la forma de desactivar el doebouncer, para resolver bug
  }
}
