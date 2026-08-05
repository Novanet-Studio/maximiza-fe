export const truncateText = (text: string, length: number) => {
  if (!text) return ''

  return text.length > length ? text.substring(0, length) + '...' : text
}

export const formatDate = (dateString: string | undefined | null): string => {
  if (!dateString) return ''

  const parts = dateString.split('-')

  if (parts.length !== 3) return dateString

  const [year, month, day] = parts

  return `${day}/${month}/${year}`
}

const LONG_MONTH_NAMES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

export const formatLongDate = (dateString: string | undefined | null): string => {
  if (!dateString) return ''

  const parts = dateString.split('-')

  if (parts.length !== 3) return dateString

  const [year, month, day] = parts
  const monthName = LONG_MONTH_NAMES[Number(month) - 1]

  if (!monthName) return dateString

  return `${Number(day)} ${monthName}, ${year}`
}

export const articleExcerpt = (text: string | undefined | null, length: number) => {
  if (!text) return ''

  const raw = text.replace(/<[^>]*>/g, '')

  return raw.length > length ? raw.substring(0, length) + '...' : raw
}

export const minAgeDate = (age: number): string => {
  const today = new Date()
  const date = new Date(today.getFullYear() - age, today.getMonth(), today.getDate())

  return date.toISOString().split('T')[0] ?? ''
}

export const formatAmount = (value: string | number | undefined | null): string => {
  if (value === '' || value === undefined || value === null) return ''

  const normalizedValue = String(value).replace(',', '.')

  const number = parseFloat(normalizedValue)

  if (isNaN(number)) return ''

  return (
    new Intl.NumberFormat('es-VE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(number) + ' Bs'
  )
}
