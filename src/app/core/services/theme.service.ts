import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly theme = signal<AppTheme>('light');

  constructor() {
    this.initializeTheme();
  }

  toggleTheme(): void {
    const nextTheme = this.theme() === 'light' ? 'dark' : 'light';

    this.setTheme(nextTheme);
  }

  setTheme(theme: AppTheme): void {
    this.theme.set(theme);

    this.document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('app-theme', theme);
  }

  private initializeTheme(): void {
    const storedTheme = localStorage.getItem('app-theme') as AppTheme | null;

    if (storedTheme) {
      this.setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.setTheme(prefersDark ? 'dark' : 'light');
  }
}
