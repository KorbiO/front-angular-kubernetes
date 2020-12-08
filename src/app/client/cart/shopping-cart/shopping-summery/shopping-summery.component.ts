import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { ActivatedRoute } from '@angular/router';
import { LigneCommande } from 'src/model/LigneCommande';

@Component({
  selector: 'app-shopping-summery',
  templateUrl: './shopping-summery.component.html',
  styleUrls: ['./shopping-summery.component.css']
})
export class ShoppingSummeryComponent implements OnInit {
  
  constructor(public serviceClient : ServiceClientService , public activatedRoute : ActivatedRoute) { 
    this.id= activatedRoute.snapshot.params['id'];
   
  }
  total : any
  qte : any 
  qt : any
  i :any
  lcs : any[]=[];
  art : any
  lc :  LigneCommande = {mat: "",qteArtLC :0, article: {mat:"",designtationArt:"",imageName:"" ,qteStockArtVF:0,prixArtVF:0,descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
  ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:"",address:"",username:"",phoneNumber:"",password:""}}};
  article : any={};
  id:string;
  items:number;
  ngOnInit(): void {

    this.serviceClient.getArticle(this.id)
    .subscribe(data=>{
      this.article=data;
      console.log(data)
    },err=>{
      console.log(err);
    }
    );
    
    lc : LigneCommande;
    this.total = 0;

   for (let i = 0; i < localStorage.length; i++){
     let clef = localStorage.key(i);
     
    let qte = localStorage.getItem(clef);
    console.log(this.qte)

   this.serviceClient.getArticle(clef)
   .subscribe(data=>{
     this.art=data;
     console.log(data)
     this.lc ={mat : clef, qteArtLC: parseInt(qte),
       article: this.art};
       console.log(this.lc)
       this.lcs.push(this.lc);
       this.total = this.total + (parseInt(qte)* parseInt(this.art.prixArt))

   },err=>{
     console.log(err);
   }
   );
  

  } 
}
onPlusqte (id) {
  this.i = 0;


  do{
    let clef = localStorage.key(this.i);
    if (id == clef){
      this.qt = localStorage.getItem(clef);
      this.qt = parseInt( this.qt) + 1 ;
      this.i = localStorage.length;
      localStorage.removeItem(clef);

    }
    else{
      this.i = this.i + 1 ;
    }

  }while(this.i < localStorage.length);
  localStorage.setItem(id, this.qt);
  window.location.reload();


}  

ondelete (id) {
 
  localStorage.removeItem(id)
  window.location.reload();
 

} 
onMoinqte (id) {
  this.i = 0;


  do{
    let clef = localStorage.key(this.i);
    if (id == clef){
      this.qt = localStorage.getItem(clef);
      this.qt = parseInt( this.qt) - 1 ;
      this.i = localStorage.length;
      localStorage.removeItem(clef);

    }
    else{
      this.i = this.i + 1 ;
    }

  }while(this.i < localStorage.length);
  localStorage.setItem(id, this.qt);
  window.location.reload();

  
  

  

}  


}
