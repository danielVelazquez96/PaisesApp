import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl:string='https://restcountries.com/v2'

  constructor(private http:HttpClient) { }


  getPaisPorPais(pais:String):Observable<Country[]>{
    const url=`${this._apiUrl}/name/${pais}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorCapital(capital:String):Observable<Country[]>{
    const url=`${this._apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlphaCode(pais:string):Observable<Country>{
    const url=`${this._apiUrl}/alpha/${pais}`
    return this.http.get<Country>(url);
  }

  getPaisesPorRegion(region:string):Observable<Country[]>{
    const url=`${this._apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
  }

}
