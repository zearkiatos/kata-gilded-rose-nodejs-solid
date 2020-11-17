import ItemName from './ItemName';
import ItemSellIn from './ItemSellIn';
import ItemQuality from './ItemQuality';
import AgedBrie from './AgedBrie';
import BackagePasses from './BackagePasses';
import Sulfuras from './Sulfuras';
import StandardItem from './StandardItem';

class ItemFactory {
    static basedOn(rawName, rawSellIn, rawQuality) {
        const name = new ItemName(rawName);
        const sellIn = new ItemSellIn(rawSellIn);
        const quality = new ItemQuality(rawQuality);

        if(name.isAgedBrie()) return new AgedBrie(name, sellIn, quality);

        if(name.isBackstagePasses()) return new BackagePasses(name, sellIn, quality);

        if (name.isSulfuras()) return new Sulfuras(name, sellIn, quality);

        return new StandardItem(name, sellIn, quality);
    }
}

export default ItemFactory;