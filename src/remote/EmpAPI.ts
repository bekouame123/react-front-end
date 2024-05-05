import Emp from "../models/Emp";
import User from "../models/User";
import EmpClient from "./EmpClient"

export const getAllEmps = async(user:User):Promise<Emp[]>=>{
    const response = await EmpClient
        .get<Emp[]>("/emp",{
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

export const addEmp = async(emp:Emp, user:User):Promise<number>=>{
    let response = await EmpClient
        .post("/add/emp", emp, {
        auth:{username:user.userName, 
            password:user.password?user.password:""}
});

    //debugging
    if(response.status!==201){
        console.log(response);
    }
    return response.status;
}