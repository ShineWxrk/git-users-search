import { ReactComponent as IconCompany } from 'assets/icon-company.svg'
import { ReactComponent as IconLocation } from 'assets/icon-location.svg'
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg'
import { ReactComponent as IconBlog } from 'assets/icon-website.svg'
import { InfoItem, InfoItemProps } from 'components/InfoItem/InfoItem';
import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> { }

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation className={styles.icon}/>,
      text: location,
    },
    {
      icon: <IconBlog className={styles.icon}/>,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter className={styles.icon}/>,
      text: twitter,
    },
    {
      icon: <IconCompany className={styles.icon}/>,
      text: company,
    }
  ]
  return(
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  )
};
