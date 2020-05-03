
describe('test case', () => {
  it('test1', () => {
    const pc: any = new Product()
    const electronic: any = {}

    pc.setCategory(electronic)

    expect(electronic).toStrictEqual(pc.getCategory())
  })
})