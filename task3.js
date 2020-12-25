const Storage = function (items) {
    this.items = items;
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

Storage.prototype.getItems = function() {
    console.log(this.items);
};

Storage.prototype.addItem = function(item) {
    this.items.push(item);
    return this.items;
};

Storage.prototype.removeItem = function (item) {
    if (this.items.includes(item)) {
        const index = this.items.findIndex(itemFind => itemFind === item);
        this.items.splice(index, 1);
    };
};




const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]