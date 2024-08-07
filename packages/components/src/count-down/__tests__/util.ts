import { formatCountDownTimeData } from '../util';

it('format: [SS]', () => {
  expect(formatCountDownTimeData(228, 'SS')).toBe('22');
});

it('format: [DD:HH:m]', () => {
  expect(formatCountDownTimeData(1000 * 60 * 60 * 24 * 29, 'DD:HH:m')).toBe(
    '29:00:0',
  );
});

it('out of order format: [mm:ss]', () => {
  expect(formatCountDownTimeData(1000 * 22 + 1000 * 5 * 60, 'mm:ss')).toBe('05:22');
});
