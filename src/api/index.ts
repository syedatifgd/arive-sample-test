import {PRODUCT_NEWS, CATEGORIES_DATA} from '../fixtures';

// Mock Delay for API
const delay = (0.5 + Math.random() * 2) * 1000;

export function getProductNews() {
  return new Promise((resolve, _) => {
    setTimeout(function () {
      resolve(PRODUCT_NEWS);
    }, delay);
  });
}

export function getCategories() {
  return new Promise((resolve, _) => {
    setTimeout(function () {
      resolve(CATEGORIES_DATA);
    }, delay);
  });
}
