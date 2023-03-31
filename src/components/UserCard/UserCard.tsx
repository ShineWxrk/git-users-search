import { UserInfo } from 'components/UserInfo';
import { UserStat } from 'components/UserStat/UserStat';
import { UserTitle } from 'components/UserTitle/UserTitle';
import { UserChart } from 'components/UserChart/UserChart';
import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle login={props.login} created={props.created} name={props.name} />
    <p className={`${styles.bio}${props.bio ? '' : ` ${styles.empty}`}`}>
      {props.bio || 'This profile has no bio'}
    </p>
    <UserStat repos={props.repos} followers={props.followers} following={props.following}/>
    <UserInfo blog={props.blog} company={props.company} location={props.location} twitter={props.twitter}/>
    <UserChart login={props.login}/>
  </div>
)
