import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Container from "./ui/Container";
import { DarkModeProvider } from "./context/DarkModeContext";
import Jobs from "./ui/Jobs";
import { FormDataProvider } from "./context/FormDataContext";
import Button from "./ui/Button";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <Container>
        <FormDataProvider>
          <Header />
          <Jobs />
        </FormDataProvider>
      </Container>
    </DarkModeProvider>
  );
}

export default App;
