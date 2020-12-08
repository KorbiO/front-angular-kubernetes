import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Articles } from '../../model/Articles';
import {  map } from 'rxjs/operators';
import { AuthenticationServiceService } from './authentication-service.service';
import { Marque } from 'src/model/Marque';
import { Fournisseur } from 'src/model/Fournisseur';

import { VenteFlash } from 'src/model/VenteFlash';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

    mesArticlesVF:any=[];

  constructor(private http: HttpClient , private authService : AuthenticationServiceService) { }

  ngOnInit(): void {

    
    
  }
  

  
  getArticles() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/servicefournisseur/article", {headers : headers })
    .pipe(map(resp=>resp));
    
}


getArticlesVF() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/servicefournisseur/venteflash", {headers : headers })
    .pipe(map(resp=>resp));
    
}

getArticle<Articles>( id:string) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/servicefournisseur/article/"+id, {headers : headers })
    .pipe(map(resp=>resp));
}

saveArticle(article:Articles) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.post("http://localhost:8011/servicefournisseur/article",article, {headers : headers })
    .pipe(map(resp=>resp));
    
}


saveArticleVF(venteF:VenteFlash) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.post("http://localhost:8011/servicefournisseur/venteflash",venteF, {headers : headers })
    .pipe(map(resp=>resp));
    
}


updateArticle(article:Articles) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.put("http://localhost:8011/servicefournisseur/article/"+article.mat,article, {headers : headers })
    .pipe(map(resp=>resp));
}


DeleteArticle(id:string) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.delete("http://localhost:8011/servicefournisseur/article/"+id, {headers : headers })
    .pipe(map(resp=>resp));
}
getMarques() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/servicefournisseur/marque" , {headers : headers })
    .pipe(map(resp=>resp));
    
}

getCategories() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/servicefournisseur/souscategorie ", {headers : headers })
    .pipe(map(resp=>resp));
    
}


saveMarque(marque:Marque) {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.post("http://localhost:8011/servicefournisseur/marque",marque , {headers : headers })
    .pipe(map(resp=>resp));
}


getUserByUserName() {
    const userJwt=this.authService.getDecodedAccessToken(localStorage.getItem('token'));
    const usernameFou=userJwt.sub;

    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/ServiceFournisseur/fournisseur/"+usernameFou , {headers : headers })
    .pipe(map(resp=>resp));
    
  }

  getFourByUserName() {
    const userJwt=this.authService.getDecodedAccessToken(localStorage.getItem('token'));
    const usernameF=userJwt.sub;
    

    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/auth-service/appUsers/"+usernameF , {headers : headers })
    .pipe(map(resp=>resp));
    
  }

  updateFournisseur(fournisseur:Fournisseur) {
    const userJwt=this.authService.getDecodedAccessToken(localStorage.getItem('token'));
    const usernameF=userJwt.sub;

    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.put("http://localhost:8011/auth-service/putFour/"+usernameF,fournisseur, {headers : headers })
    .pipe(map(resp=>resp));
}



getUserByUserNamee() {
    const userJwt=this.authService.getDecodedAccessToken(localStorage.getItem('token'));
    const usernameFou=userJwt.sub;
 
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get("http://localhost:8011/ClientService/client/"+usernameFou , {headers : headers })
    .pipe(map(resp=>resp));
    
  }






















































































































}
