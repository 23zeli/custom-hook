import { useState } from "react";
import ResetButton from "./reset-button";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light')

    return (
        <section>
            <p>Current theme:{theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
            <button>Light Mode</button>
            <button>Dark Mode</button>

            <ResetButton />
        </section>
    )
}