// class BankAccount {
//     name: string;
//     private _balance: number;
//     id: number;
//     constructor(name: string, balance: number, id: number) {
//         this.name = name;
//         this._balance = balance;
//         this.id = id;
//     }
//     // getBalance() {i
//     //     console.log(`My current balance is ${this._balance}`);
//     // }

//     // getter 
//     get balance(): number {
//         return this._balance;
//     }

//     //   addDeposit(amount: number) {
//     //     this._balance = this._balance + amount;
//     // }

//     // setter
//     set deposit(amount: number){
//         this._balance = this._balance + amount; 
//     }
// }

// const myAccount = new BankAccount('Mizan', 275, 65846);
// myAccount.deposit = 256
// console.log(myAccount.balance);