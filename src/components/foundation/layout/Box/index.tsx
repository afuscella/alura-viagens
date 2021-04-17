import styled from 'styled-components';
import get from 'lodash/get';
import { propToStyle } from '@/theme/utils/propToStyle';
import { BreakpointsTypes } from '@/types/breakpointsType';

interface IBox {
  flex: number;
  display?: string;
  flexDirection?: string;
  alignItems: string;
  justifyContent?: string;
  marginLeft: BreakpointsTypes;
  marginRight: BreakpointsTypes;
  backgroundColor?: string;

  boxShadow?: string;
}

export const Box = styled.div<IBox>`
  ${propToStyle('flex')};
  ${propToStyle('display')};

  ${propToStyle('flexDirection')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};

  ${propToStyle('marginLeft')};
  ${propToStyle('marginRight')};

  background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};

  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};
`;
