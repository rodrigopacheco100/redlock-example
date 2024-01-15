import { Locker } from '../tools/locker'
import { sleep } from './sleep'

// eslint-disable-next-line @typescript-eslint/ban-types
export function doSomethingFiveTimes(
  identifier: string,
  logger: (message: string) => void,
) {
  return [
    doSomething(identifier, logger),
    doSomething(identifier, logger),
    doSomething(identifier, logger),
    doSomething(identifier, logger),
    doSomething(identifier, logger),
  ]
}

async function doSomething(
  identifier: string,
  logger: (message: string) => void,
): Promise<void> {
  logger(`trying to do something ${identifier}`)
  const lock = await Locker.lock(`something:${identifier}`)

  try {
    logger(`doing something ${identifier}`)
    await sleep(3000)
    logger(`done something ${identifier}`)
  } finally {
    logger(`releasing lock ${identifier}`)
    await lock.release()
  }
}
