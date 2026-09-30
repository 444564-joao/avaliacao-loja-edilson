import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { ProdutoDetalhe } from './components/produto-detalhe/produto-detalhe';
import { Contato } from './components/contato/contato';


export const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: Home },
{ path: 'produtos', component: Produtos },
{ path: 'produto/:id', component: ProdutoDetalhe },
{ path: 'contato', component: Contato }

];
