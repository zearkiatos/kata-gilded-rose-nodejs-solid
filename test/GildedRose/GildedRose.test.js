/* eslint-disable no-undef */
import Item from '../../src/GildedRose/Item';
import GildedRose from '../../src/GildedRose/GildedRose';
import UpdatableItemFactory from '../../src/GildedRose/UpdatableItemFactory';

describe('Test suite for GildedRose', () => {

    const listOf = (item) => {
        const updatableItem = []
        updatableItem.push(item)
        return updatableItem
    }
    test('Should test that sell in value is decreased', () => {
        const whateverItem = new Item('whatever', 10, 0);
        const updatableItemFactory = new UpdatableItemFactory();
        const updatableItem = updatableItemFactory.getBusinessLogic(whateverItem)

        const gildedRose = new GildedRose();
        gildedRose.updateQuality(listOf(updatableItem));

        expect(whateverItem.sellIn).toBe(9);
    });

    test('Should test that quality value is decreased', () => {
        const whateverItem = new Item('whatever', 1, 10);

        const gildedRose = new GildedRose(arrayWith(whateverItem));
        gildedRose.updateQuality();

        expect(whateverItem.quality).toBe(9);
    });

    test('Should test that quality decreases twice as much when sell by is passed', () => {
        const whateverItem = new Item('whatever', 0, 10);

        const gildedRose = new GildedRose(arrayWith(whateverItem));
        gildedRose.updateQuality();

        expect(whateverItem.quality).toBe(8);
    });

    test('Should test that quality is never negative', () => {
        const whateverItem = new Item('whatever', 0, 0);

        const gildedRose = new GildedRose(arrayWith(whateverItem));
        gildedRose.updateQuality();

        expect(whateverItem.quality).toBe(0);
    });

    test('Should test Aged Brie Increases quality with age', () => {
        const agedBrie = new Item('Aged Brie', 5, 1);

        const gildedRose = new GildedRose(arrayWith(agedBrie));
        gildedRose.updateQuality();

        expect(agedBrie.quality).toBe(2);
    });

    test('Should test quality never increases past fifty', () => {
        const agedBrie = new Item('Aged Brie', 5, 50);

        const gildedRose = new GildedRose(arrayWith(agedBrie));
        gildedRose.updateQuality();

        expect(agedBrie.quality).toBe(50);
    });

    test('Should sulfurus never changes', () => {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 25);

        const gildedRose = new GildedRose(arrayWith(sulfuras));
        gildedRose.updateQuality();

        expect(sulfuras.quality).toBe(25);
        expect(sulfuras.sellIn).toBe(0);
    });

    test('Should sulfurus never changes', () => {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 25);

        const gildedRose = new GildedRose(arrayWith(sulfuras));
        gildedRose.updateQuality();

        expect(sulfuras.quality).toBe(25);
        expect(sulfuras.sellIn).toBe(0);
    });

    test('Should sulfurus never changes', () => {
        const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 25);

        const gildedRose = new GildedRose(arrayWith(sulfuras));
        gildedRose.updateQuality();

        expect(sulfuras.quality).toBe(25);
        expect(sulfuras.sellIn).toBe(0);
    });

    test('Should Backstagepass Increases Quality by One if sell by greater then ten', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);

        const gildedRose = new GildedRose(arrayWith(backstagePasses));
        gildedRose.updateQuality();

        expect(backstagePasses.quality).toBe(21);
    });

    test('Should Backstagepass Increases Quality by One if sell by greater then ten', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20);

        const gildedRose = new GildedRose(arrayWith(backstagePasses));
        gildedRose.updateQuality();

        expect(backstagePasses.quality).toBe(22);
    });

    test('Should Backstagepass Increases quality by three if sell by smaller than five', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);

        const gildedRose = new GildedRose(arrayWith(backstagePasses));
        gildedRose.updateQuality();

        expect(backstagePasses.quality).toBe(23);
    });

    test('Should Backstagepass loses value after sell by passes', () => {
        const backstagePasses = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);

        const gildedRose = new GildedRose(arrayWith(backstagePasses));
        gildedRose.updateQuality();

        expect(backstagePasses.quality).toBe(0);
    });
    

})