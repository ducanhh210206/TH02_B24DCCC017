import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CountryApp from "./components/CountryApp";
import CountryDetail from "./components/CountryApp/CountryDetail";
import CurrencyApp from "./components/CurrencyApp";
import MovieApp from "./components/MovieApp";
import MovieDetail from "./components/MovieApp/MovieDetail";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <Link to="/">Bài 1: Quốc gia</Link>
        <Link to="/currency">Bài 2: Tỉ giá</Link>
        <Link to="/movies">Bài 3: Phim</Link>
      </nav>

      <Routes>
        {/* Bài 1 */}
        <Route path="/" element={<CountryApp />} />
        <Route path="/country/:name" element={<CountryDetail />} />

        {/* Bài 2 */}
        <Route path="/currency" element={<CurrencyApp />} />

        {/* Bài 3 */}
        <Route path="/movies" element={<MovieApp />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;