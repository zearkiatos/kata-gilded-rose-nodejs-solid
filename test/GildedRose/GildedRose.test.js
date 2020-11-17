/* eslint-disable no-undef */
import ItemFactory from '../../src/GildedRose/ItemFactory';
import GildedRose from '../../src/GildedRose/GildedRose';
import ItemSellIn from '../../src/GildedRose/ItemSellIn';
import ItemQuality from '../../src/GildedRose/ItemQuality';

describe('Test suite for GildedRose', () => {

    const listOf = (item) => {
        const updatableItem = []
        updatableItem.push(item)
        return updatableItem
    }
    test('Should test that sell in value is decreased', () => {
        const whateverItem = ItemFactory.basedOn('whatever', 10, 0);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(whateverItem));

        const expectedSellIn = new ItemSellIn(9);
        expect(expectedSellIn.value).toBe(whateverItem.sellIn.value);
    });

    test('Should test that quality value is decreased', () => {
        const whateverItem = ItemFactory.basedOn('whatever', 1, 10);
        
        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(whateverItem));


        const expectedQuality = new ItemSellIn(9);
        expect(expectedQuality.value).toBe(whateverItem.quality.value);
    });

    test('Should test that quality decreases twice as much when sell by is passed', () => {
        const whateverItem = ItemFactory.basedOn('whatever', 0, 10);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(whateverItem));

        const expectedQuality = new ItemSellIn(8);
        expect(expectedQuality.value).toBe(whateverItem.quality.value);
    });

    test('Should test that quality is never negative', () => {
        const whateverItem = ItemFactory.basedOn('whatever', 0, 0);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(whateverItem));

        const expectedQuality = new ItemSellIn(0);
        expect(expectedQuality.value).toBe(whateverItem.quality.value);
    });

    test('Should test Aged Brie Increases quality with age', () => {
        const agedBrie = ItemFactory.basedOn('Aged Brie', 5, 1);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(agedBrie));

        const expectedAgedBrie = new ItemSellIn(2);
        expect(expectedAgedBrie.value).toBe(agedBrie.quality.value);
    });

    test('Should test quality never increases past fifty', () => {
        const agedBrie = ItemFactory.basedOn('Aged Brie', 5, 50);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(agedBrie));

        const expectedAgedBrie = new ItemSellIn(50);
        expect(expectedAgedBrie.value).toBe(agedBrie.quality.value);
    });

    test('Should sulfurus never changes', () => {
        const sulfuras = ItemFactory.basedOn('Sulfuras, Hand of Ragnaros', 0, 25);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(sulfuras));

        const expectedSulfurasSellIn = new ItemSellIn(0);
        const expectedSulfurasQuality = new ItemQuality(25);
        expect(expectedSulfurasQuality.value).toBe(sulfuras.quality.value);
        expect(expectedSulfurasSellIn.value).toBe(sulfuras.sellIn.value);
    });

    test('Should Backstagepass Increases Quality by One if sell by greater then ten', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 11, 20);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(backstagePasses));

        const expectedBackstagePasses = new ItemSellIn(21);
        expect(expectedBackstagePasses.value).toBe(backstagePasses.quality.value);
    });

    test('Should Backstagepass Increases Quality by Two if sell by greater then ten', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 6, 20);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(backstagePasses));

        const expectedBackstagePasses = new ItemSellIn(22);
        expect(expectedBackstagePasses.value).toBe(backstagePasses.quality.value);
    });

    test('Should Backstagepass Increases quality by three if sell by smaller than five', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 5, 20);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(backstagePasses));

        const expectedBackstagePasses = new ItemSellIn(23);
        expect(expectedBackstagePasses.value).toBe(backstagePasses.quality.value);
    });

    test('Should Backstagepass loses value after sell by passes', () => {
        const backstagePasses = ItemFactory.basedOn('Backstage passes to a TAFKAL80ETC concert', 0, 20);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(backstagePasses));

        const expectedBackstagePasses = new ItemSellIn(0);
        expect(expectedBackstagePasses.value).toBe(backstagePasses.quality.value);
    });
    

})