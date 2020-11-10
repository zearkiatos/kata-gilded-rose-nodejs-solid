import AgedBrie from "./AgedBrie";
import BackstagePasses from "./BackagePasses";
import StandardItem from "./StandardItem";
import Sulfuras from "./Sulfuras";

class UpdatableItemFactory {
    static initialization() {
        this.AGED_BRIE = "Aged Brie";
        this.BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
        this.SULFURAS = "Sulfuras, Hand of Ragnaros";
    }
    static constructor(item) {
        
        this.initialization();
        switch(item.name) {
            case this.AGED_BRIE:
                return new AgedBrie(item);
            case this.BACKSTAGE_PASSES:
                return new BackstagePasses(item);
            case this.SULFURAS:
                return new Sulfuras(item);
            default:
                return new StandardItem(item);
        }
    }
}

export default UpdatableItemFactory;