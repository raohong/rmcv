import React, { useContext } from 'react';
import { context } from 'dumi/theme';
import HeaderButton from './HeaderButton';
import Dropdown from './Dropdown';
import { styled } from '../styles';

const ArrowDown: React.FC = (props) => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2317"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M500.8 604.779L267.307 371.392l-45.227 45.27 278.741 278.613L779.307 416.66l-45.248-45.248z"
      p-id="2318"
    ></path>
  </svg>
);

const StyledArrowDown = styled(ArrowDown, {
  marginLeft: 4,
});

const labelMap: Record<string, string> = {
  'en-US': 'EN',
  'zh-CN': '中',
};

const SelectLang: React.FC = () => {
  const {
    config: { locales },
    locale,
  } = useContext(context);

  const getLocaleName = (locale?: string) =>
    (locale && labelMap[locale]) || locale;

  if (locales.length < 2) {
    return null;
  }

  if (locales.length === 2) {
    const other = locales.filter((item) => item.name !== locale);
    return <HeaderButton>{getLocaleName(other[0].name)}</HeaderButton>;
  }

  return (
    <Dropdown
      menus={locales.map((item) => ({
        title: item.label,
        value: item.name,
      }))}
      activeKey={locale}
    >
      <HeaderButton>
        {getLocaleName(locale)} <StyledArrowDown />
      </HeaderButton>
    </Dropdown>
  );
};

export default SelectLang;
