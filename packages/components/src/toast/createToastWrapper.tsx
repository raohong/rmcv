import React, { useImperativeHandle, useState } from 'react';
import { reactRender } from '../_utils';
import type { ToastWrapperRef } from './interface';
import { useToast } from './useToast';

const ToastWrapper = React.forwardRef<ToastWrapperRef>((_, ref) => {
  const [multiple, setMultiple] = useState(false);
  const [api, contextHolder] = useToast(multiple);

  useImperativeHandle(ref, () => ({
    ...api,
    setMultiple,
  }));

  return contextHolder;
});

const createToastWrapper = (portal: HTMLElement) => {
  const instance: { current: ToastWrapperRef | null } = {
    current: null,
  };

  const unmount = reactRender(<ToastWrapper ref={instance} />, portal);

  return {
    instance,
    destroy() {
      unmount();
      instance.current = null;
    },
  };
};

export default createToastWrapper;
