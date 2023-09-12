/*
## Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. There is an `account` object
in which it is necessary to implement methods for working with balance and
transaction history.

```js

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

const account = {
  // Current account balance
  balance: 0,

  // Transaction History
  transactions: [],
  transactionId: 0,

  /*
   * Method creates and returns a transaction object.
   * Accepts amount and type of transaction.
   */
  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactionId,
      amount: amount,
      type: type
    }
    this.transactionId++;
    this.transactions.push(newTransaction);
  },

  /*
   * The method responsible for adding the amount to the balance..
   * Accepts the amount of the transaction.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history
   */
  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
  },

  /*
   *The method responsible for withdrawing the amount from the balance.
   * Calls createTransaction to create a transaction object
   * then adds it to the transaction history.
   *
   * If amount is greater than the current balance, display a message
   * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Nu exista suficienti bani in cont');
      return;
    }

    if (amount < this.balance) {
      console.log(`Poti retrage mai multi bani decat ${amount} RON`);
    }

    this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
  },

  /*
   * The method returns the current balance
   */
  getBalance() {
    console.log(`Balanta este: ${this.balance}`);
  },

  /*
   * The method searches and returns the transaction object by id
   */
  getTransactionDetails(id) { 
    for (const item of this.transactions) {
      if (item.id === id) {
        console.dir(`Tranzactia cu id-ul: ${item.id} - valoare: ${item.amount} - tipul: ${item.type}`);

        return item;
      }
    }

    console.log(`Nu exista tranzactia cu id-ul: ${id}`);
  },

  /*
   * The method returns the amount of funds
   *a specific type of transaction from the entire history of transactions
   */
  getTransactionTotal(type) { 
    let sum = 0;

    for (const item of this.transactions) {
      if (item.type === type) {
        sum += item.amount;
      }
    }

    console.log(`Totalul tranzactiilor de tipul: ${type} este: ${sum}`);
    return sum;
  },

};

account.getBalance();
account.deposit(500);
account.getBalance();
account.withdraw(400);
account.withdraw(50);
account.withdraw(250);
account.getBalance();
account.getTransactionDetails(1);
account.getTransactionTotal(Transaction.WITHDRAW);

