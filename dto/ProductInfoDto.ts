import { builtinModules } from "module";

export class ProductInfoDto{
    private id: String;
    private name: String;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }

    public getId(){
        return this.id;
    }

    public getName(){
        return this.name;
    }
}