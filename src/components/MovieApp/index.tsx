import { useState } from "react";
import axios from "axios";
import { Movie } from "../../types/movie";
import MovieList from "./MovieList";

export default function MovieApp() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState<Movie[]>([]);

    const handleSearch = async () => {
        try {
            const res = await axios.get(
                `https://www.omdbapi.com/?apikey=thewdb&s=${search}`
            );
            setMovies(res.data.Search || []);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>🎬 Tìm kiếm phim</h2>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Nhập tên phim..."
            />
            <button onClick={handleSearch}>Tìm</button>

            {/* Dùng component MovieList */}
            <MovieList movies={movies} />
        </div>
    );
}
