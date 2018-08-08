function addZero(num) {
  let format = num
  if (num < 10) {
    format = `0${num}`
  }
  return format
}

export function timeHoursMinutes(date) {
  const h = addZero(date.getHours())
  const m = addZero(date.getMinutes())
  return `${h}:${m}`
}
