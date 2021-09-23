const sleep = (timeout = 0): Promise<void> =>
  new Promise((r) =>
    setTimeout(() => {
      r();
    }, timeout),
  );

export default sleep;
