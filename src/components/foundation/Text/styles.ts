import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { breakpointsMedia } from '@/theme/utils/breakpointsMedia';
import { propToStyle } from '@/theme/utils/propToStyle';

const title = css`
  ${({ theme }) => css`
    font-family: ${theme.typographyVariants.titleXS.fontFamily};
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-family: ${theme.typographyVariants.title.fontFamily};
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-family: ${theme.typographyVariants.subTitle.fontFamily};
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
  `}
`;

const paragraph = css`
  ${({ theme }) => css`
    font-family: ${theme.typographyVariants.paragraph.fontFamily};
    font-size: ${theme.typographyVariants.paragraph.fontSize};
    font-weight: ${theme.typographyVariants.paragraph.fontWeight};
    line-height: ${theme.typographyVariants.paragraph.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-family: ${theme.typographyVariants.smallestException.fontFamily};
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

export const TextStyleVariantMap = {
  title,
  subTitle,
  paragraph,
  smallestException,
};

export const TextBase = styled.span`
  ${propToStyle('textAlign')}

  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  &::placeholder {
    opacity: 0.5;
  }

  ${({ variant }) => TextStyleVariantMap[variant]};
`;
