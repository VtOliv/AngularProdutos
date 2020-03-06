import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Produto } from 'src/app/models/Produto';


@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent{
  formProduto:FormGroup;

  constructor() { }

  createForm(produto: Produto) {
    this.formProduto= new FormGroup({
    codProd: new FormControl(produto._codProd), 
    desc: new FormControl(produto._desc),
    regAnvisa: new FormControl(produto._regAnvisa),
    controlado: new FormControl(produto.controlado),
    codGrupo: new FormControl(produto._codGrupo)
  });


  }
  addProduto() {
    this.createForm(new Produto())
  }

  enviarProduto() {
    console.log(this.formProduto)
  }

}

