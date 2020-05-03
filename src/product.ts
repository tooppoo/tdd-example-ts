import { Category } from './category'

export class Product {
  private category: Category

  setCategory(aCategory: Category) {
    this.category = aCategory
    this.category.addProduct(this)
  }

  getCategory() {
    return this.category
  }
}