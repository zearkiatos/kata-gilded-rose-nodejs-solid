const UpdatableItem = require("./UpdatableItem");

class AgedBrie extends UpdatableItem {
    initialization() {
        this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD = 0;
    }

    constructor(item) {
        super(item);
        this.initialization();
    }

    update() {
        this.decreaseSellIn();

        this.increaseQuality();

        if(this.sellIn() < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

    }
}

module.exports = AgedBrie;