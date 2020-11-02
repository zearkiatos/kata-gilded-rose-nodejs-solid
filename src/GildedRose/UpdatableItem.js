const Item = require('./Item');
class UpdatableItem extends Item {
  initialization() {
    this.MAX_QUALITY = 50;
    this.MIN_QUALITY = 0;
    this.item = new Item();
  }

  constructor(item) {
        
    super(item.name, item.sellIn, item.quality);

    if(this.constructor == UpdatableItem) {
      throw new Error("Object of Abstract Class cannot be created");
    }

    this.initialization();
    this.item = item;
  }

  update() {
    throw new Error("Abstract Method has no implementation");
  }

  sellIn() {
    return this.item.sellIn;
  }

  decreaseSellIn() {
    this.item.sellIn -= 1;
  }

  increaseQuality() {
    if (this.item.quality < UpdatableItem.MAX_QUALITY) {
      this.item.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.item.quality > UpdatableItem.MIN_QUALITY) {
      this.item -= 1;
    }
  }

  resetQuality() {
    this.item = 0;
  }
}

module.exports = UpdatableItem;
