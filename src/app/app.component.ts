import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = 1;
  days: any;
  year = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
  ]
  months = [
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,],
    [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,]
  ];
  ngOnInit() {
    for (let i of this.months) {
      if (this.date === this.months.indexOf(i) + 1) {
        this.days = Array(i.length).fill(',');
      }
    }
  }
}
