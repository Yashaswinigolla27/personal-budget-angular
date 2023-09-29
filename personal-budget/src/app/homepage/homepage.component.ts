import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { Chart } from 'chart.js';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';



@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{
  public dataSource: any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#CD5C5C',
          '#CCCCFF',
          '#9FE2BF'
        ],
      }
    ],

    labels: []
  };
  http: any;

  // constructor(private http:HttpClient) {
  //   const el = document.getElementById("myChart");
  //   console.log("is my chart there?", el);
  // }



  ngOnInit(): void {

    this.http.get('http://localhost:3030/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.data.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
    });
  }

  constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.dataService.data$.subscribe((data) => {
  //     // Check if data is available and non-empty
  //     if (data && data.myBudget) {
  //       for (var i = 0; i < data.myBudget.length; i++) {
  //         this.dataSource.datasets[0].data[i] = data.myBudget[i].budget;
  //         this.dataSource.labels[i] = data.myBudget[i].title;
  //       }
  //       this.createChart(); // Call createChart() after updating the data
  //     }
  //   });
  // }

  createChart() {
    var ctx = document.getElementById('myChart') as HTMLCanvasElement;
      var myPieChart = new Chart(ctx, {
          type: 'pie',
          data: this.dataSource
      });
  }

}





