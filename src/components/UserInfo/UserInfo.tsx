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
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconBlog />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
    },
    {
      icon: <IconCompany />,
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
