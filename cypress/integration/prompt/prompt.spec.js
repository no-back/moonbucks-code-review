describe('web api에서 제공하는 prompt관련 테스트', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500/')
  })

  it('실행환경 테스트', () => {
    expect(true).to.equal(true)
  })
})