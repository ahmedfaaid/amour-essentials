import 'styled-components';

interface IColors {
  primary: string;
  white: string;
  black: string;
  grey: string;
}

interface IFonts {
  primary: string;
  secondary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
    fonts: IFonts;
  }
}
