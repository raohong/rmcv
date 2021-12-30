import { styled } from '../styles';

export const StyledIframe = styled('iframe', {
  border: 0,
  width: '100%',
  height: `100%`,
});

export const StyledPreviewContainer = styled('div', {
  position: 'fixed',
  top: '90px',
  width: '$demoWidth',
  right: 30,
  height: `calc(100vh - 90px - 10vh)`,
  boxShadow: '$doc',
  borderRadius: '$md',
  zIndex: '$normal',
  overflow: 'auto',
});

export const MobilePreviewContainer = styled('div', {
  height: '100vh',
});
