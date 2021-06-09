import 'styled-components';
import { DefaultTheme } from 'styled-components';
import { Breakpoints } from '../types';
import colors from './colors';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme {
    defaultRadius: string;

    colors: typeof colors;

    fontFamily: {
      raleway: string;
      roboto: string;
    };
    fontWeight: {
      extraBold: number;
      bold: number;
      semiBold: number;
      medium: number;
      regular: number;
    };

    size: {
      title: string;
      subtitle: string;
      subtitleLarge: string;
      body1: string;
      body2: string;
      caption: string;
    };

    breakpoints: Breakpoints;
  }
}

const theme: DefaultTheme = {
  defaultRadius: '24px',
  colors,
  fontFamily: {
    raleway: 'Raleway',
    roboto: 'Roboto'
  },
  fontWeight: {
    extraBold: 800,
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400
  },
  size: {
    title: '24px',
    subtitle: '18px',
    subtitleLarge: '20px',
    body1: '16px',
    body2: '14px',
    caption: '12px'
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1600
  }
};

export { theme };
