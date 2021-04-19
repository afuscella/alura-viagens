import { Text } from '@/components/foundation/Text';
import React from 'react';
import { IRadioButtonWrapper, RabioButtonBase, RadioButtonWrapper } from './styles';

export type { IHandleRadioButtonChangeEvent } from './styles';

export function RadioButton({
  id, imageSrc, imageAlt, children, checked, onChange, ...props
}: IRadioButtonWrapper) {
  const hasImage = Boolean(imageSrc);

  return (
    <RadioButtonWrapper
      checked={checked}
    >
      <RabioButtonBase
        id={id}
        onChange={onChange}
        type="radio"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />

      {hasImage && <img src={imageSrc} alt={imageAlt} />}

      <Text
        variant="smallestException"
      >
        {children}
      </Text>
    </RadioButtonWrapper>
  );
}
