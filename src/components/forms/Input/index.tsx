import styled from 'styled-components';
import { propToStyle } from '@/theme/utils/propToStyle';
import { Text } from '@/components/foundation/Text';

interface IInputBase {
  type: string;
  role: string;
  placeholder?: string;
  name: string;
  value: string;
}

export const InputBase = styled(Text) <IInputBase>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  
  &:focus {
    transition: ${({ theme }) => theme.transition};
    box-shadow: 0 0 8px 1px ${({ theme }) => theme.colors.primary.main.color};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 17px;
  ${propToStyle('paddingRight')}
`;

InputBase.defaultProps = {
  tag: 'input',
  variant: 'paragraph',
};
