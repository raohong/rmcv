import React, { useContext, useEffect } from 'react';
import { useLocation } from 'umi';
import type { IPreviewerComponentProps } from 'dumi/theme';
import { context, useLocaleProps, useDemoUrl } from 'dumi/theme';
import { StyledPreviewContainer, StyledIframe } from '../components';
import DemoContext from '../context';

const Previewer: React.FC<IPreviewerComponentProps> = (oProps) => {
  const { locale = 'zh-CN' } = useContext(context);
  const props = useLocaleProps<IPreviewerComponentProps>(locale, oProps);
  const demoUrl = useDemoUrl(props.identifier);
  const setDemoUrl = useContext(DemoContext)?.setDemoUrl;
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.top.postMessage(
        JSON.stringify({
          type: 'DEMO_ROUTE_CHANGE',
          data: pathname,
        }),
        location.origin,
      );
    }
  }, [pathname]);

  useEffect(() => {
    if (demoUrl && setDemoUrl) {
      setDemoUrl(demoUrl);
    }
  }, [setDemoUrl, demoUrl]);

  useEffect(() => {
    return () => {
      setDemoUrl?.(null);
    };
  }, [setDemoUrl]);

  return (
    <StyledPreviewContainer>
      <StyledIframe src={demoUrl} />
    </StyledPreviewContainer>
  );
};

export default Previewer;
