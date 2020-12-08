import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Articles } from 'src/model/Articles';
import { SousCategorie } from 'src/model/SousCategorie';
import { Marque } from 'src/model/Marque';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from 'src/model/Fournisseur';
 
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
 
  article:any=new Articles();
  pageCategorie:any={mat:"" , libelleSousCat:""};
  pageMarque:any={ mat:"", libelleMarq:""};
  fournisseur:any={_id:"",address:"",username:"",phoneNumber:"",password:""};


  mode:number=1;
  constructor( public crudService:CrudService , private httpClient : HttpClient) { }
 
  ngOnInit(): void {
    
    this.onGetCategories();
    this.onGetMarques();
    this.crudService.getUserByUserName()
      .subscribe(data=>{
          this.fournisseur=data;
          console.log(data);
      },err=>{
        console.log(err);
      });

      console.log(this.fournisseur);
    
  }
 
  onGetMarques(){
    this.crudService.getMarques()
      .subscribe(data=>{
 
        this.pageMarque=data;
        console.log(data);
      },err=>{
        console.log(err);
      });
  }
  onGetCategories(){
    this.crudService.getCategories()
    .subscribe(data=>{
 
      this.pageCategorie=data;
      console.log(data);
    },err=>{
      console.log(err);
    });
 
  }
  saveArticle() {
    this.article.fournisseurArt=this.fournisseur;
    this.crudService.saveArticle(this.article)
      .subscribe(data=>{
        this.article=data;
        this.mode=2;
        console.log(data);
      },err=>{
        console.log(err);
      }
        ) 
  }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
 
   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
 
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image   http://localhost:8087/image
    this.httpClient.post('http://localhost:8011/CrudApplication/image', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );
 
  }
 
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.  http://localhost:8087/get/
    this.httpClient.get('http://localhost:8011/CrudApplication/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
 
}


 