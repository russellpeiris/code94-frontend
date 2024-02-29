import styled from '@emotion/styled';
import { Layout as AntLayout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { colors } from '../../theme';

const { Header } = AntLayout;

const FixedHeader = styled(Header)`
  height: 64px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.primary};
`;

export const NavigationBar = () => {
  return (
    <FixedHeader>
      <Avatar style={{ backgroundColor: colors.background, marginRight: 16 }} icon={<UserOutlined />} />
    </FixedHeader>
  );
};
