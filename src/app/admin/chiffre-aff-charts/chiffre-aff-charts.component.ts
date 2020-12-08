import { Component, OnInit } from '@angular/core';
import { ChartServiceService } from 'src/app/chartService/chart-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chiffre-aff-charts',
  templateUrl: './chiffre-aff-charts.component.html',
  styleUrls: ['./chiffre-aff-charts.component.css']
})
export class ChiffreAffChartsComponent implements OnInit {
  data : any ;
  constructor( private chartservice:ChartServiceService){}
  ngOnInit(){
    this.chartservice.getChiffreAf().subscribe(res =>{
      this.data = res
      this.chartDatasets = this.data
    },err => {
      console.log(err)
    })
  }
  public chartType: string = 'horizontalBar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];

  public chartLabels: Array<any> = ['janv-févr', 'mars-avr', 'mai-juin', 'juil-août', 'sept-oct', 'nov-déc'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
