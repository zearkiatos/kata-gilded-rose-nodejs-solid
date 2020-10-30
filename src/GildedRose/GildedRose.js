class GildedRose {
  AGED_BRIE = 'Aged Brie';

  BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

  SULFURUS = 'Sulfuras, Hand of Ragnaros';

  AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;

  BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;

  BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;

  BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD = 0;

  DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;

  MAX_QUALITY = 50;

  MIN_QUALITY = 0;

  items = [];

  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case this.AGED_BRIE:
          this.decreaseSellIn(item);
          this.updateAgedBrieQuality(item);
          break;
        case this.BACKSTAGE_PASSES:
          this.decreaseSellIn(item);
          this.updateBackstagePassesQuality(item);
          break;
        case this.SULFURUS:
          break;
        default:
          this.decreaseSellIn(item);
          this.updateDefaultItemQuality(item);
          break;
      }
    }
  }

  decreaseSellIn(item) {
    item.sellIn -= 1;
  }

  decreaseQuality(item) {
    if (item.quality > this.MIN_QUALITY) item.quality -= 1;
  }

  increaseQuality(item) {
    if(item.quality < this.MAX_QUALITY) item.quality += 1;
  }

  resetQuality(item) {
    item.quality = 0;
  }

  updateBackstagePassesQuality(item) {
    this.increaseQuality(item);

    if (
      item.sellIn <
      this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(item);
    }

    if (
      item.sellIn <
      this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(item);
    }

    if (item.sellIn < this.BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD) {
      this.resetQuality(item);
    }
  }

  updateDefaultItemQuality(item) {
    this.decreaseQuality(item);

    if (
      item.sellIn < this.DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD
    ) {
      this.decreaseQuality(item);
    }
  }

  updateAgedBrieQuality(item) {
    this.increaseQuality(item);

    if (
      item.sellIn < this.AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD
    ) {
      this.increaseQuality(item);
    }
  }
}

module.exports = GildedRose;
