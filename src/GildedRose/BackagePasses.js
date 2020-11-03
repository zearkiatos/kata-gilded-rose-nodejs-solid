const UpdatableItem = require("./UpdatableItem");

class BackstagePasses extends UpdatableItem {
    initialization() {
       this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 10;
       this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD = 5;
       this.QUALITY_RESET_SELL_IN_THRESHOLD = 0; 
    }

    constructor(item) {
        super(item);
        this.initialization();
    }

    update() {
        this.decreaseSellIn();

        this.increaseQuality();

        if(this.sellIn() < this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if(this.sellIn() < this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if(this.sellIn() < this.QUALITY_RESET_SELL_IN_THRESHOLD) {
            this.resetQuality();
        }
    }
}

module.exports = BackstagePasses;