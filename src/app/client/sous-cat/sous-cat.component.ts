import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sous-cat',
  templateUrl: './sous-cat.component.html',
  styleUrls: ['./sous-cat.component.css']
})
export class SousCatComponent implements OnInit {
  searchText ;
  id: string ; 
  sousCat : any; 
  idArt : any; 
  art : any; 
 
  constructor( public clientService: ServiceClientService , public router : Router , public activatedRoute : ActivatedRoute) { 
    this.id= activatedRoute.snapshot.params['id'];
  }
  articles : any ;
  ngOnInit(): void {
 
    
  this.ongetSousCat();
  this.onGetArticles();
  
  }
 
  
  ongetSousCat(){
 
  this.clientService.getSousCategorie(this.id)
    .subscribe(data=>{
 
      this.sousCat=data;
      console.log(data)
    },err=>{
      console.log(err);
    }
    )
  }
  onGetArticles(){
    this.clientService.getArticles()
    .subscribe(data=>{
     
      this.articles=data
      
    },err=>{
      console.log(err);
    }
    )
  }
  onFilterArticle(){

  }
  ongetArticle(id:string) {
 
    this.router.navigate(['getArticle', id])
 
  }
  ongetArticleCart(id) {
 
    let beSure=window.confirm("Do you want to continue shopping ?");
    if(beSure===true){
      this.router.navigate(['client'])
    
    }
    else {
      this.router.navigate(['getArticleCart', id])
    }
  }
 

}
