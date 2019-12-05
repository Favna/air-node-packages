import { isObject } from './IsObject';

/**
 * Merges two objects
 * @param objTarget The object to be merged
 * @param objSource The object to merge
 */
export const mergeObjects = <
  A extends Record<string | number | symbol, unknown>,
  B extends Record<string | number | symbol, unknown>
>(objTarget: A & Partial<B>, objSource: B): A & B => {
  for (const key in objSource) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    objTarget[key] = isObject(objSource[key]) ?
      mergeObjects(objTarget[key] as A & Partial<B>, objSource[key] as B) :
      objSource[key];
  }

  return objTarget as A & B;
};

export default mergeObjects;