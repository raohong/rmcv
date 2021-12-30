import React, { useContext } from 'react';
import { context } from 'dumi/theme';
import { useDemoMenuList } from './hooks';
import { styled } from './styles';

const Container = styled('div', {
  backgroundColor: '#fff',
  padding: '46px 20px 70px',
});

const StyledMenuContainer = styled('div');
const StyledMenuTitle = styled('h2', {
  fontSize: '$1',
  margin: '24px 0 8px 16px',
  color: '$text2',
});

const StyledMenu = styled('button', {
  $flex: '',
  width: '100%',
  outline: 0,
  border: 0,
  borderRadius: '$max',
  color: '$gray600',
  marginBottom: 12,
  paddingLeft: 20,
  backgroundColor: '$demoBg',
  textDecoration: 'none',
  height: 40,
  transition: 'all 0.15s',
  '&:hover': {
    backgroundColor: '$demoNavHoverBg',
  },
  '&:active': {
    backgroundColor: '$demoNavActiveBg',
  },
});

const Desc = styled('div', {
  'h1, h2': {
    paddingLeft: 16,
    fontWeight: 'normal',
    userSelect: 'none',
    lineHeight: 1.04,
  },
  h1: {
    fontSize: 32,
    margin: '0 0 16px',
    $flex: '',
    gap: 16,
    textTransform: 'uppercase',
  },
  h2: {
    margin: '0 0 40px 0',
    fontSize: '$1',
    color: '$text2',
  },
  img: {
    width: 32,
    margin: 0,
  },
});

const DemoNav: React.FC = () => {
  const {
    config: { logo, title, theme },
  } = useContext(context);
  const menuList = useDemoMenuList();

  const handleClick = (path?: string) => {
    if (!path) {
      return;
    }

    window.top.postMessage(
      JSON.stringify({
        type: 'DEMO_ROUTE_CHANGE',
        data: path,
      }),
      location.origin,
    );
  };

  return (
    <Container>
      <Desc>
        <h1>
          {typeof logo === 'string' && <img src={logo} alt="" />}
          <span>{title}</span>
        </h1>
        <h2>{theme.desc}</h2>
      </Desc>
      {menuList.map((item) => (
        <StyledMenuContainer key={item.title}>
          <StyledMenuTitle>{item.title}</StyledMenuTitle>
          {item.children?.map((menu) => (
            <StyledMenu onClick={() => handleClick(menu.path)} key={menu.title}>
              {menu.title}
            </StyledMenu>
          ))}
        </StyledMenuContainer>
      ))}
    </Container>
  );
};

export default DemoNav;
