import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { DataCardsComponent } from './data-cards/data-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent,DataCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InterbizTask';
}
