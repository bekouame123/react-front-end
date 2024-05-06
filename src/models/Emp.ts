import { Department } from "./Depart"

export default interface Emp{
  
    
         id?:number,
         firstName?:string,
         lastName?:string,
         socialSC?:string,
         enrollerId?:number,
         department: Department
         


}