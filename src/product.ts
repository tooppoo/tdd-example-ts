import { Category } from './category'

export class Product {
  private category: Category

  setCategory(aCategory: Category) {
    this.category = aCategory
    aCategory.addProduct(this)
  }

  getCategory() {
    return this.category
  }
}
