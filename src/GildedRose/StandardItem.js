import UpdatableItem from "./UpdatableItem";

class StandardItem extends UpdatableItem {
    initialization() {
        this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD = 0;
    }

    constructor(item) {
        super(item);
        this.initialization();
    }

    update() {
        this.decreaseSellIn();
        this.decreaseQuality();

        if(super.sellIn() < this.DOUBLE_QUALITY_DECREASE_SELL_IN_THRESHOLD) {
            this.decreaseQuality();
        }
    }
}

export default StandardItem;