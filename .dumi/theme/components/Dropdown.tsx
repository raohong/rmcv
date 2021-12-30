import React from 'react';
import RCDropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { useControllableValue } from 'ahooks';
import { styled } from '../styles';

const StyledDropdown = styled('ul', {
  backgroundColor: '#fff',
  borderRadius: '$sm',
  boxShadow: '$dropdown',
  fontSize: '$1',
  overflow: 'hidden',
});

const StyledDropdownMenu = styled('li', {
  paddingLeft: 12,
  paddingRight: 12,
  height: 36,
  $flex: '',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$bg',
    color: '$accent1',
  },
  variants: {
    state: {
      selected: {
        color: '$primary',
      },
    },
  },
});

type DropdownMenu = {
  title: string;
  value: string | number;
};

type DropdownProps = {
  children: React.ReactElement;
  menus: DropdownMenu[];
  onChange?: (current: string | undefined) => void;
  activeKey?: string;
  visible?: boolean;
  onVisibleChange?: (visible: boolean | undefined) => void;
};

const Dropdown = React.forwardRef<HTMLUListElement, DropdownProps>(
  (props, ref) => {
    const { menus, children } = props;
    const [activeKey, setActiveKey] = useControllableValue(props);
    const [visible, setVisible] = useControllableValue<boolean>(props, {
      valuePropName: 'visible',
      trigger: 'onVisibleChange',
      defaultValue: false,
    });

    const child = React.Children.only(children);
    const content = (
      <StyledDropdown>
        {menus.map((menu) => (
          <StyledDropdownMenu
            state={menu.value === activeKey ? 'selected' : undefined}
            key={menu.value}
            onClick={() => setActiveKey(menu.value)}
          >
            {menu.title}
          </StyledDropdownMenu>
        ))}
      </StyledDropdown>
    );

    return (
      <RCDropdown
        visible={visible}
        onVisibleChange={setVisible}
        trigger={['click']}
        overlay={content}
        animation="slide-up"
        ref={ref}
      >
        {child}
      </RCDropdown>
    );
  },
);

export default Dropdown;
