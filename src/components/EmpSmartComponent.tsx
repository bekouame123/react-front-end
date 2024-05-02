import React, { useState } from "react";
import Emp from "../models/Emp";
import EmpDumbComponent from "./EmpDumbComponent";
import User from "../models/User";
import { addEmp, getAllEmps } from "../remote/EmpAPI";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



type Props = { user: User }
const EmpSmartComponent: React.FC<Props> = (props) => {
    const [emps, setEmp] = useState<Emp[]>([]);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [socialSC, setSocialSC] = useState<string>("");

    return (<div>
        <form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">FIRST NAME</InputGroup.Text>
                <Form.Control
                    onChange={(e) => { setFirstName(e.target.value); }}
                    placeholder="DIGIT YOUR FIRST NAME PLEASE"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">LAST NAME</InputGroup.Text>
                <Form.Control
                    onChange={(e) => { setLastName(e.target.value); }}
                    placeholder="DIGIT YOUR LAST NAME PLEASE"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">SOCIAL SS</InputGroup.Text>
                <Form.Control
                    onChange={(e) => { setSocialSC(e.target.value); }}
                    placeholder="SSC NUMBER PLEASE"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>


        </form>
        <Button
        
                style={{ margin: "1mm" }}
        
            variant="dark"


            onClick={async () => {
                let result: number = await addEmp(
                    new Emp(0, firstName, lastName, socialSC),
                    props.user);

                if (result === 201) {
                    let apiEmp: Emp[] = await getAllEmps(props.user);
                    setEmp(apiEmp);
                    return ""
                }
            }}>
            Add
        </Button>
        <br></br>
        <br></br>

        <EmpDumbComponent emps={emps} />
        <Button style={{ margin: "1mm" }}
            variant="success"
            onClick={async () => {
                let apiEmp: Emp[] = await getAllEmps(props.user);
                setEmp(apiEmp);
            }}>FIND ALL</Button>
        <br></br>
        <br></br>


    </div>)
}

export default EmpSmartComponent;

