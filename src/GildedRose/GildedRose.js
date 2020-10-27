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
    for (let item in this.items) {
      switch (item.name) {
        case this.AGED_BRIE:
          this.decreaseSellIn(item);
          break;
        case this.BACKSTAGE_PASSES:
          this.decreaseQuality();
          break;
        case this.SULFURUS:
          break;
        default:
          break;
      }
    }
  }

  decreaseSellIn(item) {
    item.sellIn -= 1;
  }

  decreaseQuality(item) {
    item.quality -= 1;
  }

  increaseQuality(item) {
    item.quality += 1;
  }

  resetQuality(item) {
    item.quality = 0;
  }

  updateBackstagePassesQuality(item) {
    if (item.quality < MAX_QUALITY) {
      this.increaseQuality(item);
      this.increaseQuality(item);
    }

    if(item.sellIn < this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
      this.increaseQuality(item);
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
