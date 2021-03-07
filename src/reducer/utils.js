import { Map } from 'immutable';

export const arrToMap = (arr, DataModal) => arr.reduce((acc, item) => acc.set(item.id, DataModal ? new DataModal(item) : item), new Map({}));
