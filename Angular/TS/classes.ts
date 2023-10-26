class Person{
    private _ssn:number;
    name:string | number; //union type
    isAdmin!:boolean;

    constructor(ssn:number, name:string){
        this._ssn = ssn;
        this.name = name;        
    }
    
    public set ssn(ssn:number){
        this._ssn = ssn;
    }
    public get ssn(){
        return this._ssn;
    }
}
let person = new Person(123,"abc");
console.log(person.ssn);

