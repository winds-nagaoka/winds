import { DateTime } from 'luxon'

export type News = {
  date: string
  label: string
  url: string
}

export type NewsApi = {
  fieldId: 'news'
  date: string
  label: string
  url: string
}

export const convertNews = (newsApi: NewsApi[]): News[] => {
  return newsApi
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((item) => {
      return {
        date: DateTime.fromISO(item.date).toFormat('yyyy/M/d'),
        label: item.label,
        url: item.url,
      }
    })
}
