import React from 'react';
import { Box } from '@/components/foundation/layout/Box';
import { Grid } from '@/components/foundation/layout/Grid';
import { Text } from '@/components/foundation/Text';
import { FormRegister } from '@/components/pattern/FormRegister';

export function HomeScreen() {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Grid.Row
        flex={1}
        marginTop={{ xs: '16px', md: 0 }}
        marginBottom="18px"
      >
        <Grid.Column
          flex={1}
          display="flex"
          offset={{ xs: 0, md: 2 }}
          value={{ xs: 12, md: 10 }}
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

      <FormRegister />

    </Box>
  );
}
