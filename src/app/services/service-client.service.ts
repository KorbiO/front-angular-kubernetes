import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { commande } from 'src/model/commande';
import { AuthenticationServiceService } from './authentication-service.service';
import { order } from 'src/model/Order';
@Injectable({
  providedIn: 'root'
})
export class ServiceClientService {
  
  constructor(private http:HttpClient , private authService : AuthenticationServiceService) { }
  ngOnInit(): void {
    
  }
  getVenteFlash() {
    return this.http.get("http://localhost:8011/ClientService/venteflash")
    .pipe(map(resp=>resp));   
  }

  getCategories() {
    return this.http.get("http://localhost:8011/ClientService/categorie")
    .pipe(map(resp=>resp));   
  }
  getCategorie( id:string) {
    return this.http.get("http://localhost:8011/ClientService/categorie/"+id)
    .pipe(map(resp=>resp));
  }
 
  getSousCategories() {
    return this.http.get("http://localhost:8011/ClientService/souscategorie/")
    .pipe(map(resp=>resp));   
  }
 
  getSousCategorie( id:string) {
    return this.http.get("http://localhost:8011/ClientService/souscategorie/"+id)
    .pipe(map(resp=>resp));
  }
  getArticles() {
    return this.http.get("http://localhost:8011/ClientService/article")
    .pipe(map(resp=>resp));   
  }
  getArticle( id:string) {
    return this.http.get("http://localhost:8011/ClientService/article/"+id)
    .pipe(map(resp=>resp));
  }

  getFacture( id:string) {
    return this.http.get("http://localhost:8011/ClientService/facture/"+id)
    .pipe(map(resp=>resp));
  }
  postCommande(commande:commande) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.post("http://localhost:8011/clientservice/commande",commande , {headers : headers })
    .pipe(map(resp=>resp));
}
pay(order:order) {
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.post<string>("http://localhost:8011/PaypalService/pay",order , {headers : headers })
  .pipe(map(resp=>resp));
}
}
