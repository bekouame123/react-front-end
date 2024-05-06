import React from "react";
import { Link } from "react-router-dom";
import ContainerHOC from "../HOC/ContainerHOC";
import { Button } from "react-bootstrap";

const NavBar: React.FC<unknown> = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Button style={{ margin: "1mm" }}>
        <Link to={"/emp"} style={{color:"white"}}>REFRESH</Link>
      </Button>
    </nav>
  );
}

export default ContainerHOC(NavBar);
