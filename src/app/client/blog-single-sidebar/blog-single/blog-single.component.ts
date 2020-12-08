import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { getHtmlTagDefinition } from '@angular/compiler';
import { SousCategorie } from 'src/model/SousCategorie';


@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {
  i : any ;
  qte : any ;
  article: any={};
  art : any={};
  cat:any ={};
  sousCat :any={};
  
  id: string ; 
  tmp2:any={};
  id2:string;

  constructor(public serviceClient: ServiceClientService , public activatedRoute: ActivatedRoute ,public router:Router) {
    this.id= activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.serviceClient.getSousCategories()
    .subscribe(data=>{

      this.sousCat=data;
      
    },err=>{
      console.log(err);
    }
    );
    this.serviceClient.getArticle(this.id)
    .subscribe(data=>{

      this.article=data;
      this.tmp2=this.article.libelleSousCat.categorie.libelleCat;
     
    },err=>{
      console.log(err);
    }
    );
    
    this.serviceClient.getCategories()
    .subscribe(data=>{

      this.cat=data;
      
    },err=>{
      console.log(err);
    }
    );
    this.serviceClient.getArticles()
    .subscribe(data=>{

      this.art=data;
    
    },err=>{
      console.log(err);
    }
    );
    

  }
  ongetSousCat(id:string) {
 
    this.router.navigate(['sousCat', id])
    
 
  }
  ongetArticle(id) {

    this.router.navigateByUrl("getArticle/"+id)
    this.reloadPage();
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

  
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);

  }
  

  

 

}
