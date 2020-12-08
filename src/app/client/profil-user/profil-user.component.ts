import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {

  constructor(private auth: AuthenticationServiceService , private http : HttpClient ,private activatedRoute : ActivatedRoute,private router : Router) {
    }
  u : any;
  user:any;
  
  usernameAuth;
  username : any ;
  host2 = 'http://localhost:8011/ClientService';
  host1 = 'http://localhost:8011/auth-service';
  ngOnInit(): void {
   // this.username= this.activatedRoute.params['username'];
  
    console.log(this.username)
    this.getUserByUsername();
    
    console.log(this.u)
    console.log(this.user)
    console.log(this.usernameAuth)
    console.log( this.getUserByUsername())
  }
  
 
  userUpdated : any ;
  putUser(user){
    console.log(this.user)
    console.log(this.usernameAuth)
    if (user.password != user.confirmedPassword) {return new alert("Password != confirmedPassword")  ;}
    return this.http.put(this.host1+"/putClient/"+this.usernameAuth,this.user).subscribe(data =>{
      console.log(this.usernameAuth)
      this.userUpdated = data
      console.log(this.userUpdated)
     
    }, err =>{ console.log(err)
    }      )
  }
  
  getUserByUsername(){
    let jwt = this.auth.u1.headers.get('Authorization');
    this.auth.saveToken(jwt);
    
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(jwt);
    this.usernameAuth= objJWT.sub;
    return this.http.get(this.host2+"/client/"+this.usernameAuth).subscribe(data =>{
      
   this.user = data 
  
  }
   ,err => {
     console.log(err)
   }  )
  }
}
