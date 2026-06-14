import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-calculator',
  imports: [CommonModule],
  templateUrl: './basic-calculator.html',
  styleUrls: ['./basic-calculator.scss'],
})
export class BasicCalculator {
  display = '0';

  append(value: string): void {
    if (this.display === '0') {
      this.display = value;
    } else {
      this.display += value;
    }
  }

  clear(): void {
    this.display = '0';
  }

  calculate(): void {
    try {
      // Basic calculator using JavaScript evaluation
      const result = Function(`"use strict"; return (${this.display})`)();
      this.display = result.toString();
    } catch {
      this.display = 'Error';
    }
  }
}
