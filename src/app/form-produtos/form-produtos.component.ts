import { Component } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent {
  produto: any = {id:0, nome:'', preco: 0.0};

  cadastrar(){
    alert(this.produto.nome);
  }

}
