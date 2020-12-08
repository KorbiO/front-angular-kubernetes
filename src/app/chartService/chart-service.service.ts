import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  

  constructor(private http : HttpClient) { }
host = "http://localhost:8011/CrudApplication"
  getChartArticle() {
    return this.http.get(this.host+"/charts");
  }
  getChartCommand(){
    return this.http.get(this.host+"/countCommande");
  }
  getChiffreAf(){
    return this.http.get(this.host+"/chiffreAffaire")
  }

}
