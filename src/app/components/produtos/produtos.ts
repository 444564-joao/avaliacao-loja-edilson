import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-produtos',
  imports: [RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class Produtos {
  private produtosService = inject(ProdutosService);

  produtos = this.produtosService.getProdutos();
}