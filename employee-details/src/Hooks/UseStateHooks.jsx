import React, {useState} from "react";

export default function UseStateHooks(props) {

    var [user, setUser] = useState({
        name: "Mayank",
        age: 20,
        designation: "Developer"
    });

    function updateUserData(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    function getData() {
        console.dir(user)
    }

    return (
        <div>
            Enter User Name: <input data-updatevariable="name" name="name" className="name"  type="text" value={user.name} onChange={updateUserData} /><br/><br/>
            Enter User Age: <input name="age"  className="age" type="number" value={user.age}  onChange={updateUserData} /><br/><br/>
            { user.age <= 0 && <div><b style={{"color": "red"}}>Age Cannot be Less than Equal to Zero...</b><br/><br/></div> }
            Enter User Designation: <input  className="designation" type="text" value={user.designation}  onChange={updateUserData} /><br/><br/>
            <input type="button" value="Get Updated Data" onClick={getData} />
        </div>   
    )
}