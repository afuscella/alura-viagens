import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { TextStyleVariantMap } from '@/components/foundation/Text/styles';
import { BreakpointsTypes } from '@/types/breakpointsType';

export interface IButton {
  variant: string;
  margin: BreakpointsTypes | string;
  fullWidth: boolean;
  children: ReactNode | ReactNode[];
}

const typography = css`
  ${(TextStyleVariantMap.paragraph)}
`;

export const ButtonBase = styled.button<IButton>`
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  cursor: pointer;
  padding: 18px 48px;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};

  ${typography}

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`;
