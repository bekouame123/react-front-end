import React, { useState } from 'react'; 
import User from '../models/User';
import { getAllEmps } from '../remote/EmpAPI';
import Emp from '../models/Emp';
import AppRoutes from '../routes/AppRoutes';

const LoginComponent:React.FC = ()=>{
    const[username, setUserName] = useState("");
    const[password, setPassword] = useState("");
    const[user, setUser] = useState(new User("", "NONE"));



    return(<div style={{margin:"1mm"}}>
        <input style={{margin:"1mm"}} type='text' placeholder='username' onChange={(e)=>{
            setUserName(e.target.value);
        }}></input>
        <input style={{margin:"1mm"}} type='text' placeholder='password' onChange={(e)=>{
            setPassword(e.target.value);
        }}></input>
        <button onClick={async()=>{
            let inputUser:User = new User(username, "", password);
            let result:Emp[] = await getAllEmps(inputUser);
            //This doesn't work if there are no cars in the db. 
            if(result.length){
                setUser(inputUser);
            }}}>Login</button>
    <br></br>
    <br></br>
    <br></br>

    <AppRoutes user={user}></AppRoutes>
    </div>);
}

export default LoginComponent;