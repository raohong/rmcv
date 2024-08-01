const sleep = (timeout = 0): Promise<void> =>
  new Promise<void>((r) => {
    setTimeout(() => {
      r();
    }, timeout);
  });

export default sleep;
