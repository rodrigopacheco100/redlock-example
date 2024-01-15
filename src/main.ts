import { doSomethingFiveTimes } from './functions/do-something-five-times'

import { createLogger } from './functions/create-logger'
//
;(async () => {
  await Promise.all([
    ...doSomethingFiveTimes('1', createLogger()),
    ...doSomethingFiveTimes('2', createLogger()),
    ...doSomethingFiveTimes('3', createLogger()),
  ])
})()
  .then(() => {
    process.exit(0)
  })
  .catch((e) => {
    console.log(e)
  })
