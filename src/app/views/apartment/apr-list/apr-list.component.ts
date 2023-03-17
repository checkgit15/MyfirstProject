import { Component } from '@angular/core';
import {Router} from '@angular/router';
// @Component({
//   selector: 'app-apr-list',
//   templateUrl: './apr-list.component.html',
//   styleUrls: ['./apr-list.component.scss']
// })
// export class AprListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// import { Component } from '@angular/core';

@Component({
  selector: 'app-apr-list',
  templateUrl: './apr-list.component.html',
  styleUrls: ['./apr-list.component.scss']
})
export class AprListComponent {

  data1 = {
    labels: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07','A08','A08','A010'],
    datasets: [
      {
        label: 'Rent',
        backgroundColor: '#f87979',
        data: [10000, 12000, 11000, 12000, 12000,0,9000,12000,8000,10000],
      }
    ]
  };

  monthly = {
    labels: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07','A08','A08','A010'],
    datasets: [
      {
        label: 'Maintenance Amount:500',
        backgroundColor: '#f87979',
        data: [500, 200, 500, 300, 500, 500, 400,200,400,500],
      }
    ]
  };

  electricity = {
    labels: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07','A08','A08','A010'],
    datasets: [
      {
        label: 'Electricity',
        backgroundColor: '#f87979',
        data: [640, 220, 510, 390, 1000, 800, 700,750,600,400]
      }
    ]
  };



  constructor(private route:Router){} 
  
  go()
  {
    this.route.navigate(['/charts']);
  }
}
