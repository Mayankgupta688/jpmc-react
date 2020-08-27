import React from "react";
import ReactDOM from "react-dom";

import SimpleRouting from "./routing/SimpleRouting";

function ComponentOne() {
    return <h1>This is Base Component</h1>
}

ReactDOM.render(
    <div>
        <SimpleRouting></SimpleRouting>
    </div>,
    document.getElementById("myOwnDiv")
)

