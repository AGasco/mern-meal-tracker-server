import { db } from './db';

export const deleteIngredient = async (name) => {
  const connection = db.getConnection();
  await connection.collection('ingredients').deleteOne({ name });
};
