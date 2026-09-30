import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos = [
    {
      id: 1,
      nome: 'Notebook Acer Aspire 5',
      preco: 3499.90,
      descricao: 'Notebook para estudos, trabalho e programação.'
    },
    {
      id: 2,
      nome: 'Mouse Logitech G203',
      preco: 149.90,
      descricao: 'Mouse gamer com sensor de alta precisão.'
    },
    {
      id: 3,
      nome: 'Teclado Mecânico',
      preco: 249.90,
      descricao: 'Teclado mecânico ideal para jogos e programação.'
    }
  ];

  getProdutos() {
    return this.produtos;
  }

  getProduto(id: number) {
    return this.produtos.find(produto => produto.id === id);
  }
}
