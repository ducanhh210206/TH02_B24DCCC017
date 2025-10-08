import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MovieDetail() {
    const { imdbID } = useParams<{ imdbID: string }>();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        axios
            .get(`https://www.omdbapi.com/?apikey=thewdb&i=${imdbID}&plot=full`)
            .then(res => setMovie(res.data))
            .catch(err => console.error(err));
    }, [imdbID]);

    if (!movie) return <p>Đang tải...</p>;

    return (
        <div>
            <Link to="/movies">⬅ Trở lại</Link>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Năm: {movie.Year}</p>
            <p>Thể loại: {movie.Genre}</p>
            <p>Đạo diễn: {movie.Director}</p>
            <p>Tóm tắt: {movie.Plot}</p>
        </div>
    );
}
