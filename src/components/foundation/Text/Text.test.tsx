import React from 'react';
import { render, screen } from '../../../infra/tests/test-utils';

import { Text } from './index';

describe('<Text />', () => {
  describe('render component', () => {
    test('with title', () => {
      render(
        <Text variant="title">
          Test
        </Text>,
      );

      const textComponent = screen.getByText('Test');
      expect(textComponent).toMatchSnapshot();
    });

    test('with paragraph', () => {
      render(
        <Text variant="paragraph">
          Test
        </Text>,
      );

      const textComponent = screen.getByText('Test');
      expect(textComponent).toMatchSnapshot();
    });
  });
});
