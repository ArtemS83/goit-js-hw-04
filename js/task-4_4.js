const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value; // Write code in this line
  },
  showOrders() {
    return this.orders; // Write code in this line
  },
  addOrder(cost, order) {
    this.balance -= cost; // Write code in this line
    this.orders.push(order); // Write code in this line
  },
};
const copyAccount =  Object.assign({},account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы


account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders()); 
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

//для примера Object.assign({}, obj)-копиррует(создает свой новый) обьект (а не ссылку на него)
// var obj = { a: 1 };
// var copy = Object.assign({}, obj);
// console.log(copy); // { a: 1 }
// console.log(copy === obj)//false
// var copy = obj;
// console.log(copy === obj)//true