import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vente-flash-client',
  templateUrl: './vente-flash-client.component.html',
  styleUrls: ['./vente-flash-client.component.css']
})
export class VenteFlashClientComponent implements OnInit {
  listVenteFlash : any
  searchText : any
  constructor(private serviceClient : ServiceClientService , private router : Router) { }

  ngOnInit(): void {
    this.onGetVenteFlash()
    console.log(this.onGetVenteFlash())
    console.log(this.listVenteFlash)
    console.log(this.listVenteFlash._embedded.venteFlashes.articleVenteFlash[1].designtationArt)
  }
onGetVenteFlash(){
  this.serviceClient.getVenteFlash().subscribe(data =>{
    this.listVenteFlash = data
  console.log(data)
},err => {
      console.log(err)
    })
}

ongetArticle(id:string) {

  this.router.navigate(['getArticle', id])

}
}
