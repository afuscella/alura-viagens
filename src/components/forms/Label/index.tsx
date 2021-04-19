import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from '@/components/foundation/Text';

const LabelWrapper = styled(Text)`
  display: block;
  margin-bottom: 8px;
`;

interface ILabel {
  children: ReactNode | ReactNode[]
}

export function Label({ children }: ILabel) {
  return (
    <LabelWrapper>
      {children}
    </LabelWrapper>
  );
}

LabelWrapper.defaultProps = {
  tag: 'label',
  variant: 'paragraph',
  color: 'tertiary.main',
};
