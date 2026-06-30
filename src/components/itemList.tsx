import { useEffect, useState } from "react";
import ResetButton from "./reset-button";
import capitalize from "../lib/utils";

export default function ItemList () {

    const [items, setItems] = useState(() =>{
        //get Data from local storage
        return JSON.parse(localStorage.getItem('Items'));
    });

    useEffect(() => {
        //set Data in local storage
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

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