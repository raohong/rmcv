import Previewer from 'dumi-theme-mobile/es/builtins/Previewer';
import './index.less';
import { CssBaseline } from '../../../packages/components/src';

export default (props) => (
  <CssBaseline>
    <Previewer {...props} />
  </CssBaseline>
);
