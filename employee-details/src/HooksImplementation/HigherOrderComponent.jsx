import React from "react";
import { useEffect } from "react";



export default function sampleComponentCreater(WrappedComponent, WrappedComponentSecond) {
    return function OtherComponent() {
        
        useEffect(() => {
            console.log("Sample Displayed..")
        }, [])
    
        return (
            <div>
                <h1>This is Higher Order Component</h1>
                <WrappedComponent></WrappedComponent>
                <WrappedComponentSecond></WrappedComponentSecond>
            </div>
        )
    }
}