import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;
  myChart: any;
  periods: { name: string, id: Number }[] = [
    { name: 'سنويا', id: 1 },
    { name: 'شهريا', id: 2 },
    { name: 'يوميا', id: 3 }];
  selectedPeriod: number = 1;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    // Ensure that the container has dimensions before initializing the chart
    const container = this.chartContainer.nativeElement as HTMLElement;
    this.myChart = echarts.init(container);

    const option: echarts.EChartsOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {}
        }
      ]
    };

    // Set the chart option
    this.myChart.setOption(option);

    if (container.clientWidth > 0 && container.clientHeight > 0) {

      // Resize the chart on window resize
      window.addEventListener('resize', () => {
        if (this.myChart) {
          this.myChart.resize();
        }
      });
    } else {
      console.error("Container size is zero. Can't initialize chart.");
    }
  }

}
