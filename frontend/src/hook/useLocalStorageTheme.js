import { useEffect, useState } from "react";

export default function useLocalStorageTheme(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key) || null
        return storedValue ? JSON.parse(storedValue) || null : initialValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue]
}