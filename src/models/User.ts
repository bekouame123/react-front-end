export default class User{
    constructor(
        public userName:string,
        public role:string,
        public password?:string,
        public id?:number
    ){}
}