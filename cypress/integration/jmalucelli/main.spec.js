describe('Testes na tela fuel-savings', function () {
  beforeEach(function () {
     cy.visit('http://localhost:3000/fuel-savings');
  });


  it('Testar com Savings per Week', function () {
    cy.get('[name=newMpg]').type('80') // campo New Vehicle MPG
    cy.get('[name=tradeMpg]').type('60') // campo <<< Trade-in MPG >>>>   
    cy.get('[name=newPpg]').type('15') // cammpo <<< New Vehicle price per gallon >>>>   
    cy.get('[name=tradePpg]').type('12') // campo <<< Trade-in price per gallon >>>>   
    cy.get('[name=milesDriven]').type('7000') // campo <<< Miles Driven >>>>

    cy.contains('td', '$379.17')
    cy.contains('td', '$4,550.04')
    cy.contains('td', '$13,650.12')
 });

 it('Testar com Savings per Month', function () {
  cy.get('[name=newMpg]').type('80') 
  cy.get('[name=tradeMpg]').type('60')
  cy.get('[name=newPpg]').type('15')
  cy.get('[name=tradePpg]').type('12')
  cy.get('[name=milesDriven]').type('7000')
  cy.get('[name=milesDrivenTimeframe]').select('Month')
  
  cy.contains('td', '$87.50')
  cy.contains('td', '$1,050')
  cy.contains('td', '$3,150')
});

it('Testar com Savings per Year', function () {
  cy.get('[name=newMpg]').type('80') 
  cy.get('[name=tradeMpg]').type('60')
  cy.get('[name=newPpg]').type('15')
  cy.get('[name=tradePpg]').type('12')
  cy.get('[name=milesDriven]').type('7000')
  cy.get('[name=milesDrivenTimeframe]').select('Year')
  
  cy.contains('td', '$7.29')
  cy.contains('td', '$87.48')
  cy.contains('td', '$262.44')
});


it('Testar com Loss per Week', function () {
  cy.get('[name=newMpg]').type('70') 
  cy.get('[name=tradeMpg]').type('60')
  cy.get('[name=newPpg]').type('15')
  cy.get('[name=tradePpg]').type('12')
  cy.get('[name=milesDriven]').type('7000')
  cy.get('[name=milesDrivenTimeframe]').select('Week')
  
  cy.contains('td', '$-433.33')
  cy.contains('td', '$-5,199.96')
  cy.contains('td', '$-15,599.88')
});
  
it('Testar com Loss per Month', function () {
  cy.get('[name=newMpg]').type('70') 
  cy.get('[name=tradeMpg]').type('60')
  cy.get('[name=newPpg]').type('15')
  cy.get('[name=tradePpg]').type('12')
  cy.get('[name=milesDriven]').type('7000')
  cy.get('[name=milesDrivenTimeframe]').select('Month')
  
  cy.contains('td', '$-100')
  cy.contains('td', '$-1,200')
  cy.contains('td', '$-3,600')
});

it('Testar com Loss per Year', function () {
  cy.get('[name=newMpg]').type('70') 
  cy.get('[name=tradeMpg]').type('60')
  cy.get('[name=newPpg]').type('15')
  cy.get('[name=tradePpg]').type('12')
  cy.get('[name=milesDriven]').type('7000')
  cy.get('[name=milesDrivenTimeframe]').select('Year')
  
  cy.contains('td', '$-8.33')
  cy.contains('td', '$-99.96')
  cy.contains('td', '$-299.88')
});


it('Verificar valores preeenchidos nos campos', function () {
  cy.get('[name=newMpg]').type('70').should('have.value', '70')
  cy.get('[name=tradeMpg]').type('60').should('have.value', '60')
  cy.get('[name=newPpg]').type('15').should('have.value', '15')
  cy.get('[name=tradePpg]').type('12').should('have.value', '12')
  cy.get('[name=milesDriven]').type('7000').should('have.value', '7000')
  cy.get('[name=milesDrivenTimeframe]').select('Year').should('have.value', 'year')
});

it('Sistema deve permitir preencher somente números nos campos', function () {
  cy.get('[name=newMpg]').type('70!@#$%¨&*()_+ASas').should('have.value', '70')
  cy.get('[name=tradeMpg]').type('60!@#$%¨&*()_+ASas').should('have.value', '60')
  cy.get('[name=newPpg]').type('15!@#$%¨&*()_+ASas').should('have.value', '15')
  cy.get('[name=tradePpg]').type('12!@#$%¨&*()_+ASas').should('have.value', '12')
  cy.get('[name=milesDriven]').type('70!@#$%¨&*()_+ASas').should('have.value', '70')
});


it('Verificar título da tela Fuel Savings Analysis', function () {
  cy.contains('h2', 'Fuel Savings Analysis')
});

it('Verificar valor dos campos após limpar os mesmos', function () {
  cy.get('[name=newMpg]').type('70')
  .should('have.value', '70')
  .clear()
  .should('have.value', '')

  cy.get('[name=tradeMpg]').type('70')
  .should('have.value', '70')
  .clear()
  .should('have.value', '')


  cy.get('[name=newPpg]').type('70')
  .should('have.value', '70')
  .clear()
  .should('have.value', '')


  cy.get('[name=tradePpg]').type('70')
  .should('have.value', '70')
  .clear()
  .should('have.value', '')


  cy.get('[name=milesDriven]').type('70')
  .should('have.value', '70')
  .clear()
  .should('have.value', '')


});
 
});