import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Input } from 'antd';
import { FC } from 'react';
import { Flex } from '..';
import { PrimaryButton } from '../buttons/Buttons';

type SearchBarProps = {
  placeholder?: string;
  onChange?: (e: any) => void;
  triggerClick?: () => void;
};
const StyledSearch = styled(Input)`
  width: 757px;
  height: 64px;
  border-radius: 50px;
  padding-left: 29px;
  font-size: 1.188rem;
  font-family: Satoshi-Regular;
`;

export const SearchBar: FC<SearchBarProps> = ({ ...props }) => {
  const { triggerClick, placeholder, onChange } = props;
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <StyledSearch
        onChange={onChange}
        placeholder={placeholder}
        suffix={
          <PrimaryButton
            icon={<SearchOutlined />}
            style={{ height: '45px', borderRadius: '50px', width: '180px' }}
            onClick={triggerClick}
            buttontext="Search"
          />
        }
      />
    </Flex>
  );
};
