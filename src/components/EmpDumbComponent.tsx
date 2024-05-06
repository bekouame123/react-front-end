import React from "react";
import Emp from "../models/Emp";
import Table from 'react-bootstrap/Table';


type Props = {emps:Emp[]}

const EmpDumbComponent:React.FC<Props> = (props)=>{

    

    return(<Table responsive variant="dark">
        <thead >
            <tr>
                <th style={{color:"yellowgreen"}}>Id</th>
                <th style={{color:"yellowgreen"}}>FIRST NAME</th>
                <th style={{color:"yellowgreen"}}>LAST NAME</th>
                <th style={{color:"yellowgreen"}}>SOCIAL SECURITY</th>
                <th style={{color:"yellowgreen"}}>EMPLOYEE ID</th>
                <th style={{color:"yellowgreen"}}>DEPARTMENT ID</th>
                <th style={{color:"yellowgreen"}}>DEPARTMENT NAME</th>
                <th style={{color:"yellowgreen"}}>JOB TITLE</th>
                <th style={{color:"yellowgreen"}}>JOB STATUS</th>


            </tr>
        </thead>
        <tbody>
            {props.emps.map((emp:Emp)=>{
                return(<tr>
                    <td>{emp.id}</td>
                    <td>{emp.firstName}</td>
                    <td>{emp.lastName}</td>
                    <td>{emp.socialSC}</td>
                    <td>{emp.enrollerId}</td>
                    <td>{emp.department.id}</td>
                    <td>{emp.department.dpartName}</td>
                    <td>{emp.department.jobTile}</td>
                    <td>{emp.department.jobStatus}</td>
                </tr>)
            })}
        </tbody>
    </Table>);
} 

export default EmpDumbComponent;