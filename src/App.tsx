import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import AppLayout from "./ui/AppLayout";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/DetailPage";
import PageNotFound from "./ui/PageNotFound";
/*
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
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
*/

// Define routes using createBrowserRouter
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "detail/:id", element: <Detail /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      {/* Use RouterProvider instead of BrowserRouter */}
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
