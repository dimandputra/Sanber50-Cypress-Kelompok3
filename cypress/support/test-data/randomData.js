export default class RandomData {

    static generateRandomEmailAddress() {
      const randomNumber = Cypress._.random(10000);
      return `email${randomNumber}@gmail.com`;
    }
  
  }
  