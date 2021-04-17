import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme/index';
import GlobalStyle from '@/theme/GlobalStyle';

interface IWebsiteGlobalProvider {
  children: ReactNode | ReactNode[];
}

export default function WebsiteGlobalProvider({ children }: IWebsiteGlobalProvider) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

WebsiteGlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
