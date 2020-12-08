import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  
  host2 = 'http://localhost:8011/auth-service';
  public authenticated: boolean;
  public authenticatedUser;
jwt: string ;
username: string;

roles: Array<string>;
u1 : HttpResponse<Object>
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.host2 + '/login', data, {observe: 'response'}); 
  }
  public postResource(data, url){
    return this.http.post(data ,url);
  } 

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt); 
    this.jwt = jwt;
    
    this.parseJWT();
      }
      parseJWT() {     
      const jwtHelper = new JwtHelperService();
      const objJWT = jwtHelper.decodeToken(this.jwt);
      this.username = objJWT.obj;
      this.roles = objJWT.roles;  
      }

      isAdmin() {
        return this.roles.indexOf('ADMIN') >= 0;
       }
       isUser() {
         return this.roles.indexOf('USER') >= 0;
       }
       isFour() {
        return this.roles.indexOf('FOURNISSEUR') >= 0;
      }
       isAuthenticated() {
         return this.roles ;
       }
       loadToken() {       
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    localStorage.removeItem('token');
    this.jwt = undefined;
    this.username = undefined;
    //this.usernameAuth=null;
    this.roles = undefined;
  }
  public getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  
}
