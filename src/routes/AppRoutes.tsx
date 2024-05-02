import React from "react";
import { Route, Routes } from "react-router-dom";
import EmpSmartComponent from "../components/EmpSmartComponent";
import User from "../models/User";

type Props = {user:User}

const AppRoutes:React.FC<Props> = (props)=>{
    return(<Routes>     
        <Route path="/emp" element={<EmpSmartComponent user={props.user}/>} />

    </Routes>);
}

export default AppRoutes;