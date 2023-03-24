import { ReactComponent as SearchIcon } from 'assets/icon-search.svg'
import { Button } from 'components/Button/Button';
import styles from './Search.module.scss';

interface SearchProps { 
  hasError: boolean,
  onSumbit: (text: string) => void
}

type FormFields = {
  username: HTMLInputElement
}
 
export const Search = ({ hasError, onSumbit }: SearchProps) => {

  const handleSumbit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()
    const text = event.currentTarget.username.value

    if (text) {
      onSumbit(text)
      event.currentTarget.reset()
    }
  }

  return (
  <form onSubmit={handleSumbit} autoComplete="off">
    <div className={styles.search}>
      <label htmlFor="search" className={styles.label}>
        <SearchIcon />
      </label>
      <input type="text" className={styles.textField} id="search" name="username" placeholder="Search GitHub username..." />
      {hasError && (
        <div className={styles.error}>
          No result
        </div>
      )}
      <Button>Search</Button>
    </div>
  </form>
)};
