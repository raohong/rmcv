import { spawn } from 'child_process';

const exec = (name: string, cwd: string, args: string[] = []) => {
  const child = spawn(name, args, {
    stdio: 'inherit',
    cwd,
  });
};

export default exec;
