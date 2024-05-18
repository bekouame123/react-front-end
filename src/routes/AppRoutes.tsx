import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../models/User";
import MenuSmartComponent from "../components/MenuSmartComponent";

type Props = {user:User}

const AppRoutes:React.FC<Props> = (props)=>{
    return(<Routes>     
        <Route path="/all" element={<MenuSmartComponent user={props.user}/>} />

    </Routes>);
}

export default AppRoutes;