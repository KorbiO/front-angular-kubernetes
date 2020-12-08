import { Articles } from './Articles';
 
export class LigneCommande{
    mat:string='';
    qteArtLC: number;
 
article : Articles={mat:"",qteStockArtVF : 0,
prixArtVF : 0,designtationArt:"",imageName:"",descriptionArt:"",prixArt:0,qteStockArt:0,tauxRemiseArt:0,marqueArt:{mat:"",libelleMarq:""}
,sousCategorieArt:{mat:"",libelleSousCat:""},fournisseurArt:{_id:'',
address:'',
phoneNumber:'',
username:'',
password:''}};
 
    
}