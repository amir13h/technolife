import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { ProductComponent } from './product/product.component';
import { Product } from '../../+models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    HeaderComponent,
    FilterComponent,
    ProductComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:Product[]=[
    {title:'لپ تاپ 15.6 اینچی لنوو مدل IdeaPad5 i5 1235U 16GB 512GB MX550 2GB',price:'28,990,000',count:2,details:'Core i5',ram:16,img:'https://www.technolife.ir/image/small_product-TLP-20862_eb6bf998-8f57-4133-b0f9-73d33af5ebcf.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی مدل IdeaPad Slim 3 i5 13420H 8GB 512GB',price:'35,300,000',count:2,details:'Core i5',ram:8,img:'https://www.technolife.ir/image/small_product-TLP-28955_0f24246b-2cfe-4595-8c0a-64327b9a5d22.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی مدل IdeaPad Slim 3 i7 13620H 16GB 512GB',price:'40,200,000',count:2,details:'Core i7',ram:16,img:'https://www.technolife.ir/image/small_product-TLP-29710_fdb329bf-b36e-4f63-ae96-8d5dcfe5d541.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی مدل LOQ Gaming i5 13420H 16GB 1TB RTX3050',price:'27,000,000',count:2,details:'Core i5',ram:16,img:'https://www.technolife.ir/image/small_product-TLP-35014_88576817-e556-4e67-ab56-cbf9f1206b92.png'},
    {title:'لپ تاپ ایسوس 15.6 اینچی مدل Vivobook X1502ZA i5 12500H 8GB 512GB',price:'30,300,000',count:2,details:'Core i5',ram:8,img:'https://www.technolife.ir/image/small_product-TLP-30481_ecf78f32-0f1f-4372-b03e-d85187bac0ac.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی مدل IdeaPad N4020 4GB 256GB',price:'15,000,000',count:2,details:'Celeron',ram:4,img:'https://www.technolife.ir/image/small_product-TLP-31930_9e8c3440-cbbd-4954-a6df-9c3101f9f19b.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی  Vrt15 N4500AA  8GB  512GB',price:'18,300,000',count:2,details:'Celeron',ram:8,img:'https://www.technolife.ir/image/small_product-TLP-27215_652e4c2a-08ef-4857-a63a-00b342eeb857.png'},
    {title:'لپ تاپ لنوو 15.6 اینچی IdeaPad Slim3 i3 1305U 8GB 256GB',price:'19,300,000',count:2,details:'Core i3',ram:8,img:'https://www.technolife.ir/image/small_product-TLP-34745_e27067ef-7228-4b9d-8e20-d506512507ca.png'}
  ]

}
