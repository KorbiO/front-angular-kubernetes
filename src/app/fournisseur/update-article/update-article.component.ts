import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  mode:number=1;
  article:any;
  id:string;

  ageCategorie:any={mat:"" , libelleSousCat:""};
  pageMarque:any={ mat:"", libelleMarq:""};
  pageCategorie:any={mat:"" , libelleSousCat:""};
  
  constructor( public activatedRoute: ActivatedRoute , 
                public crudService:CrudService,
                public router:Router
                )
   { 
        this.id=activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {

    this.crudService.getArticle(this.id)
    .subscribe(data=>{
        this.article=data;
    },err=>{
      console.log(err);
    });

    this.crudService.getMarques()
      .subscribe(data=>{

        this.pageMarque=data;
        console.log(data);
      },err=>{
        console.log(err);
      });

      this.crudService.getCategories()
      .subscribe(data=>{

        this.pageCategorie=data;
        console.log(data);
      },err=>{
        console.log(err);
      });


  }

  updateArticle() {
        this.crudService.updateArticle(this.article)
            .subscribe(data=>{
              console.log(data);
              alert("success update")
              this.router.navigate(['tables'])
            },err=>{
              console.log(err);
              alert("fail update")
            });

            
      
    
  }

}
