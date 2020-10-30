class GildedRose {

  initialization() {
    this.AGED_BRIE = 'Aged Brie';

    this.BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
  
    this.SULFURUS = 'Sulfuras, Hand of Ragnaros';
  
    this.AGED_BRIE_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;
  
    this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
  
    this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
  
    this.BACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD = 0;
  
    this.DEFAULT_ITEM_DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;
  
    this.MAX_QUALITY = 50;
  
    this.MIN_QUALITY = 0;
  
    this.items = [];
  }

  constructor(items) {
    this.initialization();
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
