import { GithubUser } from 'types/user'
export const isGitHubUser = (user: any): user is GithubUser => 'id' in user

