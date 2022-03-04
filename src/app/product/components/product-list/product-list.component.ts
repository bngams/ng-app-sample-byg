import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS } from '../../mocks/products-data.mock';
import { Product } from '../../models/product';
import { ProductResourceService } from '../../services/product-resource.service';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @Input()
  parentProductList!: Array<Product>;
  products: Product[] = new Array();
  products$: Observable<Product[]> = this.productService.listAllProducts();

  @ViewChildren(ProductCardComponent) productCards!: QueryList<ProductCardComponent>;

  // DI
  constructor(
    private productService: ProductService,
    private productResourceService: ProductResourceService
  ) { }

  // Initialization
  ngOnInit() {
    this.loadProductsViaHttp();
  }

  ngAfterViewInit() {
    console.log('product cards view children ', this.productCards.toArray())
  }

  loadProductsViaMock(): void {
    // via mock
    this.products = PRODUCTS;
  }

  loadProductsViaHttp(): void {
    this.productService.listAllProducts().subscribe(
      products => this.products = products
    );
  }

  loadProductsViaHttpResourceService(): void {
    this.productResourceService.list().subscribe(
      products => this.products = products
    );
  }


}
