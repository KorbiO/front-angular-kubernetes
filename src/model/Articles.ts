import { Marque } from './Marque';
import { SousCategorie } from './SousCategorie';
import { Fournisseur } from './Fournisseur';

export class Articles{
mat:string='';
designtationArt: string='';
descriptionArt: string='';
prixArt: number=0;
qteStockArt:number=0;
tauxRemiseArt:number=0;
	imageName:string;			
    qteStockArtVF : number;
    prixArtVF : number;
marqueArt:Marque={mat:"",libelleMarq:""};
    
sousCategorieArt:SousCategorie={mat:"", libelleSousCat:""};
fournisseurArt:Fournisseur={_id:"",address:"",username:"",phoneNumber:"",password:""};
	
	
	

    
}