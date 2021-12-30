import React, { useContext } from 'react';
import { context, AnchorLink } from 'dumi/theme';
import { styled, css } from '../styles';
import { useMenuList } from '../hooks';

const StyledSidebar = styled('div', {
  position: 'fixed',
  left: 0,
  bottom: 0,
  top: '$header',
  zIndex: 1,
  backgroundColor: '#fff',
  padding: '24px 0',
  overflow: 'auto',
  boxShadow: '$card',
  width: '$sidebarWidth',
  '@media screen and (min-width: 1680px)': {
    left: '50%',
    marginLeft: '$sidebarMaxScreen',
  },
});

const StyledMenu = styled('ul', {
  marginBottom: 16,
  paddingLeft: 6,
});

const StyledMenuItems = styled('li', {
  position: 'relative',
  margin: 0,
});

const menuItemCSS = css({
  lineHeight: '20px',
  margin: '8px 0',
  color: '$gray500',
  padding: '8px 0 8px 24px',
  textDecoration: 'none',
  display: 'block',
  $hover: '',
  transition: 'color 0.2s, background-color 0.2s',
  variants: {
    state: {
      active: {
        backgroundColor: '$menuBg',
        color: '$primary',
        borderRadius: '$max',
      },
    },
  },
});

const StyledMenuItem = styled('div', menuItemCSS);
const StyledMenuItemAnchor = styled(AnchorLink, menuItemCSS);

const StyledMenuTitle = styled('li', {
  fontSize: '$menuHeader',
  lineHeight: '28px',
  fontWeight: 600,
  padding: '8px 0 0 24px',
  color: '$gray500',
});

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof StyledSidebar>
>(({ children, ...props }, ref) => {
  const {
    meta: { __pathname },
  } = useContext(context);
  const menuList = useMenuList();

  return (
    <StyledSidebar {...props} ref={ref}>
      {menuList.map((item) => (
        <StyledMenu key={item.path || item.title}>
          <StyledMenuTitle>{item.title}</StyledMenuTitle>
          <StyledMenuItems role="menu">
            {item.children?.map((menu) =>
              menu.path ? (
                <StyledMenuItemAnchor
                  key={menu.path}
                  to={menu.path}
                  title={menu.title}
                  role="menuitem"
                  state={menu.path === __pathname ? 'active' : undefined}
                >
                  {menu.title}
                </StyledMenuItemAnchor>
              ) : (
                <StyledMenuItem
                  role="menuitem"
                  title={menu.title}
                  key={menu.title}
                >
                  {menu.title}
                </StyledMenuItem>
              ),
            )}
          </StyledMenuItems>
        </StyledMenu>
      ))}
    </StyledSidebar>
  );
});

export default Sidebar;
