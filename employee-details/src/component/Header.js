import React from "react";

export default function Header() {

    return React.createElement("div", null, 
        React.createElement("div", null, 
            React.createElement("div", null, 
                React.createElement("div", null, <SubComponent></SubComponent>)))
    );
}

function SubComponent() {
    return <h2>This is SubComponent</h2>
}