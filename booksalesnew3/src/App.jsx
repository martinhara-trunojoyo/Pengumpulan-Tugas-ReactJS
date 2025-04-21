import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Books from "./pages/Books";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
