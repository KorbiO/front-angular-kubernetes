import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {
  searchText ;
  id:string
  cat:any
  articles : any
  sousCats : any 
  constructor(public clientService : ServiceClientService , public router : Router , public activatedRoute : ActivatedRoute) {
    this.id= activatedRoute.snapshot.params['id'];
   }
 
  ngOnInit(): void {
    this.ongetCategorie()
    this.onGetArticles()
    this.onGetSousCategories()
  }
  ongetCategorie(){
 
    this.clientService.getCategorie(this.id)
      .subscribe(data=>{
  
        this.cat=data;
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
        console.log(data)
      },err=>{
        console.log(err);
      }
      )
    }
    onGetSousCategories(){
      this.clientService.getSousCategories()
      .subscribe(data=>{
       
        this.sousCats=data
        console.log(data)
      },err=>{
        console.log(err);
      }
      )
    }
    ongetArticle(id:string) {
 
      this.router.navigate(['getArticle', id])
  
    }
    ongetSousCat(id:string) {
 
      this.router.navigate(['sousCat', id])
      this.reloadPage();
  
    }
    reloadPage() {
      setTimeout(()=>{
        window.location.reload();
      }, 10);
  
    }

}
