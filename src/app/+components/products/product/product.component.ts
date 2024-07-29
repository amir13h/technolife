import { Component, Input } from '@angular/core';
import { Product } from '../../../+models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() Product:Product={
    title:'ff',
    img:'',
    count:4,
    price:'4',
    details:'d',
    ram:1,
  }
  click() {
    alert('با موفقیت کلیک شما ثبت شد 😎😎');
  }
}
