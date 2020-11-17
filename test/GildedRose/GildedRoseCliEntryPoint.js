import ItemFactory from '../../src/GildedRose/ItemFactory';
import GildedRose from '../../src/GildedRose/GildedRose';

class GildedRoseCliEntryPoint {
    main(args) {
        console.log('OMGAI!');
        const items = [
            new ItemFactory.basedOn("+5 Dexterity Vest", 10, 20),
            new ItemFactory.basedOn("Aged Brie", 2, 0),
            new ItemFactory.basedOn("Elixir of the Mongoose", 5, 7),
            new ItemFactory.basedOn("Sulfuras, Hand of Ragnaros", 0, 80),
            new ItemFactory.basedOn("Sulfuras, Hand of Ragnaros", -1, 80),
            new ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new ItemFactory.basedOn("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            new ItemFactory.basedOn("Conjured Mana Cake", 3, 6)
        ];

        const app = new GildedRose();

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
            app.updateQuality(items);
        }
    }
}

export default GildedRoseCliEntryPoint;