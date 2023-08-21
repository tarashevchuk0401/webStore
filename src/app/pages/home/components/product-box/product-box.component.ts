import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id:12313,
    title: 'aasdasda sd asd ',
    price: 54,
    category:'shoes',
    description: 'descr',
    image: 'https://via.placeholder.com/150'
  };
  @Output() addToCart = new EventEmitter();

  onAddToCart():void{
    this.addToCart.emit(this.product);
  
  }

}
