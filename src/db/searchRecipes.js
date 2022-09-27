import { db } from './db';

export const searchRecipes = async (searchString) => {
  const connection = db.getConnection();
  const recipes = connection
    .collection('recipes')
    .find({ $text: { $search: searchString } })
    .toArray();
  return recipes;
};
