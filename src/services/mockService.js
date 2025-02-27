import User from '../models/User.js';
import Pet from '../models/Pet.js';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';

export const insertMockData = async (userCount, petCount) => {
    const users = generateMockUsers(userCount);
    const pets = generateMockPets(petCount);

    await User.insertMany(users);
    await Pet.insertMany(pets);
};