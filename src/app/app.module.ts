import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SliderAreaComponent } from './client/slider-area/slider-area.component';
import { SmallBannerComponent } from './client/small-banner/small-banner.component';
import { ProductAreaComponent } from './client/product-area/product-area.component';
import { MediumBannerComponent } from './client/medium-banner/medium-banner.component';
import { MostPopularComponent } from './client/most-popular/most-popular.component';
import { ShopHomeListComponent } from './client/shop-home-list/shop-home-list.component';
import { ShopServiceAreaComponent } from './client/shop-service-area/shop-service-area.component';
import { NewsletterComponent } from './client/newsletter/newsletter.component';
import { ModalComponent } from './client/modal/modal.component';
import { FooterComponent } from './client/footer/footer.component';
import { PreloaderComponent } from './client/preloader/preloader.component';
import { CartComponent } from './client/cart/cart.component';
import { BreadcrumbsComponent } from './client/cart/breadcrumbs/breadcrumbs.component';
import { ShoppingCartComponent } from './client/cart/shopping-cart/shopping-cart.component';
import { ShoppingSummeryComponent } from './client/cart/shopping-cart/shopping-summery/shopping-summery.component';
import { TotalAmountComponent } from './client/cart/shopping-cart/total-amount/total-amount.component';
import { ClientComponent } from './client/client.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { ContactComponent } from './client/contact/contact.component';
import { BlogSingleSidebarComponent } from './client/blog-single-sidebar/blog-single-sidebar.component';
import { BlogSingleComponent } from './client/blog-single-sidebar/blog-single/blog-single.component';
import { BreadcrumbsCheckoutComponent } from './client/checkout/breadcrumbs-checkout/breadcrumbs-checkout.component';
import { CheckoutBodyComponent } from './client/checkout/checkout-body/checkout-body.component';
import { BreadcrumbsContactComponent } from './client/contact/breadcrumbs-contact/breadcrumbs-contact.component';
import { ContactBodyComponent } from './client/contact/contact-body/contact-body.component';
import { MapSectionComponent } from './client/contact/map-section/map-section.component';
import { ShopGridComponent } from './client/shop-grid/shop-grid.component';
import { SingleWidgetCategoryComponent } from './client/shop-grid/single-widget-category/single-widget-category.component';
import { SingleWidgetPriceComponent } from './client/shop-grid/single-widget-price/single-widget-price.component';
import { SingleWidgetRecentPostComponent } from './client/shop-grid/single-widget-recent-post/single-widget-recent-post.component';
import { SingleWidgetManufacturersComponent } from './client/shop-grid/single-widget-manufacturers/single-widget-manufacturers.component';
import { ShopTopComponent } from './client/shop-grid/shop-top/shop-top.component';
import { ProductsComponent } from './client/shop-grid/products/products.component';
import { SingleProductComponent } from './client/shop-grid/products/single-product/single-product.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProviderComponent } from './client/provider/provider.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MainComponent } from './fournisseur/main/main.component';
import { SideNavComponent } from './fournisseur/side-nav/side-nav.component';
import { NavBarComponent } from './fournisseur/nav-bar/nav-bar.component';
import { LayoutSidenavLightComponent } from './fournisseur/layout-sidenav-light/layout-sidenav-light.component';
import { TablesComponent } from './fournisseur/tables/tables.component';
import { AdminCategorieComponent } from './admin/admin-categorie/admin-categorie.component';
import { AdminClientComponent } from './admin/admin-client/admin-client.component';
import { AdminFournisseurComponent } from './admin/admin-fournisseur/admin-fournisseur.component';
import { AdminMarkComponent } from './admin/admin-mark/admin-mark.component';

import { AdminVenteflashComponent } from './admin/admin-venteflash/admin-venteflash.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { AdminSousCategorieComponent } from './admin/admin-sous-categorie/admin-sous-categorie.component';
import { NewArticleComponent } from './fournisseur/new-article/new-article.component';
import { UpdateArticleComponent } from './fournisseur/update-article/update-article.component';
import { TableMarqueComponent } from './fournisseur/table-marque/table-marque.component';
import { NouvelleMarqueComponent } from './fournisseur/nouvelle-marque/nouvelle-marque.component';
import { VenteFlashComponent } from './fournisseur/vente-flash/vente-flash.component';
import { VenteFlashNewsComponent } from './fournisseur/vente-flash-news/vente-flash-news.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';  

import { Ng2SearchPipeModule } from'ng2-search-filter';
import { HeaderComponent } from './client/header/header.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { SousCatComponent } from './client/sous-cat/sous-cat.component';
import { BarChartComponent } from './admin/bar-chart/bar-chart.component';
import { ProfilUserComponent } from './client/profil-user/profil-user.component';
import { AllProductsComponent } from './client/all-products/all-products.component';
import { ProfilFournisseurComponent } from './fournisseur/profil-fournisseur/profil-fournisseur.component';
import { EditProfilFournisseurComponent } from './fournisseur/profil-fournisseur/edit-profil-fournisseur/edit-profil-fournisseur.component';
import { VenteFlashClientComponent } from './client/vente-flash-client/vente-flash-client.component';
import { ChiffreAffChartsComponent } from './admin/chiffre-aff-charts/chiffre-aff-charts.component';
import { FactureComponent } from './client/facture/facture.component';






@NgModule({
  declarations: [
    AdminCategorieComponent,
    AdminClientComponent,
    AdminFournisseurComponent,
    AdminMarkComponent,
    AdminSideNavComponent,
    AdminVenteflashComponent,
    AppComponent,
    HeaderComponent,
    SliderAreaComponent,
    SmallBannerComponent,
    ProductAreaComponent,
    MediumBannerComponent,
    MostPopularComponent,
    ShopHomeListComponent,
    ShopServiceAreaComponent,
    NewsletterComponent,
    ModalComponent,
    FooterComponent,
    PreloaderComponent,
    CartComponent,
    BreadcrumbsComponent,
    ShoppingCartComponent,
    ShoppingSummeryComponent,
    TotalAmountComponent,
    ClientComponent,
    CheckoutComponent,
    ContactComponent,
    BlogSingleSidebarComponent,
    BlogSingleComponent,
    BreadcrumbsCheckoutComponent,
    CheckoutBodyComponent,
    BreadcrumbsContactComponent,
    ContactBodyComponent,
    MapSectionComponent,
    ShopGridComponent,
    SingleWidgetCategoryComponent,
    SingleWidgetPriceComponent,
    SingleWidgetRecentPostComponent,
    SingleWidgetManufacturersComponent,
    ShopTopComponent,
    ProductsComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
    ProviderComponent,
    FournisseurComponent,
    MainComponent,
    SideNavComponent,
    NavBarComponent,
    LayoutSidenavLightComponent,
    TablesComponent,
    
    FournisseurComponent,
    MainComponent,
    SideNavComponent,
    NavBarComponent,
    LayoutSidenavLightComponent,
    TablesComponent,
    NewArticleComponent,
    UpdateArticleComponent,
    TableMarqueComponent,
    NouvelleMarqueComponent,
    VenteFlashComponent,
    VenteFlashNewsComponent,
    AdminSousCategorieComponent,
    ChartsComponent,
    SousCatComponent,
    BarChartComponent,
    ProfilUserComponent,
    AllProductsComponent,
    ProfilFournisseurComponent,
    EditProfilFournisseurComponent,
    VenteFlashClientComponent,
    ChiffreAffChartsComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 