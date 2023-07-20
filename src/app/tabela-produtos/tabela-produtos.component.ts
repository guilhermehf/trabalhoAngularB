import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent {
  @Input() titulo = "Tabela de Produtos";

  listaProdutos: any[];

  constructor() 
  {
    this.listaProdutos = [
    { id:1, nome: "Produto 1", preco:10},
    { id:2, nome: "Produto 2", preco:20},
    { id:3, nome: "Produto 3", preco:30},
    { id:4, nome: "Produto 4", preco:40},
    { id:5, nome: "Produto 5", preco:50}

    ]
  }

}
