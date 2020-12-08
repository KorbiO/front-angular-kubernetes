import { Component, OnInit } from '@angular/core';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { facture } from 'src/model/facture';
import { CrudService } from 'src/app/services/crud.service';
import { commande } from 'src/model/commande';
import { LigneCommande } from 'src/model/LigneCommande';
 
@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
 
  constructor(public serviceClient : ServiceClientService,public crudService: CrudService) { }
  fact: any
  id : string
  userObj : any
  lic : LigneCommande[]=[]
  facti : facture={ id:"",
    mat: "",
  dateFact: "", 
  tva: 0,
  remiseFact: 0, 
  totalTva: 0 ,
    totalTtc: 0 ,
  commandeLiv :{mat:"",totalCmd:"",dateCmd:"",modePaiement:"",
  ligneCmd:[{
    mat:"",  qteArtLC:0 ,article:{mat:"",designtationArt:"",qteStockArtVF : 0,
    prixArtVF : 0,imageName:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
    ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:'',
    address:'',
    phoneNumber:'',
    username:'',
    password:''}}
}],
lignelivraison:{mat:"",dateLiv:"", livraison:{mat:"",modeLiv:""}},client:{id  : ' ' ,
mat : ' ',
username : ' ' ,
cin : ' ' ,
phoneNumber : ' ' ,
password : ' ' ,
address : ' ' }}};
lc : LigneCommande = {mat: "",qteArtLC :0, article: {mat:"",imageName : "",designtationArt:"",qteStockArtVF : 0,
prixArtVF : 0,descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
  ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:'',
  address:'',
  phoneNumber:'',
  username:'',
  password:''}}};
 
  ngOnInit(): void {
    this.crudService.getUserByUserNamee()
      .subscribe(data=>{
 
        this.userObj=data;
        console.log(data);
      },err=>{
        console.log(err);
      })
    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      if(clef == "fact"){
        this.id= localStorage.getItem(clef)
        
        this.serviceClient.getFacture(this.id).subscribe(data=>{
      this.fact=data;
      console.log(data)
      this.facti= this.fact
      console.log(this.facti)
      //let li = this.fact.commande
      //console.log(li)
      this.lic = this.facti.commandeLiv.ligneCmd
           console.log(this.lic)
    },err=>{
      console.log(err);
 
      })
    }
  }
 
}
}