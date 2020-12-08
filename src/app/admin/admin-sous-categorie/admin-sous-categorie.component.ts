import { Component, OnInit } from '@angular/core';
import { sousCategorie } from 'src/app/models/sousCategorie';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sous-categorie',
  templateUrl: './admin-sous-categorie.component.html',
  styleUrls: ['./admin-sous-categorie.component.css']
})
export class AdminSousCategorieComponent implements OnInit {

  show=true
  sousCategories : any;
  tmp : any ;
  tmp2 : any ;
  mode ="list";
  currentsousCategorie : sousCategorie= {
    
    idSousCat  : ' ' ,
    mat : ' ' ,
    libelleSousCat : ' ' ,
    categorie : { idCat : ' ' , mat : ' ' , libelleCat : ' '}
}
sousCategorie : sousCategorie= {
    
  idSousCat  : ' ' ,
  mat : ' ' ,
  libelleSousCat : ' ' ,
  categorie : { idCat : ' ' , mat : ' ' , libelleCat : ' '}
}

categories ;
searchText = ' ';

  constructor(private adminClientService : AdminServiceService , private router : Router
    ) { }

  ngOnInit(): void {
    this.onGetAllsousCategorie();
    this.onGetAllCategories();
    
  }
  
  onGetAllCategories (){ 

    this.adminClientService.getAllCategories().subscribe(data => {
      this.tmp2 = data ;
      this.categories = this.tmp2._embedded.categories ;
console.log(this.categories)
  }, err => {
    console.log(err);
   
  })
  }
  onGetAllsousCategorie (){
    this.adminClientService.getAllSousCategorie().subscribe(data => {
      console.log(data)
      this.tmp = data ;
       this.sousCategories = this.tmp._embedded.sousCategories ;
        if (this.sousCategories=='null'){
          this.sousCategories={}
          console.log ('nulllll')
        }
    

  }, err => {
    console.log(err);
   
  })
  }
  onDeletesousCategorie(sousCategorie){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(sousCategorie);
      this.adminClientService.deleteResourceSousCategorie(sousCategorie.mat).subscribe(data => { 
        console.log(data)
        if (this.sousCategories.length <= 1 && this.sousCategories.length >= 0) {
          this.show=false
          console.log(this.sousCategories.length)
        }
      this.onGetAllsousCategorie();
   
    }, err => {
        console.log(err);
    })
  }
  onNewSousCategorie(){
    this.mode = 'new-cat';
  }
 
  onSaveSousCategorie(){
    console.log(this.sousCategorie)
     this.adminClientService.postResourceSousCategorie(this.sousCategorie)
 
     .subscribe(data => {
       console.log(data)
       this.mode= 'list' ;
       this.onGetAllsousCategorie();
  
     },err => {
         console.log(err);
     })
   }
  
onEditsousCategorie(sous : sousCategorie){
  console.log(sous);
  
  this.adminClientService.getResourceSousCategorie(sous.mat)
 
  .subscribe(sousCategorie => {
 
    this.currentsousCategorie = sousCategorie; 

    console.log(this.currentsousCategorie.categorie)
 
  }, err => {
    console.log(err);
  })
}


onUpdateSousCategorie () { 
  this.adminClientService.putResourceSousCategories2(this.currentsousCategorie )
  .subscribe(data => {
    console.log(data);
    this.mode = "list";
    this.onGetAllsousCategorie(); 
    
  }, err => {
    console.log(err);
  })
}

}
