import React, { useContext } from 'react';
import { context } from 'dumi/theme';
import { styled } from '../styles';
import image from '../assets/logo.png';

const StyledLogo = styled('img', {
  width: 28,
  height: 28,
});

const StyledSiteName = styled('h1', {
  margin: 0,
  textTransform: 'capitalize',
  color: '#fff',
  fontSize: 22,
  fontWeight: 500,
});

const StyledContainer = styled('div', {
  $flex: '',
  gap: 12,
});

const Logo: React.FC = () => {
  const { config } = useContext(context);

  return (
    <StyledContainer>
      <StyledLogo src={image} />
      <StyledSiteName>{config.title}</StyledSiteName>
    </StyledContainer>
  );
};

export default Logo;
