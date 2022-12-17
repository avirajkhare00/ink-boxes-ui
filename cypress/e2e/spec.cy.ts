describe('empty spec', () => {
  it('visits the webapp', () => {
    cy.visit('http://localhost:3000/');
  });
  it('checks the correct title', () => {
    cy.title().should('eq', "Ink Boxes");
  });
  it('checks the correct content inside h1 tag', () => {
    cy.get('.Home_title__T09hD').invoke('text').should('eq', "Welcome to Ink Boxes!");
  });
  it('checks correct description', () => {
    cy.get('.Home_description__41Owk').invoke('text').should('eq', "Ink boxes are a collection of helpful Ink smart contract boilerplates along with it's frontend. It will already have polkadot.js library using which frontend can talk with the smart contract deployed. Got inspired by truffle boxes on how easily one can spin up the boilerplate code in no time.Click here to explore Ink Boxes.Click here to raise PR for a new ink box.");
  });
})

export {}
