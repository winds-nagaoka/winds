import classNames from 'classnames'
import { DateTime } from 'luxon'

import { Schedule, splitByToday } from '../../utilities/microcms/schedule'
import { LinkButton } from '../Button/LinkButton'
import { Block } from '../Layout/Block'
import { Text } from '../Layout/Text'

import styles from './Schedule.module.scss'

export const ScheduleComponent = ({ schedule }: { schedule: Schedule[] }) => {
  const splitedSchedule = splitByToday(DateTime.now(), schedule)
  return (
    <div className={styles.schedule}>
      <Block title="練習日程" subTitle="Schedule">
        <Text>
          <p>主に長岡リリックホールのスタジオにて練習しております。</p>
          <p>基本的に第5スタジオにて毎週土曜日18時から22時まで合奏や個人練習しています。</p>
          <p>本番が近くなると、第1スタジオやコンサートホールなどを利用します。</p>
        </Text>
        {splitedSchedule.length !== 0 && <ScheduleNext next={splitedSchedule[0]} />}
        {splitedSchedule.length === 0 && <div className={styles['schedule-next']}>直近の練習日程はありません</div>}
        <LinkButton href="/schedule" />
      </Block>
    </div>
  )
}

const ScheduleNext = ({ next }: { next: Schedule }) => {
  const isToday = DateTime.fromISO(next.date).hasSame(DateTime.now(), 'day')
  const { month, day, weekdayJa, weekdayEn, start, end, place, studio } = next
  return (
    <div className={styles['schedule-next']}>
      <div>
        {isToday && <p className={styles.todayflag}>本日</p>}
        <p>
          <span className={styles.frame}>
            <span className={styles['month-date']}>
              <span className={styles.month}>{month}</span>
              <span className={classNames(styles.month, styles.text)}>月</span>
              <span className={styles.date}>{day}</span>
              <span className={classNames(styles.date, styles.text)}>日</span>
              <span className={classNames(styles.day, styles[weekdayEn])}>{weekdayJa}</span>
            </span>
            <span className="time">
              {start}～{end}
            </span>
          </span>
          <span className={styles.frame}>
            <span className={styles.place}>{place}</span>
            <span className={styles.studio}>{studio}</span>
          </span>
        </p>
      </div>
    </div>
  )
}
