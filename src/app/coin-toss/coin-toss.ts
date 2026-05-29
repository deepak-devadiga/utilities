import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-coin-toss',
  imports: [UpperCasePipe, MatButtonModule],
  templateUrl: './coin-toss.html',
  styleUrls: ['./coin-toss.scss'],
})
export class CoinToss {
  isFlipping = signal(false);
  result = signal<'heads' | 'tails' | null>(null);

  flip() {
    this.isFlipping.set(true);
    this.result.set(null);

    setTimeout(() => {
      this.isFlipping.set(false);
      this.result.set(Math.random() > 0.5 ? 'heads' : 'tails');
    }, 3000);
  }
}
