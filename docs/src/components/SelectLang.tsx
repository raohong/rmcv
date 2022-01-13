import React from 'react';
import HeaderButton from './HeaderButton';
import Dropdown from './Dropdown';
import { usePageContext } from './context';

const ArrowDown: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => (
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

const labelMap: Record<string, string> = {
  'en-US': 'EN',
  'zh-CN': '中',
};

const SelectLang: React.FC = () => {
  const {
    site: { locales },
    locale,
  } = usePageContext();

  const getLocaleName = (locale?: string) => (locale && labelMap[locale]) || locale;

  if (locales.length < 2) {
    return null;
  }

  if (locales.length === 2) {
    const other = locales.filter((item) => item.value !== locale);
    return <HeaderButton>{other[0].label}</HeaderButton>;
  }

  return (
    <Dropdown menus={locales} activeKey={locale}>
      <HeaderButton>
        {getLocaleName(locale)} <ArrowDown style={{ marginLeft: 4 }} />
      </HeaderButton>
    </Dropdown>
  );
};

export default SelectLang;
