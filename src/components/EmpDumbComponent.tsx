import React from "react";
import Emp from "../models/Emp";

type Props = {emps:Emp[]}

const EmpDumbComponent:React.FC<Props> = (props)=>{

    return(<table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>SOCIAL SECURITY</th>
                <th>EMPLOYEE ID</th>

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

                </tr>)
            })}
        </tbody>
    </table>);
} 

export default EmpDumbComponent;