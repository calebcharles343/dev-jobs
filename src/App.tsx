import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Container from "./ui/Container";
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </DarkModeProvider>
  );
}

export default App;
