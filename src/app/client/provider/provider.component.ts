import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  host2 = 'http://localhost:8011/auth-service';
  constructor(private authService: AuthenticationServiceService, private router: Router) { }

  form = new FormGroup({  
    username: new FormControl('',[Validators.required ,  
    Validators.email  ]),  
    password: new FormControl('', Validators.required) ,
    confirmedPassword: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required,Validators.maxLength(8)])
  }); 
  get username() {  
    return this.form.get('username');  
  } 
  get password() {  
    return this.form.get('username');  
  } 
  get confirmedPassword() {  
    return this.form.get('username');  
  } 
  
  get address() {  
    return this.form.get('username');  
  } 
  get phoneNumber() {  
    return this.form.get('username');  
  } 


  ngOnInit(): void {
  }
  registerFour(data) {
    this.authService.postResource(this.host2+'/registerFour', data).subscribe(data => {
      this.router.navigateByUrl("/login");
     
    }, err => {
      console.log(err)
    });
  }

}
