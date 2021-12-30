import { styled } from '../styles';

const StyledHeaderButton = styled('button', {
  $reset: '',
  $flex: '',
  padding: '0 12px',
  height: 30,
  backgroundColor: '$bg',
  color: '$gray700',
  cursor: 'pointer',
  borderRadius: '$max',
  border: '1px solid rgba(255,255,255,.7)',
});

const HeaderButton = StyledHeaderButton;

export default HeaderButton;
