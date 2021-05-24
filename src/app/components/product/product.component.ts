import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1: any = { productId: 1, productName: "bardak", categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 2, productName: "laptop", categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 3, productName: "mouse", categoryId: 1, unitPrice: 5 }
  product4: any = { productId: 4, productName: "keyboard", categoryId: 1, unitPrice: 5 }
  product5: any = { productId: 5, productName: "kamera", categoryId: 1, unitPrice: 5 }

  products = [this.product1, this.product2, this.product3, this.product4, this.product5]
  constructor() { }

  ngOnInit(): void {
  }

}
