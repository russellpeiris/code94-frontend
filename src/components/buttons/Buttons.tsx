import styled from '@emotion/styled';
import { Button, ButtonProps } from 'antd';
import { FC } from 'react';
import { colors } from '../../../theme';

type Props = ButtonProps & {
  buttontext?: string;
  icon?: React.ReactNode;
};

const StyledButton = styled(Button)`
  border-radius: 8px;
  display: inline-flex;
  padding: 15px 67px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background: ${colors.accent};
  gap: 10px;
  transition: all 0 ease-in-out;
  font-family: Satoshi-Regular;
  font-size: 1.188rem;

  &.ant-btn-default {
    background: white;
    color: ${colors.accent};
    border: 1px solid ${colors.accent};
  }
`;

export const PrimaryButton: FC<Props> = ({ ...props }) => {
  return (
    <StyledButton type="primary" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};

export const SecondaryButton: FC<Props> = ({ ...props }) => {
  return (
    <StyledButton type="default" {...props}>
      {props.buttontext}
    </StyledButton>
  );
};
