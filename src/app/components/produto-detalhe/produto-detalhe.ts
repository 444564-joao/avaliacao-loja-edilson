
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos';

@Component({
  selector: 'app-produto-detalhe',
  imports: [RouterLink],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.scss'
})
export class ProdutoDetalhe {

  produto: any;

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtosService.getProduto(id);
  }

}