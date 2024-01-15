import chalk from 'chalk'

export function createLogger() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return function log(message: string) {
    console.log(chalk.rgb(r, g, b)(message))
  }
}
