/**
 * @param obj - The object to remove the join table from
 * @param joinTable - The key of the join table which will be removed from the object
 * @param targetTable - The key of the target table present within the join table which will be moved to the root of the object
 * */
export function removeJoinTable<
  K extends keyof T,
  T extends {
    [key in K]: {
      [key in M]: any;
    };
  },
  M extends keyof T[K],
>(obj: T, joinTable: K, targetTable: M): Omit<T, K> & { [key in M]: T[K][M] } {
  const newObj = { ...obj } as any;

  newObj[targetTable] = obj[joinTable][targetTable];
  delete obj[joinTable];

  return newObj;
}
