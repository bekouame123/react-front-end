import React from "react";
import Table from 'react-bootstrap/Table';
import Menu from "../models/Menu";


type Props = {menus:Menu[]}

const MenuDumbComponent:React.FC<Props> = (props)=>{

    

    return(<Table responsive variant="primary">
        <thead >
            <tr>
                <th style={{color:"blue"}}>Id</th>
                <th style={{color:"blue"}}>NAME</th>
                <th style={{color:"blue"}}>DESCRIPTION</th>
                <th style={{color:"blue"}}>IMAGE</th>
                <th style={{color:"blue"}}>PRICE</th>
                <th style={{color:"blue"}}>BILL NO</th>
                <th style={{color:"blue"}}>QUANTITY</th>
                <th style={{color:"blue"}}>ORDER_TIME</th>
               
                


            </tr>
        </thead>
        <tbody>
            {props.menus.map((menu:Menu)=>{
                return(<tr>
                    <td>{menu.id}</td>
                    <td>{menu.name}</td>
                    <td>{menu.description}</td>
                    <td>{menu.image}</td>
                    <td>{menu.price}</td>
                    <td>{menu.order.billNo}</td>
                    <td>{menu.order.quantity}</td>
                    <td>{menu.order.orderedTime}</td>
                </tr>)
            })}
        </tbody>
    </Table>);
} 

export default MenuDumbComponent;