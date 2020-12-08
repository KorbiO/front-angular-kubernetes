import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie';

@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.css']
})
export class AdminCategorieComponent implements OnInit {
  categories : any;
  tmp : any ;
  mode ="list";
  show=true
  searchText ;
  constructor(private adminClientService : AdminServiceService , private router : Router) { }

  ngOnInit(): void {
    this.onGetAllCategories();
  }
  onGetAllCategories (){
    this.adminClientService.getAllCategories().subscribe(data => {
      this.tmp = data ;
      this.categories = this.tmp._embedded.categories ;

  }, err => {
    console.log(err);
   
  })
  }
  onDeleteCategorie(categorie){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(categorie);
      this.adminClientService.deleteResourceCat(categorie.mat).subscribe(data => { 
        if (this.categories.length <= 1 && this.categories.length >= 0) {
          this.show=false
          
        }
      this.onGetAllCategories();
   
    }, err => {
        console.log(err);
    })
  }
  onNewCategorie(){
    this.mode = 'new-cat';
  }
  onSaveCategorie(data){
    let url = this.adminClientService.host2 + "/categorie" ;
    this.adminClientService.postResource(url,data)

    .subscribe(data => {
      this.mode= 'list' ;
      this.onGetAllCategories();
      
      
    },err => {
        console.log(err);
    })
  }

  currentCategorie : Categorie= {
    
    idCat  : ' ' ,
    mat : ' ' ,
    libelleCat : ' ' 
}
onEditCategorie(data){
  console.log(data);
  
  this.adminClientService.getResourceCat(data.mat)
 
  .subscribe(categorie => {
 
    this.currentCategorie = categorie; 

    console.log(this.currentCategorie)
 
  }, err => {
    console.log(err);
  })
}
onUpdateCategorie (data) { 
  this.adminClientService.putResourceCat(this.currentCategorie.mat , data )
  .subscribe(data => {
    console.log("omar");
    this.mode = "list";
    this.onGetAllCategories(); 
    
  }, err => {
    console.log(err);
  })
}

}
