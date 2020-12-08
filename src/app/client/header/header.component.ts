import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { LigneCommande } from 'src/model/LigneCommande';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorie:any;
  sousCat:any;
  tmp : any;
  
  usernameAuth :any;
  lcs : any[]=[];
  id:string;
  items:number;
  qte : any;
  qt : any;
  i : number;
  total : any;
  art : any;
  user:any;
  host1 = 'http://localhost:8011/clientservice';
  host2 = 'http://localhost:8011/auth-service';
  lc :  LigneCommande = {mat: "",qteArtLC :0, article: {mat:"",designtationArt:"",qteStockArtVF:0,prixArtVF:0,imageName:"" ,descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
  ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:"",address:"",username:"",phoneNumber:"",password:""}}};
  constructor(private router : Router ,public authService : AuthenticationServiceService ,private http:HttpClient,public serviceClient : ServiceClientService
    ,private route : Router) { }

  ngOnInit(): void {
 
    this.onGetCategorie();
    this.onGetSousCategorie(); 
    lc : LigneCommande;
    this.total = 0;
    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      
     let qte = localStorage.getItem(clef);
     console.log(this.qte)
 
    this.serviceClient.getArticle(clef)
    .subscribe(data=>{
      this.art=data;
      console.log(data)
      this.lc ={mat : clef, qteArtLC: parseInt(qte),
        article: this.art};
        console.log(this.lc)
        this.lcs.push(this.lc);
        this.total = this.total + (parseInt(qte)* parseInt(this.art.prixArt))
 
      
 
    
    },err=>{
      console.log(err);
    }
    );
   
  }
  
  }
  
  ongetCategorie(id:string) {
 
    this.router.navigate(['cat', id])
    this.reloadPage();
 
  }
  getUserByUsername(){
    let jwt = this.authService.u1.headers.get('Authorization');
    this.authService.saveToken(jwt);
    
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(jwt);
    this.usernameAuth= objJWT.sub;
    return this.http.get(this.host1+"/client/"+this.usernameAuth).subscribe(data =>{
      
   this.user = data 
   console.log(this.user)
   console.log(this.usernameAuth)
  }
   ,err => {
     console.log(err)
   }  )
  }
  ongetUser(id:string) {
 
    this.router.navigate(['user', id])
    this.reloadPage();
 
  }
  isAuthenticated(){
    
    return this.authService.isAuthenticated()
     
  }
  
  logout(){
    return this.authService.logout();
  }
  isAdmin(){
    return this.authService.isAdmin();
  }
  isFour(){
    return this.authService.isFour();
  }
  isUser(){
    return this.authService.isUser();
  }
  onGetCategorie(){
    this.serviceClient.getCategories()
    .subscribe(data=>{

      this.categorie=data;
      console.log(data);
    },err=>{
      console.log(err);
    }
    );
  }
  onGetSousCategorie(){
    this.serviceClient.getSousCategories()
    .subscribe(data=>{

      this.sousCat=data;
      
      console.log(data);
    }
    ,err=>{
      console.log(err);
    }
    
    )
    
  
  }
  myAccount(id){
    this.router.navigate(['user',id] )
  }
  
  ongetSousCat(id:string) {
 
    this.router.navigate(['sousCat', id])
    this.reloadPage();
 
  }
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 50);
 
  }
 
  }

