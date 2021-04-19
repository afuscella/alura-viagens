const fontFamily = {
  title: '\'Pattaya\'',
  text: '\'Roboto\', sans-serif',
};

export const typographyVariants = {
  title: {
    fontFamily: fontFamily.title,
    fontSize: '72px',
    fontWeight: '400',
    lineHeight: 2, // 200%
  },
  titleXS: {
    fontFamily: fontFamily.title,
    fontSize: '36px',
    fontWeight: '400',
    lineHeight: 1.5, // 150%
  },
  subTitle: {
    fontFamily: fontFamily.text,
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
  paragraph: {
    fontFamily: fontFamily.text,
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: 1, // 100%
  },
  smallestException: {
    fontFamily: fontFamily.text,
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1, // 100%
  },
};
