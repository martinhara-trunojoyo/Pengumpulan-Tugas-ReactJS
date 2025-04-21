import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Team from "./pages/Team";



function App() {
  return (
    <Router>
      <div>
      <div className="container">
          {/* Header */}
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
              >
                <i
                  className="fa-solid fa-book fa-2xl"
                  style={{ color: "#74C0FC" }}
                ></i>
                <span className="ms-2 fs-4">Book Store</span>
              </a>
            </div>
  
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  Book
                </a>
              </li>
              <li>
              <Link to="/team" className="nav-link px-2">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link px-2">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  About
                </a>
              </li>
               
  
            </ul>
  
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
          </header>
        </div>

        {/* Bagian ini yang ganti konten halaman */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          {/* Tambahkan route lain di sini */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
