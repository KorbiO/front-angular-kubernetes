import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 u : HttpResponse<Object>
 
  constructor(private http: HttpClient,private authService : AuthenticationServiceService , private router : Router) { }
  ngOnInit() {
    
    };
    form = new FormGroup({  
      username: new FormControl('',[Validators.required ,  
      Validators.email  ]),  
      password: new FormControl('', Validators.required)  
    }); 
    get username() {  
      return this.form.get('username');  
    } 
    
  onLogin(data){
   
    this.authService.login(data).subscribe(resp => {
      this.authService.u1 = resp
        console.log(resp);
        console.log(resp.headers.get('Authorization'));
        let jwt = resp.headers.get('Authorization');
        this.authService.saveToken(jwt);

        const jwtHelper = new JwtHelperService();
        const objJWT = jwtHelper.decodeToken(jwt);
        console.log(this.authService.u1 )
        this.router.navigateByUrl("/client");
       
    },err => {
        console.log(err);
    })
  }
 
}


