import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Country } from "../../types/country";

export default function CountryDetail() {
    const { name } = useParams<{ name: string }>();
    const [country, setCountry] = useState<Country | null>(null);

    useEffect(() => {
        axios
            .get(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region`)
            .then(res => setCountry(res.data[0]))
            .catch(err => console.error(err));
    }, [name]);

    if (!country) return <p>Đang tải...</p>;

    return (
        <div>
            <Link to="/">⬅ Trở lại</Link>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common} />
            <p>Dân số: {country.population.toLocaleString()}</p>
            <p>Khu vực: {country.region}</p>
        </div>
    );
}
