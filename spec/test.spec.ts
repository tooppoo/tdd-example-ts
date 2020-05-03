import { Category } from '../src/category'
import { Product } from '../src/product'

describe('test case', () => {
  it('test1', () => {
    const pc = new Product()
    const electronic: any = {}

    pc.setCategory(electronic)

    expect(electronic).toStrictEqual(pc.getCategory())
  })
  it('test2', () => {
    const pc = new Product()
    const electronic: any = new Category()

    pc.setCategory(electronic)

    expect(electronic.contains(pc)).toBe(true)
  })
})