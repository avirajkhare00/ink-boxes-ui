describe('Ink Boxes', () => {
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
});

describe('Ink Boxes download', () => {
  it('visits the download page', () => {
    cy.visit('http://localhost:3000/ink-boxes')
  });
  it('checks the correct title', () => {
    cy.title().should('eq', "Ink Boxes");
  });
  it('checks the correct content inside h1 tag', () => {
    cy.get('h1.Home_title__T09hD').invoke('text').should('eq', 'Welcome to Ink Boxes!');
  });
  it('checks correct content in h2 tag', () => {
    cy.get('.Home_main__nLjiQ > :nth-child(3)').invoke('text').should('eq', 'Live');
  });
  it('checks correct content in another h2 tag', () => {
    cy.get('.Home_main__nLjiQ > :nth-child(5)').invoke('text').should('eq', 'Coming Soon');
  });
  it('checks the title of first live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(1) > .card > .card-body > .card-title').invoke('text').should('eq', 'Flipper');
  });
  it('checks the description of first live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(1) > .card > .card-body > .card-text').invoke('text').should('eq', "This ink box contains flipper smart contract along with the UI.");
  });
  it('checks the title of second live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(2) > .card > .card-body > .card-title').invoke('text').should('eq', 'ERC-20');
  });
  it('checks the description of second live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(2) > .card > .card-body > .card-text').invoke('text').should('eq', "This ink box contains ERC-20 smart contract along with the UI.");
  });
  it('checks the title of third live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(3) > .card > .card-body > .card-title').invoke('text').should('eq', 'ERC-721');
  });
  it('checks the description of third live ink box', () => {
    cy.get(':nth-child(4) > .row > :nth-child(3) > .card > .card-body > .card-text').invoke('text').should('eq', "This ink box contains ERC-721 smart contract along with the UI.");
  });
  it('clicks on download button of first ink box downloads it', () => {
    cy.get(':nth-child(4) > .row > :nth-child(1) > .card > .card-body > .btn').click()
  });
  it('clicks on download button of second ink box downloads it', () => {
    cy.get(':nth-child(4) > .row > :nth-child(2) > .card > .card-body > .btn').click()
  });
  it('clicks on download button of third ink box downloads it', () => {
    cy.get(':nth-child(4) > .row > :nth-child(3) > .card > .card-body > .btn').click()
  });
  it('checks the title of first coming soon ink box', () => {
    cy.get(':nth-child(6) > .row > :nth-child(1) > .card > .card-body > .card-title').invoke('text').should('eq', "NFT Marketplace");
  });
  it('checks the description of first coming soon ink box', () => {
    cy.get(':nth-child(6) > .row > :nth-child(1) > .card > .card-body > .card-text').invoke('text').should('eq', "This ink box contains NFT Marketplace smart contract along with the UI.");
  });
  it('checks the title of second coming soon ink box', () => {
    cy.get(':nth-child(6) > .row > :nth-child(2) > .card > .card-body > .card-title').invoke('text').should('eq', "Decentralized Ecommerce");
  });
  it('checks the description of second coming soon ink box', () => {
    cy.get(':nth-child(6) > .row > :nth-child(2) > .card > .card-body > .card-text').invoke('text').should('eq', "This ink box contains decentralized ecommerce smart contract along with the UI.");
  });
});

describe('contribute', () => {
  it('visits the contribute page', () => {
    cy.visit('http://localhost:3000/contribute')
  });
  it('checks the correct title', () => {
    cy.title().should('eq', "Ink Boxes");
  });
  it('checks the correct content inside h1 tag', () => {
    cy.get('.Home_title__T09hD').invoke('text').should('eq', "Contribute to Ink Boxes!");
  });
  it('checks the correct content inside h2 tag', () => {
    cy.get('.Home_main__nLjiQ > :nth-child(2)').invoke('text').should('eq', "Here are the following things you need to keep in mind in order to create an ink box:");
  });
  it('checks the first list item', () => {
    cy.get('ul.Home_description__41Owk > :nth-child(1)').invoke('text').should('eq', "Your project should have a proper README.");
  });
  it('checks the second list item', () => {
    cy.get('ul.Home_description__41Owk > :nth-child(2)').invoke('text').should('eq', "It should have either MIT or Apache V2 license.");
  });
  it('checks the third list item', () => {
    cy.get('ul.Home_description__41Owk > :nth-child(3)').invoke('text').should('eq', "One directory should contain entire source code, check existing ink boxes for directory structure.");
  });
  it('checks the fourth list item', () => {
    cy.get('ul.Home_description__41Owk > :nth-child(4)').invoke('text').should('eq', "Your smart contracts and UI both should have tests.");
  });
  it('checks the fifth list item', () => {
    cy.get('ul.Home_description__41Owk > :nth-child(5)').invoke('text').should('eq', "Once you create an ink box, you can clone ink-boxes repo provided below. Place the ink box inside the repo and create a pull request.");
  });
});

export {}
