import { useMode, ColorModeContext } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import { AuthProvider } from "./context/AuthContext";
import Login from "./scenes/login";
import ProtectedRoute from "./components/ProtectedRoute";

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
            </main>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
