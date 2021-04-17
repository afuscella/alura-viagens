import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TextBase } from './styles';

interface IText {
  tag?: string;
  variant?: string;
  color?: string;
  children?: ReactNode | ReactNode[];
}

export function Text({
  tag, variant, color, children, ...props
}: IText) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraph']),
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  color: 'secondary.main',
  children: null,
};
