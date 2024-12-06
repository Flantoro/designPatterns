import { ProductInfoDto } from "../dto/ProductInfoDto";

export class ProductData{
    public getTargetProduct(){
        return new ProductInfoDto("0", "Sauce Labs Bike Light");
    } 
}