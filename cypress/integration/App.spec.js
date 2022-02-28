describe('App', () => {
  const appUrl = 'http://localhost:3000';

  before(() => {
    cy.visit(appUrl);
  });

  it('true equals true', () => {
    expect(true).to.eq(true);
  });
})
