import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil-fournisseur',
  templateUrl: './profil-fournisseur.component.html',
  styleUrls: ['./profil-fournisseur.component.css']
})
export class ProfilFournisseurComponent implements OnInit {

  userObj:any={};


  constructor(  public authServ: AuthenticationServiceService , 
                  private crudService: CrudService,
                  public router:Router
                  ) { }

  ngOnInit(): void {

    console.log(this.crudService.getUserByUserName());
    this.crudService.getUserByUserName()
      .subscribe(data=>{

        this.userObj=data;
        console.log(data);
      },err=>{
        console.log(err);
      })


  }

  onEditArticle(username:string) {

    this.router.navigate(['edit-profil-seller', username])

  }


}
