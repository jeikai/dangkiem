'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cars', [
            {
                driverId: 16,
                plateNumber: 'XYZ-5678',
                manufacture: 'Honda',
                model: 'Civic',
                color: 'Red',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 17,
                plateNumber: 'DEF-9012',
                manufacture: 'Mazda',
                model: 'CX-5',
                color: 'Black',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 18,
                plateNumber: 'GHI-3456',
                manufacture: 'Ford',
                model: 'Focus',
                color: 'Blue',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 19,
                plateNumber: 'JKL-7890',
                manufacture: 'Toyota',
                model: 'Corolla',
                color: 'White',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 20,
                plateNumber: 'MNO-1234',
                manufacture: 'Honda',
                model: 'Accord',
                color: 'Silver',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 21,
                plateNumber: 'PQR-5678',
                manufacture: 'Nissan',
                model: 'Altima',
                color: 'Black',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 22,
                plateNumber: 'STU-9012',
                manufacture: 'Hyundai',
                model: 'Sonata',
                color: 'Gray',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 23,
                plateNumber: 'VWX-3456',
                manufacture: 'Toyota',
                model: 'Rav4',
                color: 'Blue',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 24,
                plateNumber: 'YZA-7890',
                manufacture: 'Honda',
                model: 'Pilot',
                color: 'White',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 25,
                plateNumber: 'BCD-1234',
                manufacture: 'Mitsubishi',
                model: 'Outlander',
                color: 'Silver',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 26,
                plateNumber: 'EFG-5678',
                manufacture: 'Toyota',
                model: 'Vios',
                color: 'Black',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 27,
                plateNumber: 'HIJ-9012',
                manufacture: 'Honda',
                model: 'City',
                color: 'Red',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 28,
                plateNumber: 'KLM-3456',
                manufacture: 'Ford',
                model: 'Ranger',
                color: 'Gray',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 29,
                plateNumber: 'NOP-7890',
                manufacture: 'Mazda',
                model: '3',
                color: 'White',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 30,
                plateNumber: 'QRS-1234',
                manufacture: 'Toyota',
                model: 'Innova',
                color: 'Silver',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 31,
                plateNumber: 'TUV-5678',
                manufacture: 'Nissan',
                model: 'Sentra',
                color: 'Black',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 32,
                plateNumber: 'WXY-9012',
                manufacture: 'Hyundai',
                model: 'Tucson',
                color: 'Blue',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 33,
                plateNumber: 'ZAB-3456',
                manufacture: 'Toyota',
                model: 'Fortuner',
                color: 'White',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 34,
                plateNumber: 'CDE-7890',
                manufacture: 'Honda',
                model: 'Fit',
                color: 'Red',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 35,
                plateNumber: 'FGH-1234',
                manufacture: 'Mitsubishi',
                model: 'Xpander',
                color: 'Silver',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverId: 36,
                plateNumber: 'IJK-5678',
                manufacture: 'Toyota',
                model: 'Corolla',
                color: 'Black',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 37,
                plateNumber: 'LMN-9012',
                manufacture: 'Ford',
                model: 'Explorer',
                color: 'Blue',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 38,
                plateNumber: 'OPQ-3456',
                manufacture: 'Hyundai',
                model: 'Accent',
                color: 'Gray',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 39,
                plateNumber: 'RST-7890',
                manufacture: 'Kia',
                model: 'Sorento',
                color: 'White',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 40,
                plateNumber: 'UVW-1234',
                manufacture: 'Mazda',
                model: 'CX-5',
                color: 'Red',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 16,
                plateNumber: 'XYZ-5678',
                manufacture: 'Toyota',
                model: 'Yaris',
                color: 'Silver',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 17,
                plateNumber: 'ABC-9012',
                manufacture: 'Honda',
                model: 'Civic',
                color: 'Black',
                registerCity: 'Da Nang',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 18,
                plateNumber: 'DEF-3456',
                manufacture: 'Nissan',
                model: 'Kicks',
                color: 'Blue',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 19,
                plateNumber: 'GHI-7890',
                manufacture: 'Hyundai',
                model: 'Santa Fe',
                color: 'White',
                registerCity: 'Ho Chi Minh City',
                purpose: 'Personal',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverId: 20,
                plateNumber: 'JKL-1234',
                manufacture: 'Toyota',
                model: 'RAV4',
                color: 'Gray',
                registerCity: 'Hanoi',
                purpose: 'Business',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
