export function formatDate(date) {
  if (!date) return ""
  const [year, month, day] = date.split('-')

  return `${day}-${month}-${year}`
}

export function formatSystemDate(date) {
  if (!date) return ""
  const [day, month, year] = date.split('-')

  return `${year}-${month}-${day}`
}
