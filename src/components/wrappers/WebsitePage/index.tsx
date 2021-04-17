import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Title } from '@/components/commons/Title';
import { SEO } from '@/components/commons/SEO';

interface ISEOProps {
  seoProps?: {
    headTitle?: string;
  },
}

export interface IWebsitePageWrapper {
  seoProps: ISEOProps,
  children: ReactNode | ReactNode[];
}

export default function WebsitePageWrapper({ seoProps, children }: IWebsitePageWrapper) {
  return (
    <>
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />
      <Title>
        Alura Viagens
      </Title>
      {children}
    </>
  );
}

WebsitePageWrapper.propType = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

WebsitePageWrapper.defaultProps = {
  seoProps: {
    headTitle: '',
  },
};
