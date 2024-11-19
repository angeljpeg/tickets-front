import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginUI } from "./pages/LoginUser";
import { TicketsUI } from "./pages/Tickets";
import { CalendarUI } from "./pages/Calendar";
import { WelcomeUI } from "./pages/Welcome";
import { AppointmentUI } from "./pages/Appointment";
import { TechnicianUI } from "./pages/Technician";
import { NotFoundPageUI } from "./pages/NotFoundPage";
import { ProfileUI } from "./pages/Profile";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "Jhon",
      permission: ["analize"],
      roles: ["admin"],
    });
    console.log("Creando el usuario");
  };

  const logout = () => {
    setUser(null);
    console.log("Cerrando sesión, el usuario será eliminado");
  };

  return (
    <BrowserRouter>
      <main className="flex">
        {user ? <Navbar user={user} logout={logout} /> : ""}

        <section className="bg-neutral-900 text-neutral-300 w-full h-screen max-h-screen overflow-y-auto overflow-x-hidden">
          <Routes>
            <Route
              index
              element={
                !user ? <LoginUI login={login} /> : <WelcomeUI user={user} />
              }
            />
            <Route
              path="/login"
              element={
                !user ? <LoginUI login={login} /> : <WelcomeUI user={user} />
              }
            />

            <Route path="/logout" element={<LoginUI login={login} />} />

            <Route element={<ProtectedRoute isAllowed={!!user} />}>
              <Route path="/welcome" element={<WelcomeUI user={user} />} />
              <Route path="/tickets" element={<TicketsUI user={user} />} />
              <Route path="/calendar" element={<CalendarUI user={user} />} />
              <Route path="/profile" element={<ProfileUI user={user} />} />
            </Route>

            <Route
              path="/appointment"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.permission.includes("tech")}
                  redirectTo="/welcome"
                >
                  <AppointmentUI user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/technician"
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.roles.includes("admin")}
                  redirectTo="/welcome"
                >
                  <TechnicianUI user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPageUI />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
