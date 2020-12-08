import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';
import { VenteFlash } from 'src/model/VenteFlash';
import { Articles } from 'src/model/Articles';

@Component({
  selector: 'app-vente-flash-news',
  templateUrl: './vente-flash-news.component.html',
  styleUrls: ['./vente-flash-news.component.css']
})
export class VenteFlashNewsComponent implements OnInit {

  VenteF:any=new VenteFlash();
  articleVF:any = new Articles();
  pagearticles:any={};
  userObj:any={};
  venteFlash:any={};

  mesArticlesVF:any=[];
  mesArticleCleanVF:any= []
  
constructor(public crudService:CrudService ) { } 

  ngOnInit(): void {
  
this.onGetArticles()
this.onGetVenteFlash()
this.onGetUserByUsername()
console.log(this.mesArticlesVF)


  }
  onGetArticles(){
    this.crudService.getArticles()
      .subscribe(data=>{

        this.pagearticles=data;
        console.log(data);
      },err=>{
        console.log(err);
      });

     
  }
 
  onGetVenteFlash(){
    this.crudService.getArticlesVF()
    .subscribe(data=>{

      this.venteFlash=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
  }
  onGetUserByUsername(){

    this.crudService.getUserByUserName()
    .subscribe(data=>{

      this.userObj=data;
      console.log(this.userObj.username)
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
foudnArticle:any = new Articles();
  addToList() {
    this.mesArticlesVF.push(this.articleVF);
  

     console.log(this.mesArticlesVF[0].mat)
     this.crudService.getArticle(this.mesArticlesVF[0].mat).subscribe(data => {
      this.foudnArticle =data;
      this.foudnArticle.qteStockArtVF = this.articleVF.qteStockArtVF
      this.foudnArticle.prixArtVF = this.articleVF.prixArtVF
      this.mesArticlesVF = []
      this.mesArticlesVF.push(this.foudnArticle);
      console.log(this.mesArticlesVF)
      console.log(this.foudnArticle)
      console.log(data)

     
    
      
          })
 
}
   
  saveArticleVF() {
  
    console.log(this.mesArticlesVF)
    console.log(this.venteFlash._embedded.venteFlashes[0].mat);
    this.VenteF.mat=this.venteFlash._embedded.venteFlashes[0].mat;
    this.VenteF.articleVenteFlash=this.mesArticlesVF;
    
    console.log(this.VenteF);
    this.crudService.saveArticleVF(this.VenteF)
      .subscribe(data=>{
        console.log(data);
        this.VenteF=data;
        console.log(this.VenteF);
       this.mesArticlesVF=[];
  
        console.log(data);
      },err=>{
        console.log(err);
      }
        ) 
  }

}
