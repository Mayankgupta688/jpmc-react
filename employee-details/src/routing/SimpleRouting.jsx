import React, { useState } from "react";
import { BrowserRouter, Route, Link, Switch, Prompt } from "react-router-dom";

export default function SimpleRouting() {

    const [name, setName] = useState("Mayank");

    function updateName() {
        setName("Anshul")
    }

    return (
        <BrowserRouter>
            <h1>This is Common Header</h1>
            <input type="button" onClick={updateName} value="UpdateName" /><br/><br/>
            
            <nav>
                <Link style={{"paddingRight": "10px"}} to="/">Home</Link> 
                <Link style={{"paddingRight": "10px"}} to="/about">About</Link> 
                <Link style={{"paddingRight": "10px"}} to="/help">Help</Link> 
            </nav>

            <Switch>
                <Route exact path="/" render={() => <HomeComponent name={name}></HomeComponent>} />
                <Route exact path="/about" component={AboutComponent} />
                <Route exact path="/help" component={HelpComponent} />
                <Route component={PageNotFound} />
            </Switch>

            <h1>This is Common Footer</h1>
        </BrowserRouter>
    )
}

function PageNotFound() {
    return <h1>Page Not Found</h1>
}

function HomeComponent(props) {
    return (
        <div>
            <Prompt message="Do you really want to Exit ??" />
            <h1>This is Home Component {props.name}</h1>
        </div>
    )
}

function HelpComponent() {
    return <h1>This is Help Component</h1>
}

function AboutComponent() {
    return <h1>This is About Component</h1>
}