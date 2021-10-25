const isWindow = (win: any): win is Window =>
  win?.toString?.() === '[object Window]';

export default isWindow;
