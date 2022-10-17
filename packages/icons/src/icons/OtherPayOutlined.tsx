import React from 'react';
import type { IconComponentProps } from '../interface';
import '../style/index.less';
import createIcon from '../utils/createIcon';

const OtherPayOutlinedSvgComponent: React.FC<IconComponentProps> = (props) => (
  <svg
    {...props}
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M910.222336 170.667008c31.403008 0 56.88832 25.486336 56.88832 56.88832v568.889344c0 31.401984-25.485312 56.88832-56.88832 56.88832H113.77664c-31.403008 0-56.88832-25.486336-56.88832-56.88832V227.555328c0-31.401984 25.485312-56.88832 56.88832-56.88832z m0 56.88832H113.77664v568.889344H910.22336V227.555328zM341.037056 549.92896c23.552 0 42.667008-19.115008 42.667008-42.667008s-19.115008-42.665984-42.667008-42.665984-42.665984 19.113984-42.665984 42.665984c0 23.552 19.113984 42.667008 42.665984 42.667008m170.667008 0c23.552 0 42.667008-19.115008 42.667008-42.667008s-19.115008-42.665984-42.667008-42.665984-42.667008 19.113984-42.667008 42.665984c0 23.552 19.115008 42.667008 42.667008 42.667008m170.667008 0c23.552 0 42.665984-19.115008 42.665984-42.667008s-19.113984-42.665984-42.665984-42.665984c-23.552 0-42.667008 19.113984-42.667008 42.665984 0 23.552 19.115008 42.667008 42.667008 42.667008" />
  </svg>
);

const OtherPayOutlined = createIcon(
  OtherPayOutlinedSvgComponent,
  'OtherPayOutlined',
);

export default OtherPayOutlined;
