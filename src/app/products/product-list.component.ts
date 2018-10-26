import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    
    ngOnInit(): void {
        console.log('In OnInit');
    }

    constructor() {
        this.listFilter = 't';
        this.filteredProducts = this.listFilter ? this.perFormFilter(this.listFilter): this.products;
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.perFormFilter(this.listFilter): this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            productId: 1,
            productName: "GArden Cart",
            productCode: "GDN-002",
            releaseDate: "March 18, 2018",
            description: "15 gallon capacity rolling garden",
            price: 23.99,
            starRating: 4.2,
            imageUrl: "https://openclipart.org/image/300px/sv"
        },
        {
            productId: 2,
            productName: "GArden Cart",
            productCode: "GDN-002",
            releaseDate: "March 18, 2018",
            description: "15 gallon capacity rolling garden",
            price: 20,
            starRating: 5,
            imageUrl: "https://openclipart.org/image/300px/sv"
        },
        {
            productId: 2,
            productName: "GArden Cart",
            productCode: "GDN-002",
            releaseDate: "March 18, 2018",
            description: "15 gallon capacity rolling garden",
            price: 2,
            starRating: 1,
            imageUrl: "https://openclipart.org/image/300px/sv"
        }   
    ];

    toggleImage(value: string): void {
        this.showImage = !this.showImage;
    }

    perFormFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(value: string): void {
        this.products[0].starRating = 5;
    }
}