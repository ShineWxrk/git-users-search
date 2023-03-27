import { LocalGithubUser } from 'types';
import styles from './UserTitle.module.scss';

export interface UserTitleProps extends Pick<LocalGithubUser, 'login' | 'name' | 'created'> { }

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric', 
  month: 'short',
  year: 'numeric',
})

export const UserTitle = ({ created, login, name }: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created))
  return (
    <div className={styles.userTitle}>
      <h2>{name ? name : login}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  )
}