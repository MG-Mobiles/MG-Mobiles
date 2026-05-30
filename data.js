/**
 * data.js — Default product catalogue
 *
 * Each product object:
 *  id        {number}  Unique auto-incremented integer
 *  name      {string}  Display name shown on the till
 *  category  {string}  Used for filter tabs in the sell view
 *  price     {number}  Unit selling price in dollars (no tax)
 *  costPrice {number}  Unit cost price (what we paid for it)
 *  stock     {number}  Current units on hand
 *  minStock  {number}  Threshold below which a "low stock" warning fires
 *  barcode   {string}  Scanned or typed barcode; must be unique
 */

const DEFAULT_PRODUCTS = [
  { id:  1, name: 'Whole Milk 1L',          category: 'Dairy',     price: 1.49, costPrice: 0.90, stock: 45, minStock: 10, barcode: '001' },
  { id:  2, name: 'Sourdough Bread',         category: 'Bakery',    price: 3.29, costPrice: 1.80, stock: 12, minStock:  5, barcode: '002' },
  { id:  3, name: 'Free Range Eggs (12)',    category: 'Dairy',     price: 4.99, costPrice: 3.20, stock: 28, minStock:  8, barcode: '003' },
  { id:  4, name: 'Chicken Breast 500g',     category: 'Meat',      price: 6.49, costPrice: 4.10, stock: 18, minStock:  5, barcode: '004' },
  { id:  5, name: 'Roma Tomatoes 1kg',       category: 'Produce',   price: 2.19, costPrice: 1.20, stock: 35, minStock: 10, barcode: '005' },
  { id:  6, name: 'Cheddar Cheese 200g',     category: 'Dairy',     price: 3.79, costPrice: 2.30, stock: 22, minStock:  6, barcode: '006' },
  { id:  7, name: 'Orange Juice 1L',         category: 'Beverages', price: 2.99, costPrice: 1.70, stock:  4, minStock:  8, barcode: '007' },
  { id:  8, name: 'Pasta Spaghetti 500g',    category: 'Dry Goods', price: 1.89, costPrice: 0.95, stock: 50, minStock: 15, barcode: '008' },
  { id:  9, name: 'Butter 250g',             category: 'Dairy',     price: 2.49, costPrice: 1.50, stock: 16, minStock:  5, barcode: '009' },
  { id: 10, name: 'Sparkling Water 1.5L',    category: 'Beverages', price: 1.29, costPrice: 0.60, stock:  0, minStock: 20, barcode: '010' },
  { id: 11, name: 'Yogurt Natural 500g',     category: 'Dairy',     price: 2.09, costPrice: 1.20, stock:  9, minStock:  8, barcode: '011' },
  { id: 12, name: 'Mixed Salad 200g',        category: 'Produce',   price: 2.79, costPrice: 1.50, stock:  7, minStock:  5, barcode: '012' },
  { id: 13, name: 'Ground Beef 400g',        category: 'Meat',      price: 5.99, costPrice: 3.80, stock: 11, minStock:  5, barcode: '013' },
  { id: 14, name: 'Tomato Sauce 400g',       category: 'Dry Goods', price: 1.59, costPrice: 0.80, stock: 38, minStock: 12, barcode: '014' },
  { id: 15, name: 'Apple Juice 1L',          category: 'Beverages', price: 2.49, costPrice: 1.40, stock:  6, minStock:  8, barcode: '015' },
  { id: 16, name: 'Croissant x4',            category: 'Bakery',    price: 3.99, costPrice: 2.20, stock:  3, minStock:  5, barcode: '016' },
  { id: 17, name: 'Olive Oil 500ml',         category: 'Dry Goods', price: 7.49, costPrice: 5.00, stock: 20, minStock:  5, barcode: '017' },
  { id: 18, name: 'Bananas 1kg',             category: 'Produce',   price: 1.39, costPrice: 0.70, stock: 40, minStock: 10, barcode: '018' },
];

/** Starting value for the next auto-increment ID. */
const DEFAULT_NEXT_ID = 19;

/** VAT / tax rate — set to 0 (no tax). */
const TAX_RATE = 0;
