import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
import { VenteFlash } from 'src/app/models/vente-flash';

@Component({
  selector: 'app-admin-venteflash',
  templateUrl: './admin-venteflash.component.html',
  styleUrls: ['./admin-venteflash.component.css']
})
export class AdminVenteflashComponent implements OnInit {
  show=true
  searchText ;
  venteFlashs : any;
  tmp : any ;
  venteflash : VenteFlash={ mat : ' ' , dateDebVF :new Date() , dateFinVF : new Date()};
  currentVenteflash : VenteFlash ={ mat : ' ' , dateDebVF :new Date() , dateFinVF : new Date()};
  mode ="list";
  constructor(private adminClientService : AdminServiceService , private router : Router) { }

  ngOnInit(): void {
    this.onGetAllVenteFlash();
  }
  onGetAllVenteFlash (){
    this.adminClientService.getAllventeFlash().subscribe(data => {
      console.log(data)
      this.tmp = data ;
       this.venteFlashs = this.tmp._embedded.venteFlashes ;
       console.log( this.venteFlashs)
        if (this.venteFlashs=='null'){
          this.venteFlashs={}
          console.log ('nulllll')
        }
    

  }, err => {
    console.log(err);
   
  })
  }
  onDeleteVenteFlash(vf){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(vf);
      this.adminClientService.deleteResourceVenteFlash(vf.mat).subscribe(data => { 
        console.log(data)
        if (this.venteFlashs.length <= 1 && this.venteFlashs.length >= 0) {
          this.show=false
          console.log(this.venteFlashs.length)
        }
      this.onGetAllVenteFlash();
   
    }, err => {
        console.log(err);
    })
  }
  onNewVenteFlash(){
    this.mode = 'new-cat';
  }
  onSaveVenteFlash(){
    console.log(this.venteflash)
     this.adminClientService.postResourceVenteFlash(this.venteflash)
 
     .subscribe(data => {
       console.log(data)
       this.mode= 'list' ;
       this.onGetAllVenteFlash();
  
     },err => {
         console.log(err);
     })
   }
   onEditVenteFlash(vf : VenteFlash){
    console.log(vf);
    
    this.adminClientService.getResourceVenteFlash(vf.mat)
   
    .subscribe(data => {
   
      this.currentVenteflash = data; 
  
      console.log(this.currentVenteflash)
   
    }, err => {
      console.log(err);
    })
  }
  onUpdateVenteFlash () { 
    this.adminClientService.putResourceVenteFlash(this.currentVenteflash )
    .subscribe(data => {
      console.log(data);
      this.mode = "list";
      this.onGetAllVenteFlash(); 
      
    }, err => {
      console.log(err);
    })
  }
  
}
