import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import { Box } from '@/components/foundation/layout/Box';
import { SEO } from '@/components/commons/SEO';
import { Text } from '@/components/foundation/Text';
import { Grid } from '@/components/foundation/layout/Grid';

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
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginLeft={{ xs: '10px', md: 0 }}
      marginRight={{ xs: '10px', md: 0 }}
      backgroundColor="background.main"
    >
      <SEO
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />
      <Grid.Container
        flex={1}
        boxShadow="0 0 24px rgb(0 0 0 / 15%)"
        backgroundColor="background.light"
      >
        <Grid.Row
          flex={1}
          marginTop={{ xs: '18px', md: 0 }}
        >
          <Grid.Column
            flex={1}
            display="flex"
            offset={{ lg: 2 }}
            value={{ xs: 12, md: 6, lg: 10 }}
          >
            <Text
              variant="title"
              tag="span"
              color="primary.main"
            >
              Alura Viagens
            </Text>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          flex={1}
          marginTop={{ xs: '10px', md: 0 }}
        >
          <Grid.Column
            flex={1}
            display="flex"
            offset={{ lg: 2 }}
            value={{ xs: 12, md: 6, lg: 10 }}
          >
            <Text
              variant="subTitle"
              tag="span"
              color="secondary.main"
            >
              Quando será a viagem?
            </Text>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid.Row>

      </Grid.Container>
    </Box>
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
