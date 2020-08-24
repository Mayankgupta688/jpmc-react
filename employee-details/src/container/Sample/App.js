import React from "react";

import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Content from "../../component/Sample/Content"

var name = "Mayank";

function additionOutput(a, b) {
    return "Result of Addition: " + (a + b);
}

export default function App() {
    return (
        <main>
            <h1>{ "some Data".toUpperCase() }</h1>
            <h1>{ additionOutput(4, 6) }</h1>
            <h1>{ additionOutput(5, 6) }</h1>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </main>
    )
}