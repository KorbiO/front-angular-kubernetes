import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/model/Marque';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-table-marque',
  templateUrl: './table-marque.component.html',
  styleUrls: ['./table-marque.component.css']
})
export class TableMarqueComponent implements OnInit {
  pageMarque:any={mat:"",libelleMarq:""}
  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
    this.crudService.getMarques()
    .subscribe(data=>{

      this.pageMarque=data;
      console.log(data);
    },err=>{
      console.log(err);
    });




  }

  
















}
