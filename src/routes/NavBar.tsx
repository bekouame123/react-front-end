import React from "react";
import { Link } from "react-router-dom";
import ContainerHOC from "../HOC/ContainerHOC";


const NavBar:React.FC<unknown> = (props)=>{
    return(<nav className="navbar  navbar-nav navbar-expand-lg">        
        <Link to={"/emp"} style={{margin:"1mm"}}>EMPLOYEES</Link>
    </nav>);
}

export default ContainerHOC(NavBar);
