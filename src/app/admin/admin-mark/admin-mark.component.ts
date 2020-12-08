import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { Marque } from 'src/app/models/marque';

@Component({
  selector: 'app-admin-mark',
  templateUrl: './admin-mark.component.html',
  styleUrls: ['./admin-mark.component.css']
})
export class AdminMarkComponent implements OnInit {
  marques : any;
  tmp : any ;
  mode ="list";
  show=true
  searchText ;
  constructor(private adminClientService : AdminServiceService , private router : Router) { }

  ngOnInit(): void {
    this.onGetAllMarques();
  }
  onGetAllMarques (){
    this.adminClientService.getAllMarques().subscribe(data => {
      this.tmp = data ;
      this.marques = this.tmp._embedded.marques ;

  }, err => {
    console.log(err);
   
  })
  }
  onDeleteMarque(marque){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(marque);
      this.adminClientService.deleteResourceMark(marque.mat).subscribe(data => { 
        if (this.marques.length <= 1 && this.marques.length >= 0) {
          this.show=false
          
        }
      this.onGetAllMarques();
   
    }, err => {
        console.log(err);
    })
  }
  onNewMarque(){
    this.mode = 'new-cat';
  }
  onSaveMarque(data){
    let url = this.adminClientService.host2 + "/marque" ;
    this.adminClientService.postResource(url,data)

    .subscribe(data => {
      this.mode= 'list' ;
      this.onGetAllMarques();
      
      
    },err => {
        console.log(err);
    })
  }
  currentMarque : Marque= {
    
    idMarq  : ' ' ,
    mat : ' ' ,
    libelleMarq : ' ' 
}
onEditMarque(data){
  console.log(data);
  
  this.adminClientService.getResourceMark(data.mat)
 
  .subscribe(mark => {
 
    this.currentMarque = mark; 

    console.log(this.currentMarque);
 
  }, err => {
    console.log(err);
  })
}
onUpdateMarque (data) { 
  this.adminClientService.putResourceMark(this.currentMarque.mat , data )
  .subscribe(data => {
   
    this.mode = "list";
    this.onGetAllMarques();
    
  }, err => {
    console.log(err);
  })
}
}
