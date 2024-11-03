import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
