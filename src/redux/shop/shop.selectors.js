import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
  [selectShop],
  (shop) => shop.collections //this function returns the collection "promissed" by the selectCollections
);

export const selectCollectionsForPreview = createSelector (
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);