import React from "react";
import Emp from "../models/Emp";
import Table from 'react-bootstrap/Table';


type Props = {emps:Emp[]}

const EmpDumbComponent:React.FC<Props> = (props)=>{

    return(<Table responsive variant="dark">
        <thead>
            <tr>
                <th>Id</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>SOCIAL SECURITY</th>
                <th>EMPLOYEE ID</th>
                <th>DEPARTMENT ID</th>
                <th>DEPARTMENT NAME</th>

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



                </tr>)
            })}
        </tbody>
    </Table>);
} 

export default EmpDumbComponent;