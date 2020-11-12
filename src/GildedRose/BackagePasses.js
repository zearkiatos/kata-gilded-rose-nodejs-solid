import UpdatableItem from './UpdatableItem';

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

        if(super.sellIn() < this.DOUBLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if(super.sellIn() < this.TRIPLE_QUALITY_INCREASE_SELL_IN_THRESHOLD) {
            this.increaseQuality();
        }

        if(super.sellIn() < this.QUALITY_RESET_SELL_IN_THRESHOLD) {
            this.resetQuality();
        }
    }
}

export default BackstagePasses;