export function numberToInt(number, totalDigit = 10) {
  let array = number
    .toString()
    .split('.')
    .join('')
    .split('')

  while (array.length < totalDigit) {
    array.push('0')
  }

  array = array
    .splice(0, totalDigit)
    .join('')

  return parseInt(array, 10)
}
