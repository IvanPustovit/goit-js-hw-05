"use strict";

class Storage {
  constructor(item) {
    this.item = item;
  }
  getItems() {
    return this.item;
  }

  addItem(item) {
    return this.item.push(item);
  }

  removeItem(item) {
    return this.item.splice(this.item.indexOf(item), 1);
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);
console.log(storage);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.item); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.item); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
