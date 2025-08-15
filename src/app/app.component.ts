import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'E-Commerce ';
  ngOnInit() {
    setTimeout(() => {
      const loader = document.getElementById('global-loader');
      if (loader) loader.style.display = 'none';
    }, 3000);
  }
}
