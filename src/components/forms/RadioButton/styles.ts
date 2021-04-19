import styled, { css } from 'styled-components';
import { Text } from '@/components/foundation/Text';
import { ReactNode } from 'react';

export interface IHandleRadioButtonChangeEvent {
  target: {
    id: string;
  };
}

interface IRabioButtonBase {
  id?: string;
  type: string;
  name: string;
  imageSrc?: string;
  imageAlt?: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IHandleRadioButtonChangeEvent) => void;
  children: ReactNode;
}

export interface IRadioButtonWrapper {
  id?: string;
  name?: string;
  imageSrc?: string;
  imageAlt?: string;
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: IHandleRadioButtonChangeEvent) => void;
  children?: ReactNode;
}

export const RabioButtonBase = styled(Text) <IRabioButtonBase>`
  position: absolute;
  appearance: none;
`;

export const RadioButtonWrapper = styled.label<IRadioButtonWrapper>`
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 100%;

  transition: ${({ theme }) => theme.transition};

  ${({ checked }) => checked && css`
    background: ${({ theme }) => `${theme.colors.primary.main.color}20`};
  `}

  &:first-child {
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
  }

  &:last-child {
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
  }
`;

RabioButtonBase.defaultProps = {
  type: 'radio',
  tag: 'input',
  color: 'tertiary.main',
};
