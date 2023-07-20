import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';

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

  addProduto(produto:any){
    alert(produto.nome + "cadastrado com sucesso!");
    this.listaProdutos.push(produto)
  }
  
}
