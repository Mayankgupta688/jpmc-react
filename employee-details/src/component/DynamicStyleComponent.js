import React from "react";
import applicationStyle from "./stylingObject";

export default function DynamicStyleComponent() {
    return (
        <div style={applicationStyle.divElement}>
            <h1 style={applicationStyle.h1Element}>This is the Top Element</h1>
            <h2 style={applicationStyle.h2Element}>This is the Next Element</h2>
        </div>
    )
}