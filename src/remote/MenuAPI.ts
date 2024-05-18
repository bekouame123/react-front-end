import Menu from "../models/Menu";
import User from "../models/User";
import MenuClient from "./MenuClient";


export const getAllMenus = async(user:User):Promise<Menu[]>=>{
    const response = await MenuClient
        .get<Menu[]>("/all",{
            //basic auth
            auth:{username:user.userName, 
                password:user.password?user.password:""}
    });
    if(response.status===200){
        return response.data;
    }else{
        console.log(response); //for debugging
        console.warn("pas possible");
        return [];
    }
}

export const addMenu = async(menu:Menu, user:User):Promise<number>=>{
    let response = await MenuClient
        .post("/add", menu, {
        auth:{username:user.userName, 
            password:user.password?user.password:""}
});

    //debugging
    if(response.status!==201){
        console.log(response);
    }
    return response.status;
}

