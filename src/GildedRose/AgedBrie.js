import Item from './Item';

class AgedBrie extends Item {
  initialization() {
    this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;
  }

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    this.initialization();
  }

  update() {
    this.decreaseSellIn();

    this.increaseQuality();

    if (
      super.hasToBeSoldInLessThan(
        this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD
      )
    ) {
      this.increaseQuality();
    }
  }
}

export default AgedBrie;
