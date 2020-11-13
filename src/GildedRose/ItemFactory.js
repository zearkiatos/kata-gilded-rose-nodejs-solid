import ItemName from './ItemName';
import ItemSellIn from './ItemSellIn';
import ItemQuality from './ItemQuality';

class ItemFactory {
    static basedOn(rawName, rawSellIn, rawQuality) {
        const name = new ItemName(rawName);
    }
}

export default ItemFactory;