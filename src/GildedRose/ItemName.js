class ItemName {

    initialization() {
        this.AGED_BRIE = "Aged Brie";
        this.BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
        this.SULFURAS = "Sulfuras, Hand of Ragnaros";
        this.value = ''
    }

    constructor(value) {
        this.initialization();
        this.value = value;
    }

    isAgedBrie() {
        return this.AGED_BRIE === this.value;
    }

    isBackstagePasses() {
        return this.BACKSTAGE_PASSES === this.value;
    }

    isSulfuras() {
        return this.SULFURAS === this.value;
    }

}

export default ItemName;