import styled from '@emotion/styled';
import { Input } from 'antd';
import { FC } from 'react';
import { Text } from '..';

interface Props {
  onFileChanged: (files: FileList | null) => void;
  label: string;
  accept?: string;
}
const StyledInput = styled(Input)`
  border: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FileUpload: FC<Props> = ({ onFileChanged, label, accept = '.png, .jpeg, .jpg' }) => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      onFileChanged(event.target.files);
    } else {
      onFileChanged(null);
    }
  };

  return (
    <Container>
      <Text type="text-default">{label}</Text>
      <StyledInput
        type="file"
        accept={accept}
        multiple // Enable multi-file upload
        onChange={handleUpload}
      />
    </Container>
  );
};
