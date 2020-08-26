import React, {useState, useEffect} from "react";

export default function SimpleEffect() {

    useEffect(() => {
        debugger;
        setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000)
    }, [])

    const [counter, setCounter] = useState(0);
    const [othercounter, setOtherCounter] = useState(0);

    function incrementCounter() {
        debugger;
        setOtherCounter(othercounter + counter)
    }

    return (
        <>
            <h1>Hello World... {counter}</h1>
            <h2>Other Counter {othercounter}</h2>
            <input type="button" value="Update Counter" onClick={incrementCounter} />
        </>
    )
}