import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '@/infra/tests/test-utils';

import { TextField } from './index';

describe('<TextField />', () => {
  test('render component', () => {
    render(
      <TextField
        placeholder="test placeholder"
        name="testname"
        value="test value"
        onChange={() => { }}
      />,
    );

    expect(screen.getByRole('textbox')).toHaveValue('test value');
  });

  describe('when component input is valid', () => {
    describe('and user is typing', () => {
      test('should update the value', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="test placeholder"
            name="testname"
            value="test value"
            onChange={onChangeMock}
          />,
        );

        const textFieldComponent = screen.getByPlaceholderText(/test placeholder/i);
        user.type(textFieldComponent, 'test placeholder changed');

        expect(onChangeMock).toHaveBeenCalledTimes(24);
      });
    });
  });
});
