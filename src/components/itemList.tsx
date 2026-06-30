import { useState } from "react";
import ResetButton from "./reset-button";

export default function ItemList () {
    const [items, setItems] = useState([]);

    return (
        <section>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
                ))}
            </ul>

            <ResetButton />
        </section>
    )
}