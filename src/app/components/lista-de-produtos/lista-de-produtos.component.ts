import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/models/Produto';
import { HttpService } from 'src/app/services/http.service';
import { Grupo } from 'src/app/models/Grupo';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  @Input() grupoAtivo: number = 10;

  produtosFiltro = this.grupoAtivo;
  
  ativo = {
    codGrupo : this.grupoAtivo
  }

  public produtos: Produto[] = []
  public exibirCategoria: Produto[] = []
  constructor(private http:HttpService) {
    this.http.getProduto().subscribe(
      (data) => { 
        this.produtos = data
        this.exibirCategoria = data
      }
    )
  
  
  }

  ativarGrupo(codGrupo:number) {
    if (codGrupo == 0) {
      this.exibirCategoria = this.produtos
    } else {
      this.exibirCategoria = this.produtos.filter(x => x._codGrupo == codGrupo)
    }
  }
  


  ngOnInit(): void {
  }

}
