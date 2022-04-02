import { log } from '@helper/logger';

export function ShowLog(showArgs?: boolean, message?: string) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => {
    const targetMethod = descriptor.value;

    descriptor.value = function (...args: unknown[]) {
      log.info(`[${propertyKey}]`);
      if (message) {
        log.info(message);
      }
      if (showArgs && args.length) {
        log.info(JSON.stringify(args));
      }

      return targetMethod.apply(this, args);
    };

    return descriptor;
  };
}
