import { ILogger } from './ILogger';

class Logger implements ILogger {
  error(str: string) {
    console.log('\u001b[31m', str, '\u001b[0m');
  }

  info(str: string) {
    console.log('\u001b[32m', str, '\u001b[0m');
  }

  warn(str: string) {
    console.log('\u001b[33m', str, '\u001b[0m');
  }
}

export default Logger;
