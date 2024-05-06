import React, { useState } from "react";
import EmpDumbComponent from "./EmpDumbComponent";
import User from "../models/User";
import { addEmp, getAllEmps } from "../remote/EmpAPI";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Department } from "../models/Depart";
import Emp from "../models/Emp";

type Props = {
    user: User;
};

const createEmp = (id: number, firstName: string, lastName: string, socialSC: string, department: Department): Emp => {
    return {
        id,
        firstName,
        lastName,
        socialSC,
        department
    };
};

const EmpSmartComponent: React.FC<Props> = (props) => {
    const [emps, setEmps] = useState<Emp[]>([]);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [socialSC, setSocialSC] = useState<string>("");
    const [department, setDepartment] = useState<Department>({ dpartName: "", jobTile: "", jobStatus: "" });

    const createEmpAndAdd = async () => {
        const newEmp: Emp = createEmp(0, firstName, lastName, socialSC, department);
        const result: number = await addEmp(newEmp, props.user);
        if (result === 201) {
            const apiEmps: Emp[] = await getAllEmps(props.user);
            setEmps(apiEmps);
            setDepartment({ dpartName: ""  , jobTile: "", jobStatus: ""});
            setFirstName("");
            setLastName("");
            setSocialSC("");
        }
    };

    const handleFindAllEmps = async () => {
        const apiEmps: Emp[] = await getAllEmps(props.user);
        setEmps(apiEmps);
    };


    return (
        <div>
            <div style={{padding:"0mm 0mm 0mm 90mm" ,justifyItems:"center", display:"block", width:"70%"}}>
            <Form>

                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">FIRST NAME</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="DIGIT YOUR FIRST NAME PLEASE"
                        aria-label="firstName"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">LAST NAME</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="DIGIT YOUR LAST NAME PLEASE"
                        aria-label="lastName"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">SOCIAL SS</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setSocialSC(e.target.value)}
                        placeholder="SSC NUMBER PLEASE"
                        aria-label="SocialSC"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">DEPARTMENT</InputGroup.Text>
                    <Form.Control
                        value={department.dpartName}
                        onChange={(e) => setDepartment({ ...department, dpartName: e.target.value })}
                        placeholder="ENTER DEPARTMENT"
                        aria-label="Department"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">JOB STATUS</InputGroup.Text>
                    <Form.Control
                        value={department.jobStatus}
                        onChange={(e) => setDepartment({ ...department, jobStatus: e.target.value })}
                        placeholder="ENTER job status"
                        aria-label="jobStatus"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">JOB TITLE</InputGroup.Text>
                    <Form.Control
                        value={department.jobTile}
                        onChange={(e) => setDepartment({ ...department, jobTile: e.target.value })}
                        placeholder="ENTER job tile"
                        aria-label="jobTitle"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>
            </Form>
        
            <Button
                style={{ margin: "2mm" }}
                variant="dark"
                onClick={createEmpAndAdd}
            >
                Add
            </Button>
            </div>
            <br />
            <br />
            <EmpDumbComponent emps={emps} />
            <Button
                style={{ margin: "1mm" }}
                variant="success"
                onClick={handleFindAllEmps}
            >
                FIND ALL
            </Button>
            <br />
            <br />
        </div>
    );
};

export default EmpSmartComponent;
