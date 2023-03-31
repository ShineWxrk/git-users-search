import { LocalGithubUser } from 'types/user';
import styles from './UserChart.module.scss';

interface UserChartProps extends Pick<LocalGithubUser, 'login'> {}

export const UserChart = ({ login }: UserChartProps) => (
  <div className={styles.userChart}>
    <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${login}&layout=compact&hide_border=true&hide_title=true&count_private=true&include_all_commits=true&show_icons=true&bg_color=00000000&text_color=c3c6ce&icon_color=4e64f7`}/>
  </div>
);
