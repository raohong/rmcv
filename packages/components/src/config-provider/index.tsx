import ConfigProvider from './ConfigProvider';

export type { ConfigContextState } from './context';

export {
  useConfigContext,
  ConfigContext,
  getGlobalConfig,
  setGlobalConfig,
  useThemeProps,
} from './context';

export default ConfigProvider;

export { ConfigProvider };
