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

  constructor(items) {
    this.items = items;
  }

  updateQuality() {
    for (let item in this.items) {
      switch (item.name) {
        case this.AGED_BRIE:
        break;
      }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name !== this.AGED_BRIE &&
        this.items[i].name !== this.BACKSTAGE_PASSES
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name !== this.SULFURUS) {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;

          if (this.items[i].name === this.BACKSTAGE_PASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }

            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }

      if (this.items[i].name !== this.SULFURUS) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name !== this.AGED_BRIE) {
          if (this.items[i].name !== this.BACKSTAGE_PASSES) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name !== this.SULFURUS) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality -= this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }
  }
}

module.exports = GildedRose;
