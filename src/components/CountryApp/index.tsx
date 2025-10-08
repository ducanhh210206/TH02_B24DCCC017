import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Country } from "../../types/country";

export default function CountryApp() {
    const [countries, setCountries] = useState<Country[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all?fields=name,flags,population,region")
            .then(res => setCountries(res.data))
            .catch(err => console.error(err));
    }, []);

    const filtered = countries.filter(c =>
        c.name.common.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>🌍 Danh sách Quốc gia</h2>
            <input
                type="text"
                placeholder="Tìm quốc gia..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
                {filtered.map(c => (
                    <Link
                        to={`/country/${c.name.common}`}
                        key={c.name.common}
                        style={{ border: "1px solid #ccc", padding: 10, textAlign: "center" }}
                    >
                        <img src={c.flags.png} alt={c.name.common} width="100" />
                        <h3>{c.name.common}</h3>
                        <p>Dân số: {c.population.toLocaleString()}</p>
                        <p>Khu vực: {c.region}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
