class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  sellIn() {
    return this.sellIn;
  }

  quality() {
    return this.quality;
  }

  decreaseSellIn() {
    this.sellIn = this.sellIn.decrease();
  }

  hasToBeSoldInLessThan(days) {
    return this.sellIn.isLessThan(days);
  }

  increaseQuality() {
    this.quality = this.quality.increase();
  }

  decreaseQuality() {
    this.quality = this.quality.decrease();
  }

  resetQuality() {
    this.quality = this.quality.reset();
  }

  update() {
    throw new Error('Abstract Method has no implementation');
  }

  toString() {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}

export default Item;
