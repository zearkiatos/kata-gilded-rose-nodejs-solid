const Item = require('../../src/GildedRose/Item');
const GildedRose = require('../../src/GildedRose/GildedRose');
const { expectationFailed } = require('@hapi/boom');
describe('Test suite for GildedRose', () => {

    const arrayWith = (item) => {
        return [item]
    }
    test('Should test that sell in value is decreased', () => {
        const whateverItem = new Item('whatever', 10, 0);

        const gildedRose = new GildedRose(arrayWith(whateverItem));
        gildedRose.updateQuality();

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
})