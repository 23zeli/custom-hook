import { useEffect, useState } from "react";
import ResetButton from "./reset-button";
import capitalize from "../lib/utils";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() =>{
            //get Data from local storage
            return JSON.parse(localStorage.getItem('theme'));
        });

        useEffect(() => {
            //set Data in local storage
            localStorage.setItem('theme', JSON.stringify(theme));
        }, [theme]);

    return (
        <section>
            <p>Current theme:{capitalize(theme)}</p>
            <button>Light Mode</button>
            <button>Dark Mode</button>

            <ResetButton />
        </section>
    )
}