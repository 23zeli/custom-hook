import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
    const [value, setvalue] = useState(() =>{
            //get Data from local storage
            return JSON.parse(localStorage.getItem(key));
        });

        useEffect(() => {
            //set Data in local storage
            localStorage.setItem(key, JSON.stringify(value));
        }, [value, key]);
}