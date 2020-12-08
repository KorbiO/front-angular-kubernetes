import { Component, OnInit } from '@angular/core';
import { LigneCommande } from 'src/model/LigneCommande';
import { ServiceClientService } from 'src/app/services/service-client.service';
import { commande } from 'src/model/commande';
import { CrudService } from 'src/app/services/crud.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { order } from 'src/model/Order';


@Component({
  selector: 'app-checkout-body',
  templateUrl: './checkout-body.component.html',
  styleUrls: ['./checkout-body.component.css']
})
export class CheckoutBodyComponent implements OnInit {

  constructor(public serviceClient : ServiceClientService, public crudService: CrudService) { }
  idc : any;
  order : order = new order()
  idf : any
  articles : any[]=[];
  lcs : any[]=[];
  id:string;
  items:number;
  qte : any;
  qt : any;
  i : number;
  art : any;
  total : any
  commande: commande ={mat:"",totalCmd:"",dateCmd:"",modePaiement:"",ligneCmd:[{
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
address : ' ' }};
  lc : LigneCommande = {mat: "",qteArtLC :0, article: {mat:"",imageName : "",qteStockArtVF : 0,
  prixArtVF : 0,designtationArt:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
  ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:'',
  address:'',
  phoneNumber:'',
  username:'',
  password:''}}};
  userObj: any

  selectedDay: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(this.selectedDay)
  }
  ngOnInit(): void {
    console.log(this.crudService.getUserByUserNamee());
    this.crudService.getUserByUserNamee()
      .subscribe(data=>{
 
        this.userObj=data;
        console.log( this.userObj);
      },err=>{
        console.log(err);
      })
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
        this.total = this.total + (parseInt(qte)* parseInt(this.art.prixArt));
        },err=>{
      console.log(err);
    });}}
  onPostCommande() {
    const start = Date.now();

    this.idc = this.userObj.username + "_" + start
    console.log(this.idc)
    this.commande.mat = this.idc
    this.commande.totalCmd = parseInt( this.total)
    this.commande.ligneCmd = this.lcs
    this.commande.modePaiement = this.selectedDay
    let cle = "fact";
  
    localStorage.setItem(cle, this.idc);

      console.log(this.idc)
    
    console.log(this.commande.modePaiement)
    //this.commande.mat = '1'
    console.log(this.commande)


    for (let i = 0; i < localStorage.length; i++){
      let clef = localStorage.key(i);
      
     let qte = localStorage.getItem(clef);
     console.log(this.qte)
     this.serviceClient.getArticle(clef)
    .subscribe(data=>{
      this.art=data;
      localStorage.removeItem(clef)
      
        },err=>{
      console.log(err);
    });}



    this.serviceClient.postCommande(this.commande)
      .subscribe(data=>{
        console.log(data);

      },error=>{
        console.log(error);
      })

}
url : any
pay(){
 
  
  this.order = {
    price : 100.00,
    currency : "USD",
    method :"paypal",
    intent : "SALE",
    description : "acheté ...."
  }
  window.location.href="https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-3C84270510184790V"
  this.serviceClient.pay(this.order)
  .subscribe(data=>{
    this.url= data
    console.log(this.url)
   
  
  },err=>{
    console.log(err);
  })


}

}
