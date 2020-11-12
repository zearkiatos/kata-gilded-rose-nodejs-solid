import Item from './Item';
class UpdatableItem extends Item {

  constructor(item) {
        
    super(item.name, item.sellIn, item.quality);

    if(this.constructor == UpdatableItem) {
      throw new Error("Object of Abstract Class cannot be created");
    }

    this.MAX_QUALITY = 50;
    this.MIN_QUALITY = 0;
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
    if (this.item.quality < this.MAX_QUALITY) {
      this.item.quality += 1;
    }
  }

  decreaseQuality() {
    if (this.item.quality > this.MIN_QUALITY) {
      this.item.quality -= 1;
    }
  }

  resetQuality() {
    this.item.quality = 0;
  }
}

export default UpdatableItem;
