import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
const Topbar = lazy(() => import("./scenes/global/Topbar"));
const Dashboard = lazy(() => import("./scenes/dashboard"));
const Team = lazy(() => import("./scenes/team"));
const Invoices = lazy(() => import("./scenes/invoices"));
const Contacts = lazy(() => import("./scenes/contacts"));
const Bar = lazy(() => import("./scenes/bar"));
const Form = lazy(() => import("./scenes/form"));
const FAQ = lazy(() => import("./scenes/faq"));
const Calendar = lazy(() => import("./scenes/calendar"));
const Sidebar = lazy(() => import("./scenes/global/Sidebar"));
const Login = lazy(() => import("./scenes/login"));

// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Geography from "./scenes/geography";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Loader from "./components/Loader";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // 👈 get current route
  const isLoginPage = location.pathname === "/login";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <div className="app">
            {!isLoginPage && <Sidebar />}
            <main className="content">
              {!isLoginPage && <Topbar />}
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/bar" element={<Bar />} />
                    {/* <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} /> */}
                  </Route>
                </Routes>
              </Suspense>
            </main>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
