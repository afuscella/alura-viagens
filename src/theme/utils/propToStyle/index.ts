import { css } from 'styled-components';
import { breakpointsMedia } from '../breakpointsMedia';

export function propToStyle(propName: string) {
  return (props) => {
    const propValue = props[propName];

    if (typeof propValue === 'object') {
      return css`
        ${breakpointsMedia({
    ...(propValue.xs && {
      xs: { [propName]: propValue.xs },
    }),
    ...(propValue.xs && {
      sm: { [propName]: propValue.sm },
    }),
    ...(propValue.xs && {
      md: { [propName]: propValue.md },
    }),
    ...(propValue.xs && {
      lg: { [propName]: propValue.lg },
    }),
    ...(propValue.xs && {
      xl: { [propName]: propValue.xl },
    }),
  })}
      `;
    }

    return {
      [propName]: props[propName],
    };
  };
}
