import { NavigationItem } from '../models/navigation.model';

export const menus: NavigationItem[] = [
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
