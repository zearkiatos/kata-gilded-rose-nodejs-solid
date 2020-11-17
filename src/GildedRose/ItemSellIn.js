class ItemSellIn {

    constructor(value) {
        this.value = value;
    }

    decrease() {
        return new ItemSellIn(this.value - 1);
    }

    isLessThan(days) {
        return this.value < days;
    }
}

export default ItemSellIn;