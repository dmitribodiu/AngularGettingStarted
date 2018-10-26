import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    
    ngOnInit(): void {
        console.log('onInit')
        this.products = this.productService.getProducts();
        this.filteredProducts = this.listFilter ? this.perFormFilter(this.listFilter): this.products;
    }

    constructor(private productService: ProductService) {
        console.log('ctor')
        this.listFilter = '';
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
    products: IProduct[] = [];

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