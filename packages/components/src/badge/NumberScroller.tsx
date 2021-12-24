import { animated, Spring } from '@react-spring/web';
import React from 'react';
import classNames from 'classnames';
import type {
  NumberDir,
  NumberSign,
  NumberScrollerProps,
  NumberScrollerState,
} from './interface';

const getDiffList = (
  value: number,
  previous: number,
  dir: NumberDir,
  sign: NumberSign,
) => {
  const result = [];

  if (previous !== value) {
    let i = previous;
    const numberDir = sign * dir;

    while (i !== value) {
      result.push(i);
      i = (i + numberDir + 10) % 10;
    }

    result.push(value);

    if (sign === -1) {
      result.reverse();
    }
  }

  return result;
};

class NumberScroller extends React.PureComponent<
  NumberScrollerProps,
  NumberScrollerState
> {
  constructor(props: NumberScrollerProps) {
    super(props);

    this.state = {
      diff: [],
      shouldAnimate: false,
      value: null,
    };
  }

  private unmounted = false;

  reset = () => {
    if (!this.unmounted) {
      this.setState({
        shouldAnimate: false,
      });
    }
  };

  componentWillUnmount() {
    this.unmounted = true;
  }

  static getDerivedStateFromProps(
    nextProps: NumberScrollerProps,
    prevState: NumberScrollerState,
  ) {
    const { value, dir, sign } = nextProps;

    if (value !== prevState.value) {
      const diff = getDiffList(value, prevState.value ?? value, dir, sign);
      return {
        diff,
        shouldAnimate: diff.length > 0,
        value,
      } as Partial<NumberScrollerState>;
    }

    return null;
  }

  render() {
    const { diff, shouldAnimate, value } = this.state;
    const { baseCls, sign } = this.props;
    const reverse = sign === -1;

    return (
      <span className={baseCls}>
        <span
          style={{
            visibility: shouldAnimate ? 'hidden' : undefined,
          }}
          className={`${baseCls}-current`}
        >
          {value}
        </span>
        {shouldAnimate && (
          <Spring
            from={{
              y: '0%',
            }}
            to={{
              y: `${((diff.length - 1) / diff.length) * sign * -100}%`,
            }}
            onRest={this.reset}
            reset
          >
            {({ y }) => (
              <animated.span
                style={{
                  y,
                }}
                className={classNames(`${baseCls}-scroller`, {
                  [`${baseCls}-scroller--reverse`]: reverse,
                })}
              >
                {diff.map((item) => (
                  <span className={`${baseCls}-scroller-value`} key={item}>
                    {item}
                  </span>
                ))}
              </animated.span>
            )}
          </Spring>
        )}
      </span>
    );
  }
}

export default NumberScroller;
