class ItemQuality {
  initialization() {
    this.MAX_VALUE = 50;
    this.MIN_VALUE = 0;
    this.value = 0;
  }
  constructor(value) {
    this.initialization();
    if (value < this.MIN_VALUE || value > this.MAX_VALUE)
      throw new Error('Item Quality Out of Range');
    this.value = value;
  }

  increase() {
    if (this.value == this.MAX_VALUE) {
      return this;
    }
    return new ItemQuality(this.value + 1);
  }

  decrease() {
    if (this.value === this.MIN_VALUE) {
      return this;
    }

    return new ItemQuality(this.value - 1);
  }

  reset() {
    return new ItemQuality(this.MIN_VALUE);
  }
}

export default ItemQuality;
