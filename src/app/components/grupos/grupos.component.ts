import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Grupo } from 'src/app/models/Grupo';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  public grupos: Grupo[] = [];
  @Output() grupoClicado = new EventEmitter();
  constructor(private http:HttpService) {
    this.grupos.push(

      new Grupo(1,"camiseta"),
      new Grupo(2,'tenis'),
      new Grupo(3,'boné')
      )



    this.http.getGrupo().subscribe(
      (data) => { 
        this.grupos = data
      }
    )
  }


  ngOnInit(): void {
  }

}
