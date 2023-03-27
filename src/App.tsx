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
    fetchUser('ShineWxrk')
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let x = event.clientX
    let y = event.clientY
    let color = Math.round((x + y) / 8)
    if (color >= 255) color = 255

    event.currentTarget.style.setProperty(
      "--main-color",
      `rgb(${color}, 95, 255`
    )
    event.currentTarget.style.setProperty(
      "--main-color2",
      `rgb(100, 0, ${color})`
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
