import { useEffect, useState } from "react"
import { Container } from "components/Container"
import { Search } from "components/Search"
import { TheHeader } from "components/TheHeader"
import { UserCard } from "components/UserCard"
import { GithubError, GithubUser, LocalGithubUser } from "types"
import { isGitHubUser } from "utils/typeguards"
import { extractLocalUser } from "utils/extract-local-user"

const BASE_URL = "https://api.github.com/users/"

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(null)

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username
    const res = await fetch(url)
    const user = (await res.json()) as GithubUser | GithubError

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }

  useEffect(() => {
    document.title = 'Git users search'
    fetchUser('ShineWxrk')
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let x = event.clientX
    let y = event.clientY
    x = Math.round(x / window.innerWidth * 100)
    y = Math.round(y / window.innerHeight * 100)
    console.log(`x = ${x}, y = ${y}`)
    event.currentTarget.style.setProperty(
      "--posX",
      `${x}%`
    )
    event.currentTarget.style.setProperty(
      "--posY",
      `${y}%`
    )
  }

  return (
    <div onMouseMove={handleMouseMove} style={{height: "100vh"}}>
      <Container>
        <TheHeader />
        <Search hasError={!user} onSumbit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </div>
  )
}

export default App
