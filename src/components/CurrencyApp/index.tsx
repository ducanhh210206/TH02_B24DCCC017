import { useState, useEffect } from "react";
import axios from "axios";
import { ExchangeResponse } from "../../types/currency";

export default function CurrencyApp() {
    const [base, setBase] = useState("USD");
    const [data, setData] = useState<ExchangeResponse | null>(null);

    useEffect(() => {
        axios
            .get(`https://open.er-api.com/v6/latest/${base}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, [base]);

    return (
        <div>
            <h2>💱 Quy đổi Tỉ giá tiền tệ</h2>
            <select value={base} onChange={e => setBase(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="VND">VND</option>
                <option value="JPY">JPY</option>
            </select>

            {data ? (
                <ul>
                    {Object.entries(data.rates).slice(0, 20).map(([code, rate]) => (
                        <li key={code}>
                            1 {data.base_code} = {rate} {code}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Đang tải...</p>
            )}
        </div>
    );
}
