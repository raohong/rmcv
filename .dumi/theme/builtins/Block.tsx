import React from 'react';
import { styled } from '../styles';

const StyledContainer = styled('div', {
  marginBottom: 24,
  padding: 24,
  borderRadius: 20,
  boxShadow: '$doc',
  backgroundColor: '#fff',
});

const Block: React.FC = ({ children }) => {
  return <StyledContainer className="doc-content">{children}</StyledContainer>;
};

export default Block;
