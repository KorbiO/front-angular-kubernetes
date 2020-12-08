import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';
import { Client } from '../models/client';
import { Categorie } from '../models/Categorie';
import { Marque } from '../models/marque';
import { sousCategorie } from '../models/sousCategorie';
import { VenteFlash } from '../models/vente-flash';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  host2 = 'http://localhost:8011/AdminService';
  
  constructor(private http: HttpClient, private authService : AuthenticationServiceService ) { }

  

// GET All Modele
  getAllClients() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/client", {headers : headers });
  }
  getAllFours() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/fournisseur", {headers : headers });
  }
  getAllCategories() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/categorie", {headers : headers });
  }
  getAllMarques() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/marque", {headers : headers });
  }
  getAllSousCategorie() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/souscategorie", {headers : headers });
  }
  getAllventeFlash() {
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    
    return this.http.get(this.host2+"/venteflash", {headers : headers });
  }

  // Get Resource
  public getResource(url){
    let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
    return this.http.get<Client>(this.host2+"/client/"+url, {headers : headers });
}
public getResourceFour(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.get<Client>(this.host2+"/fournisseur/"+url, {headers : headers }); 
}
public getResourceCat(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.get<Categorie>(this.host2+"/categorie/"+url, {headers : headers }); 
}
public getResourceMark(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.get<Marque>(this.host2+"/marque/"+url, {headers : headers }); 
}
public getResourceSousCategorie(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.get<sousCategorie>(this.host2+"/souscategorie/"+url, {headers : headers }); 
}
public getResourceVenteFlash(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt});
  return this.http.get<VenteFlash>(this.host2+"/venteflash/"+url, {headers : headers }); 
}

//Delete Resource
public deleteResource(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/client/'+url , {headers : headers }); 
}
public deleteResourceFour(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/fournisseur/'+url , {headers : headers }); 
}
public deleteResourceCat(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/categorie/'+url , {headers : headers }); 
}
public deleteResourceMark(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/marque/'+url , {headers : headers }); 
}
public deleteResourceSousCategorie(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/souscategorie/'+url , {headers : headers }); 
}
public deleteResourceVenteFlash(url){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.delete(this.host2+'/venteflash/'+url , {headers : headers }); 
}

//Post Resource
public postResource(url,data){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.post(url ,data, {headers : headers });
}
public postResourceSousCategorie(sousCategorie : sousCategorie){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.post(this.host2+'/souscategorie' ,sousCategorie, {headers : headers });
}
public postResourceVenteFlash(vf : VenteFlash){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.post(this.host2+'/venteflash' ,vf, {headers : headers });
}


// Put Resource
public putResource(url,data){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/client/"+url ,data, {headers : headers });
}
public putResourceFour(url,data){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/fournisseur/"+url ,data, {headers : headers });
}
public putResourceCat(url,data){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/categorie/"+url ,data, {headers : headers });
}
public putResourceMark(url,data){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/marque/"+url ,data, {headers : headers });
}

public putResourceSousCategories2(sousCategorie : sousCategorie){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/souscategorie/"+sousCategorie.mat ,sousCategorie, {headers : headers });
}
public putResourceVenteFlash(venteFlash : VenteFlash){
  let headers = new HttpHeaders({'auth':'Bearer '+this.authService.jwt}); 
  return this.http.put(this.host2+"/venteflash/"+venteFlash.mat ,venteFlash, {headers : headers });
}

}
