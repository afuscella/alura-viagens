import React from 'react';

import { IButton, ButtonBase } from './styles';

export function Button({
  variant, margin, fullWidth, children, ...props
}: IButton) {
  return (
    <ButtonBase
      type="submit"
      variant={variant}
      margin={margin}
      fullWidth={fullWidth}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
