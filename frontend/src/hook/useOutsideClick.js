import { useEffect, useRef } from "react";

export default function useOutsideClick(cb) {
    const ref = useRef();

    useEffect(() => {
        const outsideClickHandler = (e) => {
            if (ref.current && e.target.contains(ref.current)) {
                cb();
            }
        }
        document.addEventListener('click', outsideClickHandler, true)

        return () => {
            document.removeEventListener('click', outsideClickHandler, true)
        }
    }, [ref])
    return ref

}