import { FC } from 'react';
import { Flex } from '../components';
import { FlexBoxProps } from '../components/flex/Flex';

interface Props extends FlexBoxProps{
  children: React.ReactNode;
}

export const Screen: FC<Props> = ({ ...props }) => {
  return (
    <Flex
      height={'calc(100vh - 64px)'}
      padding={'64px 83px 49px 83px'}
      margin={'0'}
      width={'100%'}
      background={'white'}
      {...props}
    >
      {props.children}
    </Flex>
  );
};
