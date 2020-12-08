import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { CartComponent } from './client/cart/cart.component';
import { ShopGridComponent } from './client/shop-grid/shop-grid.component';
import { LoginComponent } from './client/login/login.component';
import { RegisterComponent } from './client/register/register.component';
import { CheckoutComponent } from './client/checkout/checkout.component';
import { ContactComponent } from './client/contact/contact.component';
import { BlogSingleSidebarComponent } from './client/blog-single-sidebar/blog-single-sidebar.component';
import { ShopServiceAreaComponent } from './client/shop-service-area/shop-service-area.component';
import { ProviderComponent } from './client/provider/provider.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MainComponent } from './fournisseur/main/main.component';

import { AdminClientComponent } from './admin/admin-client/admin-client.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { AdminFournisseurComponent } from './admin/admin-fournisseur/admin-fournisseur.component';
import { AdminCategorieComponent } from './admin/admin-categorie/admin-categorie.component';
import { AdminMarkComponent } from './admin/admin-mark/admin-mark.component';
import { AdminSousCategorieComponent } from './admin/admin-sous-categorie/admin-sous-categorie.component';
import { AdminVenteflashComponent } from './admin/admin-venteflash/admin-venteflash.component';
import { NouvelleMarqueComponent } from './fournisseur/nouvelle-marque/nouvelle-marque.component';
import { UpdateArticleComponent } from './fournisseur/update-article/update-article.component';
import { TableMarqueComponent } from './fournisseur/table-marque/table-marque.component';
import { NewArticleComponent } from './fournisseur/new-article/new-article.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { SousCatComponent } from './client/sous-cat/sous-cat.component';
import { ProfilUserComponent } from './client/profil-user/profil-user.component';
import { AllProductsComponent } from './client/all-products/all-products.component';
import { ProfilFournisseurComponent } from './fournisseur/profil-fournisseur/profil-fournisseur.component';
import { EditProfilFournisseurComponent } from './fournisseur/profil-fournisseur/edit-profil-fournisseur/edit-profil-fournisseur.component';
import { VenteFlashComponent } from './fournisseur/vente-flash/vente-flash.component';
import { VenteFlashNewsComponent } from './fournisseur/vente-flash-news/vente-flash-news.component';
import { FactureComponent } from './client/facture/facture.component';


const routes: Routes = [
  {path:'fournisseur',component:FournisseurComponent},
  {path:'add-article',component:NewArticleComponent},
  {path:'add-marque',component:NouvelleMarqueComponent},

  {path:'editArticle/:id',component:UpdateArticleComponent},
  { path: 'tableMarque', component: TableMarqueComponent },
  { path: 'table-Articles', component: MainComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopGridComponent  },
  { path: 'register', component: RegisterComponent  },
  { path: 'login', component: LoginComponent  },
  {path:'checkout',component:CheckoutComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog-single-sidebar',component:BlogSingleSidebarComponent},
  {path:'client',component:ClientComponent},
  { path: 'service-area', component: ShopServiceAreaComponent },
  { path: 'provider', component: ProviderComponent },
  {path:'getArticle/:id',component:BlogSingleSidebarComponent},
  {path:'getArticleCart/:id',component:CartComponent},
  {path:'',redirectTo:'/client',pathMatch:'full'},
  { path: 'provider', component: ProviderComponent },
  { path: 'admin-client', component: AdminClientComponent },
  { path: 'admin-side-nav', component: AdminSideNavComponent },
  { path: 'admin-fournisseur', component: AdminFournisseurComponent},
  { path: 'admin-categorie', component: AdminCategorieComponent},
  { path: 'admin-mark', component: AdminMarkComponent},
  { path: 'admin-souscategorie', component: AdminSousCategorieComponent},
  { path: 'admin-venteflash', component: AdminVenteflashComponent},
  { path: 'charts', component: ChartsComponent},
  { path: 'sousCat/:id', component:SousCatComponent },
  { path: 'user', component:ProfilUserComponent },
  { path: 'cat/:id', component:ShopGridComponent },
  { path: 'products', component:AllProductsComponent },
  {path:'profil-seller',component:ProfilFournisseurComponent},
  {path:'edit-profil-seller/:username',component:EditProfilFournisseurComponent},
  {path:'vente-flash-store',component:VenteFlashComponent},
  { path: 'facture', component: FactureComponent},
  {path:'add-article-vente-flash',component:VenteFlashNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
