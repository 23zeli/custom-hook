import { useState } from "react";
import ResetButton from "./reset-button";

export default function ItemList () {
    const [items, setItems] = useState([]);

    return (
        <section>
            <ul>
                {
                    items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>

            <ResetButton />
        </section>
    )
}