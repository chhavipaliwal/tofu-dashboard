import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./assets/auth/login";
import Register from "./assets/auth/register";
import Navbar from "./assets/auth/navbar";
import Hero from "./home";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                </Routes>
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <MainLayout>
                <Hero />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
