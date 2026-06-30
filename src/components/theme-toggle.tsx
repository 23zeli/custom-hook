import ResetButton from "./reset-button";
import capitalize from "../lib/utils";
import useLocalStorage from "../lib/hooks";

export default function ThemeToggle() {
    const [theme, setTheme] = useLocalStorage('theme')

    return (
        <section>
            <p>Current theme:{capitalize(theme)}</p>
            <button>Light Mode</button>
            <button>Dark Mode</button>

            <ResetButton />
        </section>
    )
}