import ResetButton from "./reset-button";
import capitalize from "../lib/utils";
import useLocalStorage from "../lib/hooks";

export default function ItemList () {
    const [items, setItems] = useLocalStorage('items')

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