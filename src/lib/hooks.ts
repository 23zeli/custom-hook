import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: T) => void]{
    const [value, setvalue] = useState(() =>{
            //get Data from local storage
            return JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));
        });

    useEffect(() => {
        //set Data in local storage
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setvalue]
}