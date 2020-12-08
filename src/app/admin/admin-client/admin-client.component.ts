import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.css']
})
export class AdminClientComponent implements OnInit {
  show=true
  public clients : any;
 
  tmp : any ;
  mode ="list";
  searchText ;
  constructor(private adminClientService : AdminServiceService , private router : Router) { }

  ngOnInit(): void {
    this.onGetAllClients()
   
  }
  onGetAllClients (){
    this.adminClientService.getAllClients().subscribe(data => {
      this.tmp = data ;
     this.clients = this.tmp._embedded.clients ;
    
  }, err => {
    console.log(err);
   
  })
  }
  onDeleteClient(client){
    let c = confirm("Etes vous sure ?");
    if (!c) return;
    console.log(client);
      this.adminClientService.deleteResource(client.mat).subscribe(data => { 
        if (this.clients.length <= 1 && this.clients.length >= 0) {
          this.show=false
          
        }
      this.onGetAllClients();
   
    }, err => {
        console.log(err);
    })
  }
  onNewClient(){
    this.mode = 'new-cat';
  }
  onSaveClient(data){
    let url = this.adminClientService.host2 + "/client" ;
    this.adminClientService.postResource(url,data)

    .subscribe(data => {
      this.mode= 'list' ;
      this.onGetAllClients();
      
      
      
    },err => {
        console.log(err);
    })
  }
  currentClient : Client= {
    
    id  : ' ' ,
    mat : ' ' ,
    username : ' ' ,
    cin : ' ' ,
    phoneNumber : ' ' ,
    password : ' ' ,
    address : ' ' 
    
}
  onEditClient(data){
    console.log(data);
    
    this.adminClientService.getResource(data.mat)
   
    .subscribe(client => {
   
      this.currentClient = client; 
  
      console.log(this.currentClient)
   
    }, err => {
      console.log(err);
    })
  }

  onUpdateClient (data) { 
    this.adminClientService.putResource(this.currentClient.mat , data )
    .subscribe(data => {
      console.log("omar");
      this.mode = "list";
      this.onGetAllClients(); 
      
    }, err => {
      console.log(err);
    })
  }
  
  }
