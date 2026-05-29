import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from '../../core/models/navigation.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly isCollapsed = signal(false);

  readonly expandedMenus = signal<string[]>(['Games']);

  readonly navigationItems: NavigationItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/',
    },
    {
      label: 'Games',
      icon: 'sports_esports',
      children: [
        {
          label: 'Coin Flip',
          route: '/games/coin-flip',
        },
        {
          label: 'Dice Roller',
          route: '/games/dice-roller',
        },
      ],
    },
    {
      label: 'Calculators',
      icon: 'calculate',
      children: [
        {
          label: 'Basic Calculator',
          route: '/calculators/basic',
        },
        {
          label: 'BMI Calculator',
          route: '/calculators/bmi',
        },
      ],
    },
    {
      label: 'Converters',
      icon: 'swap_horiz',
      children: [
        {
          label: 'Unit Converter',
          route: '/converters/unit',
        },
        {
          label: 'Currency Converter',
          route: '/converters/currency',
        },
      ],
    },
    {
      label: 'Time Tools',
      icon: 'schedule',
      children: [
        {
          label: 'World Clock',
          route: '/time/world-clock',
        },
        {
          label: 'Timezone Converter',
          route: '/time/timezone-converter',
        },
      ],
    },
  ];

  toggleSidebar(): void {
    this.isCollapsed.update((value) => !value);
  }

  toggleMenu(menuLabel: string): void {
    this.expandedMenus.update((menus) => {
      if (menus.includes(menuLabel)) {
        return menus.filter((menu) => menu !== menuLabel);
      }

      return [...menus, menuLabel];
    });
  }

  isMenuExpanded(menuLabel: string): boolean {
    return this.expandedMenus().includes(menuLabel);
  }
}
