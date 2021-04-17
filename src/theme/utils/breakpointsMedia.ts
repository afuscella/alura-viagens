import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointsNames = Object.keys(cssByBreakpoint);

  return breakpointsNames
    .filter((breakpointsName) => Boolean(cssByBreakpoint[breakpointsName]))
    .map((breakpointName) => css`
      @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakpoint[breakpointName]}
      }
    `);
}
