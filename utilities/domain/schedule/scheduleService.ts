import { DateTime } from 'luxon'
import { ScheduleItem } from '../../types/schedule'

export type PracticeScheduleItem = ScheduleItem & PracticeSchedule

const weekdaysJa = ['月', '火', '水', '木', '金', '土', '日']
const weekdaysEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

class PracticeSchedule {
  constructor() {}

  get schedule(): ScheduleItem {
    return this as unknown as ScheduleItem
  }

  /**
   * 練習日程の日付を返す
   */
  getDate() {
    const {
      schedule: { startAt },
    } = this
    return { year: startAt.year, month: startAt.month, day: startAt.day }
  }

  /**
   * 練習日程の曜日を返す
   */
  getWeekdaysJa() {
    const {
      schedule: { startAt },
    } = this
    return weekdaysJa[Number(startAt.toFormat('c')) - 1]
  }

  /**
   * 練習日程の曜日(英語)を返す
   */
  getWeekdaysEn() {
    const {
      schedule: { startAt },
    } = this
    return weekdaysEn[Number(startAt.toFormat('c')) - 1]
  }

  /**
   * 練習開始時刻を返す
   * @param format luxonのformat
   */
  getStartAtTime(format: string) {
    const {
      schedule: { startAt },
    } = this
    return startAt.toFormat(format)
  }

  /**
   * 練習終了時刻を返す
   * @param format luxonのformat
   */
  getEndAtTime(format: string) {
    const {
      schedule: { endAt },
    } = this
    return endAt.toFormat(format)
  }

  /**
   * 練習場所を返す
   */
  getPlace() {
    const {
      schedule: { place },
    } = this
    return place
  }

  /**
   * 練習スタジオを返す
   */
  getStudio() {
    const {
      schedule: { studio },
    } = this
    return studio
  }

  /**
   * 練習のメモを返す
   */
  getMemo() {
    const {
      schedule: { memo },
    } = this
    return memo
  }

  /**
   * 練習日程が今日か判別する
   */
  isToday() {
    const {
      schedule: { startAt },
    } = this

    if (startAt.hasSame(DateTime.now(), 'day')) {
      return true
    }
    return false
  }
}

export const createPracticeSchedule = (item: ScheduleItem): PracticeScheduleItem => {
  return Object.assign(new PracticeSchedule(), item)
}
