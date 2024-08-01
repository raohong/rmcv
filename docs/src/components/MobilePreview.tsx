import {
  autoUpdate,
  useClick,
  useFloating,
  useHover,
  useInteractions,
} from '@floating-ui/react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useScopedI18n } from '../../locales';

const QRCode = dynamic(() => import('react-qr-code'));

const MobilePreview = ({
  href,
  className,
  trigger,
}: {
  className?: string;
  href: string;
  trigger: React.ReactElement;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const hover = useHover(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click]);
  const t = useScopedI18n('demo');
  const origin = typeof window === 'undefined' ? '' : window.location.origin;

  return (
    <div className={clsx('relative', className)}>
      {React.cloneElement(trigger, {
        onClick() {
          setIsOpen(true);
        },
        ref: refs.setReference,
        ...getReferenceProps(),
      })}

      {isOpen && (
        <div
          className={clsx(
            'z-30 rounded-lg bg-white px-3 pb-1 pt-4 text-center shadow-lg',
          )}
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          <QRCode size={120} value={`${origin}/${href}`} />
          <p className='my-2 mt-3 text-base text-gray-500'>{t('preview')}</p>
        </div>
      )}
    </div>
  );
};

export default MobilePreview;
