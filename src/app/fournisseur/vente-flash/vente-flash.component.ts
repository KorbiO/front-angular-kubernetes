import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-vente-flash',
  templateUrl: './vente-flash.component.html',
  styleUrls: ['./vente-flash.component.css']
})
export class VenteFlashComponent implements OnInit {

  listArticlesVF:any={};
  userCurrent:any={};


  constructor(public crudService:CrudService ) { }

  ngOnInit(): void {
   this.onGetArticlesVf()
   this.onGetUserByUsername()
     


  }
  onGetArticlesVf(){
    this.crudService.getArticlesVF()
    .subscribe(data=>{

      this.listArticlesVF=data;
      console.log(data);
    },err=>{
      console.log(err);
    });

  }
  onGetUserByUsername(){
    this.crudService.getUserByUserName()
    .subscribe(data=>{

      this.userCurrent=data;
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

}
