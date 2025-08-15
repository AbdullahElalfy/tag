import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.css',
})
export class TrendingComponent {
  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}
