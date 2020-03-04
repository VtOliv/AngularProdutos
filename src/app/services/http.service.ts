import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from '../models/Grupo';
import { map } from "rxjs/operators";
import { Produto } from '../models/Produto';


const URL: string = "https://rdcrud.herokuapp.com";

function adaptadorDeGrupo(data:any[]) {
  return data.map(
    (el) => {return new Grupo(el.COD_GRUPO , el.DESC)}
  )
}

function adaptadorProdutos(data:any[]) {
  return data.map(
    (el) => { return new Produto(el.COD_PRODUTO,el.DESC,el.REG_ANVISA,el.FL_CONTROLADO,el.COD_GRUPO)}
  )
}
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }

  getGrupo(){
    let obs= this.http.get(URL+"/grupos");
    return obs.pipe(
      map(adaptadorDeGrupo));

  }
  getProduto(){
    let prod = this.http.get(URL+'/produtos');
    return prod.pipe(
      map(adaptadorProdutos)
    )
  }

}

