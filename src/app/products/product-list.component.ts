import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{

    constructor() {
    }
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "cart";
    products: any[] = [
        {
            "productId": 2,
            "productName": "GArden Cart",
            "productCode": "GDN-002",
            "releaseDate": "March 18, 2018",
            "description": "15 gallon capacity rolling garden",
            "price": 23.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/sv"
        },
        {
            "productId": 2,
            "productName": "GArden Cart",
            "productCode": "GDN-002",
            "releaseDate": "March 18, 2018",
            "description": "15 gallon capacity rolling garden",
            "price": 23.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/sv"
        }   
    ];

    toggleImage(value: string): void {
        this.showImage = !this.showImage;
    }
}