import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-profil-fournisseur',
  templateUrl: './edit-profil-fournisseur.component.html',
  styleUrls: ['./edit-profil-fournisseur.component.css']
})
export class EditProfilFournisseurComponent implements OnInit {

  fournisseur:any;

  constructor( 
    public crudService:CrudService,
    public router:Router) { }

  ngOnInit(): void {
    this.crudService.getUserByUserName()
      .subscribe(data=>{

        this.fournisseur=data;
        console.log(data);
      },err=>{
        console.log(err);
      })


  }


  updateFournisseur() {
    console.log(this.fournisseur)
    this.crudService.updateFournisseur(this.fournisseur)
        .subscribe(data=>{
          console.log(data);
          alert("success update")
          this.router.navigate(['profil-seller'])
        },err=>{
          console.log(err);
          alert("fail update")
        });




     
      }








    }