import React from 'react';
import RCDropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { useControllableValue } from 'ahooks';
import * as styles from './Dropdown.module.less';

type DropdownMenu = {
  label: string;
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
      <ul className={styles.dropdown}>
        {menus.map((menu) => (
          <li
            className={`${styles.menu} ${
              menu.value === activeKey ? styles.selected : ''
            }`.trim()}
            key={menu.value}
            onClick={() => setActiveKey(menu.value)}
          >
            {menu.label}
          </li>
        ))}
      </ul>
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
