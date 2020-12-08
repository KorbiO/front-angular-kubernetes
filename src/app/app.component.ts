import { Component } from '@angular/core';
import { AuthenticationServiceService } from './services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService : AuthenticationServiceService){}

  ngOnInit(): void {
    this.authService.loadToken();
  }

  isAdmin() {
    return this.authService.isAdmin();
   }
   isUser() {
     return this.authService.isUser();
   }
   isFour(){
     return this.authService.isFour();
   }
   isAuthenticated() {
    return this.authService.isAuthenticated() ;
  }
  logout() {
    return this.authService.logout();
  }
}
