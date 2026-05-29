import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-coin-toss',
  imports: [UpperCasePipe],
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
