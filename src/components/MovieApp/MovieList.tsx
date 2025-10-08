import { Link } from "react-router-dom";
import { Movie } from "../../types/movie";

interface MovieListProps {
    movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
    if (movies.length === 0) {
        return <p>Không có phim nào để hiển thị.</p>;
    }

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
            }}
        >
            {movies.map((m) => (
                <Link
                    to={`/movie/${m.imdbID}`}
                    key={m.imdbID}
                    style={{
                        textAlign: "center",
                        textDecoration: "none",
                        color: "black",
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "8px",
                    }}
                >
                    <img
                        src={m.Poster}
                        alt={m.Title}
                        width="100%"
                        style={{ borderRadius: "8px" }}
                    />
                    <h3>{m.Title}</h3>
                    <p>{m.Year}</p>
                </Link>
            ))}
        </div>
    );
}
