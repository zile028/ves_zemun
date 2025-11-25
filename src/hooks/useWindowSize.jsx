"use client";
import {useLayoutEffect, useState} from 'react';

function UseWindowSize(props) {
    const [size, setSize] = useState({innerWidth: -1, innerHeight: -1});
    useLayoutEffect(() => {
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, []);

    function updateSize() {
        setSize({innerWidth: window.innerWidth, innerHeight: window.innerHeight});
    }

    return size;
}

export default UseWindowSize;