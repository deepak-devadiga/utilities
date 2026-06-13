import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationItem } from '../../core/models/navigation.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { menus } from '../../core/constants/menu';

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

  readonly navigationItems: NavigationItem[] = menus;

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
