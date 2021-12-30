import React from 'react';
import { styled } from '../styles';

const StyledIconLink = styled('a', {
  display: 'flex',
  width: 30,
  height: 30,
  transition: '0.2s',
  color: '#fff',
  fontSize: 30,
  lineHeight: 1,
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

const IconLink: React.FC<{
  href: string;
  icon: React.ReactNode;
}> = ({ href, icon }) => {
  return (
    <StyledIconLink target="_blank" href={href}>
      {icon}
    </StyledIconLink>
  );
};

export default IconLink;
