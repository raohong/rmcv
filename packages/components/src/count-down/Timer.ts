import isNumber from 'lodash/isNumber';
import raf from 'raf';
import type { CountDownTimeData } from './interface';
import { calCountDownTimeData } from './util';

type CountDownTimerOptions = {
  autoStart: boolean;
  millisecond: boolean;
  onChange?: (data: CountDownTimeData) => void;
  onFinish?: () => void;
};

const defaultOptions: CountDownTimerOptions = {
  autoStart: true,
  millisecond: false,
};

const INTERVAL = 1000;

class CountDownTimer {
  private time: number;

  private startTime: number = 0;

  private lastTime: number = 0;

  private elapsedTime: number = 0;

  private options: CountDownTimerOptions;

  private active: boolean = false;

  private canceller: (() => void) | null = null;

  private paused: boolean = false;

  constructor(time: number, options?: Partial<CountDownTimerOptions>) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.time = time;

    if (this.options.autoStart) {
      this.start();
    }
  }

  updateConfig(time: number, options: Partial<CountDownTimerOptions>) {
    const { autoStart, millisecond } = this.options;

    Object.assign(this.options, options);

    /**
     * time 改变需要重新计时
     */
    if (this.time !== time) {
      this.time = time;
      this.reset();

      return;
    }

    this.cancel();

    if (this.active) {
      if (millisecond !== options.millisecond) {
        if (options.millisecond) {
          this.count();
        } else {
          /**
           * 切换为 millsecond 的时候 interval 需要修正为整数
           */
          this.count(true, INTERVAL - (this.elapsedTime % INTERVAL));
        }
      }
      /**
       * autoStart 从 false 变为 true 那么要开始
       */
    } else if (
      autoStart !== options.autoStart &&
      !this.active &&
      options.autoStart
    ) {
      this.start();
    }
  }

  pause() {
    this.paused = true;
    this.stop();
  }

  reset() {
    this.elapsedTime = 0;
    this.paused = false;
    this.destory();

    if (this.options.autoStart) {
      this.start();
    }
  }

  start() {
    if (this.active) {
      return;
    }

    this.startTime = this.paused ? Date.now() - this.elapsedTime : Date.now();
    this.lastTime = this.startTime;
    this.elapsedTime = 0;
    this.active = true;
    this.paused = false;
    this.count();
  }

  destory() {
    this.stop();
  }

  count(fixed?: boolean, interval?: number) {
    const { onChange, onFinish, millisecond } = this.options;
    const now = Date.now();
    const precision = 16 * 5;

    const elapsedTime = now - this.startTime;
    const executionTime = now - this.lastTime;

    // 如果执行时间过长 通常是浏览器切换 tab  或者休眠 这个时候不需要考虑 精度 用户感觉不到:)
    const timeout = executionTime > INTERVAL + precision;
    const fixedInterval =
      fixed && !timeout
        ? Math.min(INTERVAL, INTERVAL + (INTERVAL - executionTime) * 2)
        : INTERVAL;

    this.elapsedTime = elapsedTime;

    const countDownValue = this.time - this.elapsedTime;
    // 修正 value 显示秒数的整数
    const fixedValue = Math.floor(countDownValue / INTERVAL) * INTERVAL;
    const displayValue = Math.max(
      0,
      timeout || millisecond ? countDownValue : fixedValue,
    );

    const data = calCountDownTimeData(displayValue);

    onChange?.(data);

    this.lastTime = now;

    if (displayValue === 0) {
      this.active = false;
      onFinish?.();
    } else {
      this.do(isNumber(interval) ? interval : fixedInterval);
    }

    return data;
  }

  private do(timeout = INTERVAL) {
    const { millisecond } = this.options;

    const callback = () => {
      if (this.active) {
        this.count(true);
      }
    };

    if (millisecond) {
      const rafId = raf(callback);
      this.canceller = () => raf.cancel(rafId);
    } else {
      const timerId = setTimeout(callback, timeout);
      this.canceller = () => clearTimeout(timerId);
    }
  }

  private stop() {
    this.active = false;

    this.cancel();
  }

  private cancel() {
    if (this.canceller) {
      this.canceller();
      this.canceller = null;
    }
  }
}

export default CountDownTimer;
