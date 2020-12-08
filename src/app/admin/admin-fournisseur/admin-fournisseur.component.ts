import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Fournisseur } from 'src/app/models/fournisseur';

@Component({
  selector: 'app-admin-fournisseur',
  templateUrl: './admin-fournisseur.component.html',
  styleUrls: ['./admin-fournisseur.component.css']
})
export class AdminFournisseurComponent implements OnInit {
  fournisseurs : any;
  tmp : any ;
  show=true 
  mode ="list";
  searchText ;
  constructor(private router : Router , private adminClientService : AdminServiceService  ) { }

  ngOnInit(): void {
    this.onGetAllFournisseurs();
  }
  onGetAllFournisseurs (){
    this.adminClientService.getAllFours().subscribe(data => {
      this.tmp = data ;
      this.fournisseurs = this.tmp._embedded.fournisseurs ;
  }, err => {
    console.log(err);
  })
  }
  onDeleteFournisseur(fournisseur){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(fournisseur);
      this.adminClientService.deleteResourceFour(fournisseur.mat).subscribe(data => { 
        if (this.fournisseurs.length <= 1 && this.fournisseurs.length >= 0) {
          this.show=false
          
        }
      this.onGetAllFournisseurs();
 
    }, err => {
        console.log(err);
    })
  }
  onNewFournisseur(){
    this.mode = 'new-cat';
  }
  onSaveFournisseur(data){
    let url = this.adminClientService.host2 + "/fournisseur" ;
    this.adminClientService.postResource(url,data)

    .subscribe(data => {
      this.mode= 'list' ;
      this.onGetAllFournisseurs();
      
  
    },err => {
        console.log(err);
    })
  }
  currentFournisseur : Fournisseur= {
    
    id  : ' ' ,
    mat : ' ' ,
    username : ' ' ,
    phoneNumber : ' ' ,
    password : ' ' ,
    address : ' ' 
    
}
onEditFournisseur(data){
  console.log(data);
  
  this.adminClientService.getResourceFour(data.mat)
 
  .subscribe(fournisseur => {
 
    this.currentFournisseur = fournisseur; 

    console.log(this.currentFournisseur.username)
 
  }, err => {
    console.log(err);
  })
}
onUpdateFournisseur (data) { 
  this.adminClientService.putResourceFour(this.currentFournisseur.mat , data )
  .subscribe(data => {
   
    this.mode = "list";
    this.onGetAllFournisseurs(); 
    
  }, err => {
    console.log(err);
  })
}

}
