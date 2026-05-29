import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoinToss } from './coin-toss/coin-toss';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoinToss],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('utility');

  protected readonly themeService = inject(ThemeService);
}
