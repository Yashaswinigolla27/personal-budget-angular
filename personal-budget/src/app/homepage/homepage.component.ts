import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';

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

  constructor(private http:HttpClient) {
    const el = document.getElementById("myChart");
    console.log("is my chart there?", el);
  }

  ngOnInit(): any;

  ngOnInit(): void {

    this.http.get('/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.data.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
    });
  }



  createChart() {
    var ctx = document.getElementById("myChart") as HTMLCanvasElement;
      var myPieChart = new Chart(ctx, {
          type: 'pie',
          data: this.dataSource
      });
  }


}





