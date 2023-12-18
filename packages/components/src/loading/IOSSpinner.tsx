import { keyframes, styled } from '@rmc-vant/system';
import React from 'react';

const indexList = Array.from({ length: 12 }, (_, i) => i);

const rootKeyframes = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const IOSSpinnerRoot = styled<'span', { duration: number }>('span')(
  {
    width: '1em',
    height: '1em',
    position: 'relative',
    color: 'inherit',
    boxSizing: 'border-box',
    display: 'inline-block',

    '& > i': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      color: 'inherit',

      '&::after': {
        position: 'absolute',
        top: 0,
        left: '50%',
        marginLeft: -1,
        borderRadius: 1,
        backgroundColor: 'currentColor',
        width: 2,
        height: '20%',
        content: '""',
      },
      ...Object.fromEntries(
        indexList.map((item) => [
          `&:nth-of-type(${item})`,
          {
            opacity: item / indexList.length,
            transform: `rotate(${(item / indexList.length) * 360}deg)`,
          },
        ]),
      ),
    },
  },
  ({ componentState: { duration } }) => ({
    animation: `${rootKeyframes} ${duration}s  steps(12) infinite`,
  }),
);

const IOSSpinner: React.FC<{ className?: string; duration?: number }> = ({
  className,
  duration = 0.98,
}) => {
  return (
    <IOSSpinnerRoot className={className} componentState={{ duration }}>
      {indexList.map((item) => (
        <i key={item} />
      ))}
    </IOSSpinnerRoot>
  );
};

export default IOSSpinner;
