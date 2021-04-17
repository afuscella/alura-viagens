import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { SEO } from '@/components/commons/SEO';
import { Text } from '@/components/foundation/Text';

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
      <Text
        variant="title"
        tag="h1"
        color="primary.main"
      >
        Alura Viagens
      </Text>
      <Text
        variant="subTitle"
        tag="span"
        color="secondary.main"
      >
        Quando será a viagem?
      </Text>
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
