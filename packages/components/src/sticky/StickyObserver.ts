import shallowEqual from 'shallowequal';
import {
  findScrollableContainer,
  getBoundingClientRect,
  isNumber,
} from '../_utils';
import type { IBCR } from '../_utils';

type StickyTarget = Window | Element;

type StickyCallback = () => void;

type StickyCacheData = {
  canceller: () => void;
  callbacks: Set<StickyCallback>;
};

type StickyPosition = 'top' | 'bottom';

export type StickyState = {
  affixed: boolean;
  offset: number;
  position: StickyPosition;
};

export type StickyObserverOptions = {
  getMeasureTarget: () => Element;
  offsetTop: number;
  offsetBottom?: number;
  container?: Element;
  onChange: (nextState: StickyState) => void;
};

const cache = new WeakMap<StickyTarget, StickyCacheData>();

class StickyObserver {
  static setupEventListener = (
    elem: Element | Window,
    handler: StickyCallback,
  ) => {
    window.addEventListener('resize', handler);
    elem.addEventListener('scroll', handler);

    return () => {
      elem.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  };

  static addObserver = (target: StickyTarget, callback: StickyCallback) => {
    if (!cache.has(target)) {
      cache.set(target, {
        callbacks: new Set(),
        canceller: this.setupEventListener(target, () => {
          const data = cache.get(target);

          if (data) {
            data.callbacks.forEach((item) => {
              item();
            });
          }
        }),
      });
    }

    const data = cache.get(target)!;

    data.callbacks.add(callback);

    callback();

    return () => {
      const item = cache.get(target);

      if (item) {
        item.callbacks.delete(callback);

        if (item.callbacks.size === 0) {
          cache.delete(target);
        }
      }
    };
  };

  private unobserve: () => void;

  private scrollableContainer: StickyTarget;

  private options?: StickyObserverOptions;

  private actived = false;

  private state: StickyState | null = null;

  constructor(elem: Window | Element | null, options?: StickyObserverOptions) {
    const scrollableContainer = findScrollableContainer(elem);

    this.scrollableContainer = scrollableContainer;
    this.options = options;
    this.actived = true;
    this.unobserve = StickyObserver.addObserver(
      scrollableContainer,
      this.update,
    );
  }

  public updateOptions = (options: StickyObserverOptions) => {
    this.options = {
      ...this.options,
      ...options,
    };

    this.update();
  };

  public destory = () => {
    this.unobserve();
    this.actived = false;
  };

  public update = () => {
    if (!this.actived || !this.options) {
      return;
    }

    const state = this.getStickyState();

    if (!shallowEqual(state, this.state)) {
      this.options.onChange(state);
    }

    this.state = state;
  };

  private getStickyState = (): StickyState => {
    const { getMeasureTarget, offsetBottom, offsetTop, container } =
      this.options!;

    const rootRect = getBoundingClientRect(document.documentElement);
    const rect = getBoundingClientRect(getMeasureTarget());

    const position = isNumber(offsetBottom) ? 'bottom' : 'top';

    const state: StickyState = {
      affixed: false,
      position,
      offset: 0,
    };

    if (position === 'top') {
      state.affixed = rect.top - offsetTop < rootRect.top;
      state.offset = rootRect.top + offsetTop;
    } else {
      state.affixed = rect.bottom + offsetBottom! > rootRect.bottom;
      state.offset = rootRect.bottom - offsetBottom!;
    }

    const result =
      container && state.affixed
        ? this.setInContainerState(
            state,
            rect,
            rootRect,
            getBoundingClientRect(container),
          )
        : state;

    if (result.affixed && result.position === 'bottom') {
      result.offset = rootRect.height - result.offset;
    }

    return result;
  };

  private setInContainerState(
    state: StickyState,
    rect: IBCR,
    rootRect: IBCR,
    containerRect: IBCR,
  ) {
    const nextState = { ...state };
    let tranform = 0;

    /**
     * offset 是以屏幕左上角原点为坐标的
     */

    if (nextState.position === 'top') {
      tranform = containerRect.bottom - (state.offset + rect.height);

      // rect bottom 大于 containerRect bottom 的时候需要修正
      if (tranform < 0) {
        // bottom 至少大于等于 rootRect.top
        nextState.affixed =
          state.offset + tranform + rect.height >= rootRect.top;
        nextState.offset = nextState.affixed ? state.offset + tranform : 0;
      }
    } else {
      tranform = containerRect.top - (state.offset - rect.height);

      // rect top 小于 containerRect top 的时候需要修正
      if (tranform > 0) {
        // rect top 要小于等于 rootRect bottom
        nextState.affixed =
          state.offset + tranform - rect.height <= rootRect.bottom;
        nextState.offset = nextState.affixed ? nextState.offset + tranform : 0;
      }
    }

    return nextState;
  }
}

export default StickyObserver;
