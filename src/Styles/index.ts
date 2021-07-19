import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    primaryDark: string;
    light: string;
    medium: string;
    gray: string;
    dark: string;
    black: string;
  }
}

export const Theme: DefaultTheme = {
  primary: '#144FA1',
  primaryDark: '#003175',
  light: '#F4F5F8',
  medium: '#A3A4A6',
  gray: '#E0E0E0',
  dark: '#3E4146',
  black: '#000000'
}