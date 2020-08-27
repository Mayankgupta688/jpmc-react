import React, {useState, useEffect} from "react";
import Axios from "axios";

export default function SimpleEffect() {

    const [promiseData, setPromiseData] = useState(null);

    useEffect(() => {
        var promiseData = Axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            console.dir(response.data)
        });
        
        return () => {
            console.log("Return from useState...")
        }

    })

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>Hello World... {counter}</h1>
            <input type="button" value="Update Counter" onClick={incrementCounter} />
        </>
    )
}