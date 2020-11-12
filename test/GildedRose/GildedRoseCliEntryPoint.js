
import Item from '../../src/GildedRose/Item';
import GildedRose from '../../src/GildedRose/GildedRose';
import UpdatableItemFactory from '../../src/GildedRose/UpdatableItemFactory';

class GildedRoseCliEntryPoint {
    main(args) {
        console.log('OMGAI!');
        const items = [
            new Item("+5 Dexterity Vest", 10, 20),
            new Item("Aged Brie", 2, 0),
            new Item("Elixir of the Mongoose", 5, 7),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80),
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            new Item("Conjured Mana Cake", 3, 6)
        ];

        const updatableItems = UpdatableItemFactory.basedOn(items)

        const app = new GildedRose(items);

        let days = 2;
        if (args.length > 0) {
            days = parseInt(args[0]) + 1;
        }

        for(let i = 0; i< days; i++) {
            console.log(`-------- day ${i} --------`);
            console.log('name, sellIn, quality');
            for(let item of items) {
                console.log(item);
            }
            console.log();
            app.updateQuality(updatableItems);
        }
    }
}

export default GildedRoseCliEntryPoint;