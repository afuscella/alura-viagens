import 'styled-components';
import { ColorsType } from '../src/types/colorsType';
import { BreakpointsType } from '../src/types/breakpointsType';
import { TypographyVariantsType } from '../src/types/typographyVariantsType';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType,
    typographyVariants: TypographyVariantsType,
    breakpoints: BreakpointsType,
    transition: string;
  }
}
