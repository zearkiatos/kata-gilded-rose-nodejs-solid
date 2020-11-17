import Item from './Item';

class BackstagePasses extends Item {
  initialization() {
    this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
    this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
    this.QUALITY_RESET_SELL_IN_THRESHOLD = 0;
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
        this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
      )
    ) {
      this.increaseQuality();
    }

    if (
      super.hasToBeSoldInLessThan(
        this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
      )
    ) {
      this.increaseQuality();
    }

    if (super.hasToBeSoldInLessThan(this.QUALITY_RESET_SELL_IN_THRESHOLD)) {
      this.resetQuality();
    }
  }
}

export default BackstagePasses;
