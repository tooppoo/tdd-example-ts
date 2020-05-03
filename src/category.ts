import { Product } from './product'

export class Category {
  private products: Product[] = []

  addProduct(product: Product): void {
    this.products.push(product)
  }
  contains(product: Product): boolean {
    return this.products.includes(product)
  }
}