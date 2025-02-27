import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateMockUsers = (count) => {
    return Array.from({ length: count }, () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync('coder123', 10),
        role: Math.random() < 0.5 ? 'user' : 'admin',
        pets: []
    }));
};

export const generateMockPets = (count) => {
    return Array.from({ length: count }, () => ({
        name: faker.animal.dog(),
        species: 'dog',
        age: faker.number.int({ min: 1, max: 15 }),
        adopted: false
    }));
};
