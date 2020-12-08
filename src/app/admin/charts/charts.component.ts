import { Component, OnInit } from '@angular/core';
import { ChartServiceService } from 'src/app/chartService/chart-service.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent  implements OnInit{

  constructor( private chartservice:ChartServiceService){}
  data:any
 ngOnInit(){
this.chartservice.getChartArticle().subscribe(
  res=>{console.log(res)
    this.data = res
  this.chartDatasets = this.data
  
  },
  err=>console.log(err)
)
 }
  public chartType: string = 'line';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40] }
    
  ];

  public chartLabels: Array<any> = ['10-1000 ', '1001-2000', '2001-3000'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
