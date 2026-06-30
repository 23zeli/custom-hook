import { useState } from "react";
import ResetButton from "./reset-button";
import capitalize from "../lib/utils";

export default function ItemList () {
    const [items, setItems] = useState([]);

    return (
        <section>
            <ul>
                {items.map((item) => (
                    <li key={item}>{capitalize(item)}</li>
                ))}
            </ul>

            <ResetButton />
        </section>
    )
}