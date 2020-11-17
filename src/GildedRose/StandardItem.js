import Item from "./Item";

class StandardItem extends Item {
    initialization() {
        this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;
    }

    constructor(name, sellIn, quality) {
        super(name, sellIn, quality);
        this.initialization();
    }

    update() {
        this.decreaseSellIn();
        this.decreaseQuality();

        if(super.hasToBeSoldInLessThan(this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD)) {
            this.decreaseQuality();
        }
    }
}

export default StandardItem;