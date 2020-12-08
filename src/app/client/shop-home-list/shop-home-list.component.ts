import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { Articles } from 'src/model/Articles';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-shop-home-list',
  templateUrl: './shop-home-list.component.html',
  styleUrls: ['./shop-home-list.component.css']
})
export class ShopHomeListComponent implements OnInit {
  stockArticle : any
  article: any ;
  arrayreversed : any [];
  articleNotRev : any;
  numberOfView ;
  username;
  i : any;
  qte : any;
  constructor(public serviceClient : ServiceClientService ,private router : Router ) {
    
   }
   
   ngOnInit(): void {
    this.onGetReversedArticle()
    this.onGetArticle()
    

}

onGetReversedArticle(){
  this.serviceClient.getArticles()
    .subscribe(data=>{

      this.article=this.stockArticle =data ;
      this.arrayreversed = this.stockArticle._embedded.articles.reverse()
      console.log( this.arrayreversed)
    },err=>{
      console.log(err);
    }
    )
}
onGetArticle(){
  this.serviceClient.getArticles()
    .subscribe(data=>{

      this.articleNotRev=data ;
      console.log( this.articleNotRev)
      
    },err=>{
      console.log(err);
    }
    )
}

ongetArticle(id:string) {
  
return this.router.navigate(['getArticle', id])

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
}



