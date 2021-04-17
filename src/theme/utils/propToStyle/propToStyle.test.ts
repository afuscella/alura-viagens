import { propToStyle } from './index';

const propToStyleTextAlign = propToStyle('textAlign');
const propToStyleFlex = propToStyle('flex');

describe('propToStyle()', () => {
  describe('when propToStyle receives an sample argument', () => {
    test('and its is a string, should convert to style', () => {
      // <Text textAlign="center" />
      const componentPropsExp = { textAlign: 'center' }; // string
      const componentPropsAct = propToStyleTextAlign(componentPropsExp);

      expect(componentPropsExp).toEqual(componentPropsAct);
    });

    test('and its is a number, should convert to style', () => {
      // <Box flex={1} />
      const componentPropsExp = { flex: 1 }; // number
      const componentPropsAct = propToStyleFlex(componentPropsExp);

      expect(componentPropsExp).toEqual(componentPropsAct);
    });
  });

  describe('when propToStyle receives an argument with breakpoint', () => {
    test('render only a single small breakpoint resolution', () => {
      // <Text textAlign={{ xs: 'center' }} />
      const componentProps = { textAlign: { xs: 'center' } };
      const componentPropsAct = propToStyleTextAlign(componentProps);

      expect(componentPropsAct).toMatchSnapshot();
    });

    test('render only a single extra large breakpoint resolution', () => {
      // <Text textAlign={{ xl: 'center' }} />
      const componentProps = { textAlign: { xl: 'center' } };
      const componentPropsAct = propToStyleTextAlign(componentProps);

      expect(componentPropsAct).toMatchSnapshot();
    });
  });

  describe('when propToStyle receives an argument with breakpoints', () => {
    test('render multiple breakpoints resolution', () => {
      // <Text textAlign={{ sm: 'left', md: 'center', lg: 'right' }} />
      const componentProps = { textAlign: { sm: 'left', md: 'center', lg: 'right' } };
      const componentPropsAct = propToStyleTextAlign(componentProps);

      expect(componentPropsAct).toMatchSnapshot();
    });
  });
});
