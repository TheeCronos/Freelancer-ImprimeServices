import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageContentsComponent } from './components/page-contents/page-contents.component';
import { ProductsComponent } from './components/products/products.component';
import { BtnTopComponent } from './components/btn-top/btn-top.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StoresComponent } from './components/stores/stores.component';
import { StorePistaoComponent } from './storesDetails/store-pistao/store-pistao.component';
import { StoreTgsComponent } from './storesDetails/store-tgs/store-tgs.component';
import { StorePlazaComponent } from './storesDetails/store-plaza/store-plaza.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PapelariaPersonalizadaComponent } from './screens/productsDetail/papelaria-personalizada/papelaria-personalizada.component';
import { EncadernacaoComponent } from './screens/productsDetail/encadernacao/encadernacao.component';
import { MaterialEscritorioComponent } from './screens/productsDetail/material-escritorio/material-escritorio.component';
import { CriacaoArteDesignComponent } from './screens/productsDetail/criacao-arte-design/criacao-arte-design.component';
import { ImpressaoDigitalComponent } from './screens/productsDetail/impressao-digital/impressao-digital.component';
import { BtnParceriaComponent } from './components/btn-parceria/btn-parceria.component';
import { BannerComponent } from './screens/productsDetail/banner/banner.component';
import { CarimboComponent } from './screens/productsDetail/carimbo/carimbo.component';
import { CrachaComponent } from './screens/productsDetail/cracha/cracha.component';
import { CartaoVisitaComponent } from './screens/productsDetail/cartao-visita/cartao-visita.component';
import { PanfletosComponent } from './screens/productsDetail/panfletos/panfletos.component';
import { PlotagemComponent } from './screens/productsDetail/plotagem/plotagem.component';
import { AdesivoMetroComponent } from './screens/productsDetail/adesivo-metro/adesivo-metro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageContentsComponent,
    ProductsComponent,
    BtnTopComponent,
    CarouselComponent,
    StoresComponent,
    StorePistaoComponent,
    StoreTgsComponent,
    StorePlazaComponent,
    HomeScreenComponent,
    GalleryComponent,
    PapelariaPersonalizadaComponent,
    EncadernacaoComponent,
    MaterialEscritorioComponent,
    CriacaoArteDesignComponent,
    ImpressaoDigitalComponent,
    BtnParceriaComponent,
    BannerComponent,
    CarimboComponent,
    CrachaComponent,
    CartaoVisitaComponent,
    PanfletosComponent,
    PlotagemComponent,
    AdesivoMetroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
