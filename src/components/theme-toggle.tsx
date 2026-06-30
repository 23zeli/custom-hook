import { useState } from "react";
import ResetButton from "./reset-button";
import capitalize from "../lib/utils";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    return (
        <section>
            <p>Current theme:{capitalize(theme)}</p>
            <button>Light Mode</button>
            <button>Dark Mode</button>

            <ResetButton />
        </section>
    )
}