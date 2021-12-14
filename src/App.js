import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import { GithubProvider } from "./context/github/GithubContext";
import UserSearch from "./components/users/UserSearch";

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>

            <UserSearch />
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
