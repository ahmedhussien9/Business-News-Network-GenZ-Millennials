import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GzmNavbarComponent } from '@bbn/gzm-ui-library';

@Component({
  standalone: true,
  imports: [RouterModule, GzmNavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Business-News-Network-GenZ-Millennials';
}
