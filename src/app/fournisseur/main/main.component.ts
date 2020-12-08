import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/model/Articles';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  pageArticles:any={};
  userObj:any={};
  
  constructor(private http:HttpClient , public crudService:CrudService
              , public router:Router ) { }

  ngOnInit(): void {
    this.crudService.getArticles()
      .subscribe(data=>{

        this.pageArticles=data;
        console.log(data);
      },err=>{
        console.log(err);
      });


      this.crudService.getUserByUserName()
      .subscribe(data=>{

        this.userObj=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
    
  }
  

  

  

  onEditArticle(id:string) {

    this.router.navigate(['editArticle', id])

  }

  onDeleteArticle(c:Articles) { 
    let beSure=window.confirm("are you sure!!!");
    if(beSure===true){
      this.crudService.DeleteArticle(c.mat)
      .subscribe(data=>{
        this.pageArticles._embedded.articles.splice(
          this.pageArticles._embedded.articles.indexOf(c),1
        );          console.log(data)


      },err=>{
        console.log(err);
      })
  }

    }

    


}
