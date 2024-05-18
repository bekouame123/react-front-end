import React, { useState } from "react";
import MenuDumbComponent from "./MenuDumbComponent";
import User from "../models/User";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Menu from "../models/Menu";
import Order from "../models/Order";
import { addMenu, getAllMenus } from "../remote/MenuAPI";

type Props = {
    user: User;
};

const createMenu = (id: number, name: string, description: string, image: string, price: string, order: Order): Menu => {
    return {
        id,
        name,
        description,
        image,
        price,
        order
        
    };
};

const MenuSmartComponent: React.FC<Props> = (props) => {
    const [menus, setMenus] = useState<Menu[]>([]);
    const [name, setname] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [order, setOrder] = useState<Order>({ billNo:"",orderedTime:"", quantity:"" });

    const createMenuAndAdd = async () => {
        const newMenu: Menu = createMenu(0, name, description, image, price, order);
        const result: number = await addMenu(newMenu, props.user);
        if (result === 201) {
            const apiMenus: Menu[] = await getAllMenus(props.user);
            setMenus(apiMenus);
            
        }
    };

    const handleFindAllMenus = async () => {
        const apiMenus: Menu[] = await getAllMenus(props.user);
        setMenus(apiMenus);
    };


    return (
        <div>
            <div style={{padding:"0mm 0mm 0mm 90mm" ,justifyItems:"center", display:"block", width:"70%"}}>
            <Form>

                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1"> NAME</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setname(e.target.value)}
                        placeholder="DIGIT YOUR FIRST NAME PLEASE"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setDescription (e.target.value)}
                        placeholder="DIGIT YOUR DESCRIPTION PLEASE"
                        aria-label="description"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">IMAGE</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="IMAGE PLEASE"
                        aria-label="Image"
                        aria-describedby="basic-addon1"
                        />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="ENTER PRICE PLEASE"
                        aria-label="Price"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">billNo</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setOrder({...order, billNo: e.target.value})}
                        placeholder="ENTER billNo"
                        aria-label="billNo"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>

                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">ORDER_TIME</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setOrder({...order, orderedTime: e.target.value})}
                        placeholder="ENTER orderTime"
                        aria-label="orderTime"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>

                <InputGroup className="col-6">
                    <InputGroup.Text id="basic-addon4">QUANTITY</InputGroup.Text>
                    <Form.Control
                        onChange={(e) => setOrder({...order, quantity: e.target.value})}
                        placeholder="ENTER quantity"
                        aria-label="quantity"
                        aria-describedby="basic-addon4"
                    />
                </InputGroup>
            </Form>
        
            <Button
                style={{ margin: "2mm" }}
                variant="danger"
                onClick={createMenuAndAdd}
            >
                Add
            </Button>
            </div>
            <br />
            <br />
            <MenuDumbComponent menus={menus} />
            <Button
                style={{ margin: "1mm"}}
                variant="danger"
                onClick={handleFindAllMenus}
            >
                FIND ALL
            </Button>
            <br />
            <br />
        </div>
    );
};

export default MenuSmartComponent;




