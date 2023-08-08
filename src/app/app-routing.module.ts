import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreTgsComponent } from './storesDetails/store-tgs/store-tgs.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CriacaoArteDesignComponent } from './screens/productsDetail/criacao-arte-design/criacao-arte-design.component';
import { BannerComponent } from './screens/productsDetail/banner/banner.component';
import { EncadernacaoComponent } from './screens/productsDetail/encadernacao/encadernacao.component';
import { ImpressaoDigitalComponent } from './screens/productsDetail//impressao-digital/impressao-digital.component';
import { MaterialEscritorioComponent } from './screens/productsDetail/material-escritorio/material-escritorio.component';
import { PapelariaPersonalizadaComponent } from './screens/productsDetail/papelaria-personalizada/papelaria-personalizada.component';
import { PanfletosComponent } from './screens/productsDetail/panfletos/panfletos.component';
import { PlotagemComponent } from './screens/productsDetail/plotagem/plotagem.component';
import { CrachaComponent } from './screens/productsDetail/cracha/cracha.component';
import { CartaoVisitaComponent } from './screens/productsDetail/cartao-visita/cartao-visita.component';
import { CarimboComponent } from './screens/productsDetail/carimbo/carimbo.component';
import { AdesivoMetroComponent } from './screens/productsDetail/adesivo-metro/adesivo-metro.component';

const routes: Routes = [
    { path: '', component: HomeScreenComponent },
    { path: 'services', component: ProductsComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'store-tgs', component: StoreTgsComponent },
    { path: 'store-Plaza', component: StorePlazaComponent },
    { path: 'store-Pistao', component: StorePistaoComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'criacao-arte-design', component: CriacaoArteDesignComponent },
    { path: 'encadernacao', component: EncadernacaoComponent },
    { path: 'impressao-digital', component: ImpressaoDigitalComponent },
    { path: 'material-escritorio', component: MaterialEscritorioComponent },
    { path: 'produtos-personalizados', component: PapelariaPersonalizadaComponent },
    { path: 'banner', component: BannerComponent },
    { path: 'panfletos', component: PanfletosComponent},
    { path: 'plotagem', component: PlotagemComponent},
    { path: 'cracha', component: CrachaComponent},
    { path: 'cartao-visita', component: CartaoVisitaComponent},
    { path: 'carimbo', component: CarimboComponent},
    { path: 'adesivo-metro', component: AdesivoMetroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
