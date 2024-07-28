import { Component } from '@angular/core';
import { ProductsComponent } from './+components/products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
