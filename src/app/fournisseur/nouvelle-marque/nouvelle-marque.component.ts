import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-nouvelle-marque',
  templateUrl: './nouvelle-marque.component.html',
  styleUrls: ['./nouvelle-marque.component.css']
})
export class NouvelleMarqueComponent implements OnInit {

  constructor( private crudService:CrudService) { }

  ngOnInit(): void {
  }


  onSaveMarque(dataForm) {
    this.crudService.saveMarque(dataForm)
      .subscribe(data=>{
        console.log(data);

      },error=>{
        console.log(JSON.parse(error._body).message);
      })

}
}