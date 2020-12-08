import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {
  
  i : any;
  qte : any ;
  article: any;
  sousCat:any;
  searchText ;
  constructor(public clientService : ServiceClientService,public auth :AuthenticationServiceService, public router : Router ){ }

  ngOnInit(): void {
  this.onGetSousCategories();
  this.onGetArticles();
  
  }

  onGetArticles(){
    this.clientService.getArticles()
    .subscribe(data=>{
    this.article=data;
    
    },err=>{
      console.log(err);
    }
    )
  }
  onGetSousCategories(){
         
    this.clientService.getSousCategories()
    .subscribe(data=>{

      this.sousCat=data;
      
      console.log(data);
     
    }
    ,err=>{
      console.log(err);
    }
    )
  }
  ongetArticle(id:string) {

    this.router.navigate(['getArticle', id])

  }
  ongetArticleCart(id) {

    let beSure=window.confirm("Do you want to continue shopping ?");
    if(beSure===true){
      //this.localst.store("article",this.art);
      this.i = 0;
      do{
        let clef = localStorage.key(this.i);
        if (id == clef){
          this.qte = localStorage.getItem(clef);
          this.qte = parseInt( this.qte) + 1 ;
          this.i = localStorage.length
 
        }
        else{
          this.qte = 1;
          this.i = this.i +1 ;
        }
 
      }while(this.i < localStorage.length);
    
      localStorage.setItem(id, this.qte);
 
      this.router.navigate(['client']);
 
    
    }
    else {
      this.i = 0;
      do{
        let clef = localStorage.key(this.i);
        if (id == clef){
          this.qte = localStorage.getItem(clef);
          this.qte = parseInt( this.qte) + 1 ;
          this.i = localStorage.length
 
        }
        else{
          this.qte = 1;
          this.i = this.i +1 ;
        }
 
      }while(this.i < localStorage.length);
      //this.localst.store("article",this.art);
      localStorage.setItem(id, this.qte);
    this.router.navigate(['getArticleCart', id]);
 
    
 
    }
  }
  ongetSousCat(id:string) {
 
    this.router.navigate(['sousCat', id])
  }
}
