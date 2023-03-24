import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSumbit={() => {}}/>
    </Container>
  );
}

export default App;
