import { Component } from '@angular/core';

@Component({
  templateUrl: 'rome_economy.component.html'
})
export class RomeEconomyComponent {
  // lineChart
  public DenariusChartData1: Array<any> = [
    {data: [93.5, 90.0, 98.0, 93.5, 89.0, 83.5, 79.0, 82.0, 79.0, 76.0, 74.0], label: 'Series A'}
  ];
  public DenariusChartLabels1: Array<any> = ['Nero 64 CE', 'Vespasian 70 CE', 'Domitian 82 CE', 'Domitian 85 CE', 'Trajan 107 CE', 'Antoninus Pius 148 CE', 'Marcus Aurelius 161 CE', 'Marcus Aurelius 168 CE', 'Marcus Aurelius 170 CE', 'Commodus 180 CE', 'Commodus 186 CE' ];
  public DenariusChartOptions: any = {
    animation: false,
    responsive: true
  };

  public DenariusChartData2: Array<any> = [
    {data: [87.0, 81.5, 78.5, 64.5, 56.5, 51.5, 58.0, 46.5, 43.0, 45.0, 50.5, 46.0, 63.0, 55.0, 48.0], label: 'Series A'}
  ];
  public DenariusChartLabels2: Array<any> = ['Pertinax 193 CE', 'Didius Julianus 193 CE', 'Septimius Severus 193 CE', 'Septimius Severus 194 CE', 'Septimius Severus 196 CE', 'Caracalla 212 CE', 'Macrinus 217 CE', 'Elagabalus 219 CE', 'Severus Alexander 222 CE', 'Severus Alexander 229 CE', 'Severus Alexander, 230 CE', 'Maximinus 235 CE', 'Gordian I & II 238 CE', 'Pupienus & Balbinus 238 CE',  'Gordian III 241 CE' ];

  public DenariusChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public DenariusChartLegend = false;
  public DenariusChartType = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
