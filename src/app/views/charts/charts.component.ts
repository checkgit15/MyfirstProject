import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  flat1 = {
    labels: [...this.months].slice(0, 11),
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [3000, 2000, 2500, 3000, 4000, 3500, 2500,4000,2000,3500,2500,3000]
      },
    ]
  };

  flat2= {
    labels: [...this.months],
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [1000, 200, 2500, 300, 4000, 350, 2500,4000,2000,3500,2500,3000]
      },
    ]
  };

  flat3= {
    labels: [...this.months],
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [1000, 2000, 2500, 3000, 4000, 3050, 2500,4000,2000,3500,2500,3000]
      },
    ]
  };

  flat4= {
    labels: [...this.months],
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [1000, 3200, 2500, 300, 4000, 3500, 2500,4000,2000,3500,2500,3000]
      },
    ]
  };

  flat5= {
    labels: [...this.months],
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [1000, 4000, 2500, 3600, 4000, 350, 2500,4000,2000,3500,2500,2000]
      },
    ]
  };

  flat6= {
    labels: [...this.months],
    datasets: [
      {
        label: 'Maintenance Amount',
        backgroundColor: '#ebc934',
        data: [1000, 200, 2500, 300, 4000, 350, 2500,4000,2000,3500,2500,3000]
      },
    ]
  };

  // chartBarOptions = {
  //   maintainAspectRatio: false,
  // };

  // chartLineData = {
  //   labels: [...this.months].slice(0, 7),
  //   datasets: [
  //     {
  //       label: 'My First dataset',
  //       backgroundColor: 'rgba(220, 220, 220, 0.2)',
  //       borderColor: 'rgba(220, 220, 220, 1)',
  //       pointBackgroundColor: 'rgba(220, 220, 220, 1)',
  //       pointBorderColor: '#fff',
  //       data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
  //     },
  //     {
  //       label: 'My Second dataset',
  //       backgroundColor: 'rgba(151, 187, 205, 0.2)',
  //       borderColor: 'rgba(151, 187, 205, 1)',
  //       pointBackgroundColor: 'rgba(151, 187, 205, 1)',
  //       pointBorderColor: '#fff',
  //       data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
  //     }
  //   ]
  // };

  // chartLineOptions = {
  //   maintainAspectRatio: false,
  // };

  // chartDoughnutData = {
  //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'Angular'],
  //   datasets: [
  //     {
  //       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
  //       data: [40, 20, 80, 10]
  //     }
  //   ]
  // };

  // chartDoughnutOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  // chartPieData = {
  //   labels: ['Red', 'Green', 'Yellow'],
  //   datasets: [
  //     {
  //       data: [300, 50, 100],
  //       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
  //       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  //     }
  //   ]
  // };

  // chartPieOptions = {
  //   aspectRatio: 1,
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   radius: '100%'
  // };

  // chartPolarAreaData = {
  //   labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  //   datasets: [
  //     {
  //       data: [11, 16, 7, 3, 14],
  //       backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']
  //     }
  //   ]
  // };

  // chartRadarData = {
  //   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  //   datasets: [
  //     {
  //       label: '2020',
  //       backgroundColor: 'rgba(179,181,198,0.2)',
  //       borderColor: 'rgba(179,181,198,1)',
  //       pointBackgroundColor: 'rgba(179,181,198,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(179,181,198,1)',
  //       tooltipLabelColor: 'rgba(179,181,198,1)',
  //       data: [65, 59, 90, 81, 56, 55, 40]
  //     },
  //     {
  //       label: '2021',
  //       backgroundColor: 'rgba(255,99,132,0.2)',
  //       borderColor: 'rgba(255,99,132,1)',
  //       pointBackgroundColor: 'rgba(255,99,132,1)',
  //       pointBorderColor: '#fff',
  //       pointHoverBackgroundColor: '#fff',
  //       pointHoverBorderColor: 'rgba(255,99,132,1)',
  //       tooltipLabelColor: 'rgba(255,99,132,1)',
  //       data: [this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData, this.randomData]
  //     }
  //   ]
  // };

  // chartRadarOptions = {
  //   aspectRatio: 1.5,
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  // get randomData() {
  //   return Math.round(Math.random() * 100);
  // }

}
