import styled from '@emotion/styled';
import { Input } from 'antd';
import { FC } from 'react';
import { Flex, Text } from '..';
import { colors } from '../../../theme';

type InputBoxProps = {
  placeholder?: string;
  onChange?: (e: any) => void;
  onClick?: () => void;
  label?: string;
  labelPosition?: 'top' | 'left';
  height?: string;
  width?: string;
  type?: string;
};
const StyledInput = styled(Input)`
  /* width: ${(props) => (props.width ? props.width : '400px')}; */
  height: ${(props) => (props.height ? props.height : '45px')};
  border-radius: 5px;
  padding: 10px 15px;
  background-color: #f7f7f7;
  border: none;
`;

export const InputBox: FC<InputBoxProps> = ({ ...props }) => {
  const { label, labelPosition, ...otherProps } = props;
  labelPosition ? labelPosition : 'left';
  return (
    <>
      <Flex
        alignItems={labelPosition === 'top' ? 'flex-start' : 'center'}
        justifyContent={'center'}
        style={{ gap: '44px' }}
        flexDirection={labelPosition === 'top' ? 'column' : 'row'}
      >
        <Text type="text-default">{label}</Text>
        <StyledInput {...otherProps} />
      </Flex>
    </>
  );
};
