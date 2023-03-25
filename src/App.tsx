import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSumbit={() => {}}/>
      <UserCard {...defaultUser}/>
    </Container>
  );
}

export default App;
