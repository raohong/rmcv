import type { Vector2 } from '@use-gesture/react';

export enum Direction {
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom',
  RIGHT = 'right',
}

export const getDragDirection = ([x, y]: Vector2) => {
  if (y === 0) {
    return x < 0 ? Direction.LEFT : Direction.RIGHT;
  }

  if (x === 0) {
    return y > 0 ? Direction.BOTTOM : Direction.TOP;
  }

  const sign = Math.sign(-y * -1);
  const boundary = 45;

  let angle = (Math.acos(x / Math.hypot(x, y)) / Math.PI) * 180;

  if (sign === 1) {
    angle += 180;
  }

  if (angle <= boundary && angle > 360 - boundary) {
    return Direction.RIGHT;
  }

  if (angle > boundary && angle <= 180 - boundary) {
    return Direction.TOP;
  }

  if (angle > 180 - boundary && angle <= 180 + boundary) {
    return Direction.LEFT;
  }

  return Direction.BOTTOM;
};

export const subV = <T extends number[]>(v1: T, v2: T): T =>
  v1.map((v, i) => v - v2[i]) as T;

export const addV = <T extends number[]>(v1: T, v2: T): T =>
  v1.map((v, i) => v + v2[i]) as T;

export const clampTo = (val: number, min: number, max: number) => {
  return Math.max(min, Math.min(max, val));
};

export const isOutOfBounds = (distance: number, [min, max]: Vector2) => {
  return distance <= min || distance >= max;
};

export const scaleTo = (origin: Vector2, xy: Vector2, scaleDelta: number) => {
  return xy.map((item, i) => origin[i] + (item - origin[i]) * scaleDelta) as Vector2;
};

export const clampScaleOrigin = (
  origin: Vector2,
  xy: Vector2,
  scaleDelta: number,
  bounds: { left: number; top: number; right: number; bottom: number },
) => {
  let [tx, ty] = scaleTo(origin, xy, scaleDelta);

  tx = clampTo(tx, bounds.left, bounds.right);
  ty = clampTo(ty, bounds.top, bounds.bottom);

  const ox = (tx - xy[0] * scaleDelta) / (1 - scaleDelta);
  const oy = (ty - xy[1] * scaleDelta) / (1 - scaleDelta);

  return [ox, oy] as Vector2;
};
