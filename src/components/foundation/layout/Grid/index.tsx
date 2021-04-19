import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { BreakpointsTypes } from '@/types/breakpointsType';
import { propToStyle } from '@/theme/utils/propToStyle';
import { breakpointsMedia } from '@/theme/utils/breakpointsMedia';

interface IContainer {
  flex: number;
  display?: string;
  alignItems?: string;
  marginTop?: string;
  boxShadow?: string;
  backgroundColor?: string;
}

interface IRow {
  flex?: number;
  alignItems?: string;
  justifyContent?: string;
  marginTop?: BreakpointsTypes | string;
  marginBottom?: BreakpointsTypes | string;
}

interface IColumn {
  flex?: number;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  offset?: BreakpointsTypes | number;
  value?: BreakpointsTypes | number;
}

export const Grid = {
  Container: styled.div<IContainer>`
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;

    ${propToStyle('flex')}
    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('marginTop')}
    ${propToStyle('boxShadow')}

    background-color: ${({ theme, backgroundColor }) => get(theme, `colors.${backgroundColor}.color`)};

    ${breakpointsMedia({
    xs: css`
      max-width: initial;
      `,
    sm: css`
      max-width: 576px;
      `,
    md: css`
      max-width: 768px;
      padding-left: 16px;
      padding-right: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
  `,

  Row: styled.div<IRow>`
    display: flex;
    flex-wrap: wrap;

    ${propToStyle('flex')};
    ${propToStyle('alignItems')};
    ${propToStyle('justifyContent')};

    ${propToStyle('marginTop')};
    ${propToStyle('marginBottom')};
  `,

  Column: styled.div<IColumn>`
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    
    ${propToStyle('flex')};
    ${propToStyle('display')};
    ${propToStyle('flexDirection')};
    ${propToStyle('alignItems')};
    ${propToStyle('justifyContent')};

    ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
          margin-left: ${(100 * offset) / 12}%;
        `;
    }
    return breakpointsMedia({
      ...(offset?.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset?.sm && {
        sm: css`
          margin-left: ${(100 * offset.sm) / 12}%;
        `,
      }),
      ...(offset?.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
          `,
      }),
      ...(offset?.lg && {
        lg: css`
          margin-left: ${(100 * offset.lg) / 12}%;
        `,
      }),
      ...(offset?.xl && {
        xl: css`
          margin-left: ${(100 * offset.xl) / 12}%;
        `,
      }),
    });
  }}

${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(value?.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),

      ...(value?.sm && {
        sm: css`
          flex: 0 0 ${(100 * value.sm) / 12}%;
          max-width: ${(100 * value.sm) / 12}%;
        `,
      }),

      ...(value?.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
          & {
            padding-right: 20px;
          }
        `,
      }),

      ...(value?.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),

      ...(value?.xl && {
        xl: css`
          flex: 0 0 ${(100 * value.xl) / 12}%;
          max-width: ${(100 * value.xl) / 12}%;
        `,
      }),
    });
  }}
  `,
};
