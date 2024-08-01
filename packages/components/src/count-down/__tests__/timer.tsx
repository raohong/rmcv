import { sleep } from '../../_test-utils';
import Timer from '../Timer';
import { calCountDownTimeData } from '../util';

const time = 4 * 1000;

it('updateConfig with autoStart', () => {
  const onChange = jest.fn();
  const timer = new Timer(time, {
    autoStart: false,
    onChange,
  });

  expect(onChange).not.toHaveBeenCalled();

  timer.updateConfig(time, {
    autoStart: true,
  });

  expect(onChange).toHaveBeenCalledWith(calCountDownTimeData(time));
});

it('updateConfig with millisecond', async () => {
  let count = 0;
  const onChange = jest.fn(() => {
    count += 1;
  });
  const timer = new Timer(time, {
    onChange,
  });

  await sleep(1200);

  timer.updateConfig(time, {
    millisecond: true,
  });

  await sleep(20 * 20);

  expect(count).toBeGreaterThan(20);

  timer.updateConfig(time, {
    millisecond: false,
  });

  await sleep(400 + 50);

  expect(onChange).toHaveBeenCalledWith(calCountDownTimeData(time - 2000));
});

it('start, pause and reset api', async () => {
  const onChange = jest.fn();
  const timer = new Timer(time, {
    onChange,
    autoStart: true,
  });

  timer.start();
  expect(onChange).toHaveBeenCalled();

  timer.pause();

  await sleep(1000 + 10);

  expect(onChange).toHaveBeenCalledTimes(1);

  timer.start();
  expect(onChange).toHaveBeenCalledWith(calCountDownTimeData(time));

  timer.reset();
  expect(onChange).toHaveBeenCalledTimes(3);
});
