import React, { useState } from 'react';
import User from '../models/User';
import { getAllEmps } from '../remote/EmpAPI';
import Emp from '../models/Emp';
import AppRoutes from '../routes/AppRoutes';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginComponent: React.FC = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(new User("", "NONE"));

    return (<div style={{ padding: "5mm" }}>

        <FloatingLabel
            controlId="floatingInput"
            label="USER NAME "
            className="mb-3"
        >
            <Form.Control type="text" style={{ width: "30em" }}
                placeholder="username" onChange={(e) => {
                    setUserName(e.target.value);

                }} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" style={{ width: "30em" }} label="Password">
            <Form.Control type="password" placeholder="Password" onChange={(e) => {
                setPassword(e.target.value);
            }} />
        </FloatingLabel>
    
        <button style={{margin:"1mm"}} onClick={async () => {
            let inputUser: User = new User(username, "", password);
            let result: Emp[] = await getAllEmps(inputUser);
            //This doesn't work if there are no cars in the db. 
            if (result.length) {
                setUser(inputUser);
            }
        }}>Login</button>
        <br></br>
        <br></br>
        <AppRoutes user={user}></AppRoutes>
    </div>);
}

export default LoginComponent;