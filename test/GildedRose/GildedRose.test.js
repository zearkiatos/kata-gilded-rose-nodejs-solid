/* eslint-disable no-undef */
import ItemFactory from '../../src/GildedRose/ItemFactory';
import GildedRose from '../../src/GildedRose/GildedRose';
import ItemSellIn from '../../src/GildedRose/ItemSellIn';

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
        const whateverItem = new ItemFactory.basedOn('whatever', 0, 10);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(whateverItem);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(whateverItem.quality).toBe(8);
    });

    test('Should test that quality is never negative', () => {
        const whateverItem = new Item('whatever', 0, 0);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(whateverItem);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(whateverItem.quality).toBe(0);
    });

    test('Should test Aged Brie Increases quality with age', () => {
        const agedBrie = new Item('Aged Brie', 5, 1);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(agedBrie);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(agedBrie.quality).toBe(2);
    });

    test('Should test quality never increases past fifty', () => {
        const agedBrie = new Item('Aged Brie', 5, 50);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(agedBrie);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(agedBrie.quality).toBe(50);
    });

    test('Should sulfurus never changes', () => {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 25);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(sulfuras);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(sulfuras.quality).toBe(25);
        expect(sulfuras.sellIn).toBe(0);
    });

    test('Should Backstagepass Increases Quality by One if sell by greater then ten', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(backstagePasses);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(backstagePasses.quality).toBe(21);
    });

    test('Should Backstagepass Increases Quality by Two if sell by greater then ten', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(backstagePasses);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(backstagePasses.quality).toBe(22);
    });

    test('Should Backstagepass Increases quality by three if sell by smaller than five', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(backstagePasses);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(backstagePasses.quality).toBe(23);
    });

    test('Should Backstagepass loses value after sell by passes', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(backstagePasses);

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(backstagePasses.quality).toBe(0);
    });
    

})