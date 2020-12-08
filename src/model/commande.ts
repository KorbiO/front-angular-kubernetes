import { LigneCommande } from './LigneCommande';
import { Articles } from './Articles';

import { Client } from 'src/app/models/client';
import { LigneLivraison } from './LigneLivraison';
 
export class commande {
    mat:any;
    totalCmd:any ;
    dateCmd: any;
    modePaiement : any;
    ligneCmd : LigneCommande[]= [{
        mat:"",  qteArtLC:0 ,article:{mat:"",designtationArt:"",qteStockArtVF : 0,
        prixArtVF : 0,imageName:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
        ,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:'',
        address:'',
        phoneNumber:'',
        username:'',
        password:''}}
    }];
    lignelivraison : LigneLivraison={mat:"",dateLiv:"", livraison:{mat:"",modeLiv:""}}
    client: Client={  id  : ' ' ,
    mat : ' ',
    username : ' ' ,
    cin : ' ' ,
    phoneNumber : ' ' ,
    password : ' ' ,
    address : ' ' 
    }
    
}