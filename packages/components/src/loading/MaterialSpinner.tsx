import { keyframes, styled } from '@rmc-vant/system';
import React from 'react';

const dashOffset = '137.34px';

const rootKeyframes = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(270deg)',
  },
});

const circleKeyframes = keyframes({
  '0%': {
    strokeDashoffset: dashOffset,
  },
  '50%': {
    strokeDashoffset: `calc(${dashOffset} / 4)`,
    transform: 'rotate(135deg)',
  },
  '100%': {
    strokeDashoffset: dashOffset,
    transform: 'rotate(450deg)',
  },
});

const MaterialSpinnerRoot = styled<'svg', { duration: number }>('svg')(
  ({ componentState: { duration } }) => ({
    width: '1em',
    height: '1em',
    animation: `${rootKeyframes} ${duration}s linear infinite`,

    '& > circle': {
      strokeDashoffset: 0,
      strokeDasharray: dashOffset,
      transformOrigin: 'center',
      stroke: 'currentcolor',
      animation: `${circleKeyframes} ${duration}s ease-in-out infinite`,
    },
  }),
);

const MaterialSpinner: React.FC<{
  className?: string;
  duration?: number;
}> = ({ className, duration = 1.8 }) => {
  return (
    <MaterialSpinnerRoot
      className={className}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      componentState={{ duration }}
    >
      <circle fill="none" strokeWidth="3" cx="25" cy="25" r="22" />
    </MaterialSpinnerRoot>
  );
};

export default MaterialSpinner;
