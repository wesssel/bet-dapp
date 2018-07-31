/* eslint no-console: 'off' */

export function logger(data, msg = null) {
  if (msg) {
    console.log(`${msg}: `, data)
    return
  }

  console.log(data)
}
