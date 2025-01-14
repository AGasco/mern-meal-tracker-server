import { db } from './db';

export const getMeals = async () => {
  const connection = db.getConnection();
  const meals = await connection.collection('meals').find({}).toArray();
  return meals;
};
