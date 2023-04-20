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
                registerDate: '2022/07/06',
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
                registerDate: '2022/07/06',
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
                registerDate: '2022/08/07',
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
                registerDate: '2022/07/06',
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
                registerDate: '2022/07/14',
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
                registerDate: '2022/07/17',
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
                registerDate: '2022/07/22',
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
                registerDate: '2022/02/04',
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
                registerDate: '2022/01/19',
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
                registerDate: '2022/01/15',
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
                registerDate: '2022/07/18',
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
                registerDate: '2022/12/25',
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
                registerDate: '2022/11/28',
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
                registerDate: '2022/01/06',
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
                registerDate: '2022/01/14',
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
                registerDate: '2021/06/06',
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
                registerDate: '2020/07/06',
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
                registerDate: '2020/07/08',
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
                registerDate: '2019/07/06',
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
                registerDate: '2018/07/06',
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
                registerDate: '2018/09/06',
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
                registerDate: '2021/09/06',
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
                registerDate: '2021/12/25',
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
                registerDate: '2017/07/06',
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
                registerDate: '2019/01/09',
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
                registerDate: '2021/07/03',
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
                registerDate: '2021/03/07',
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
                registerDate: '2021/03/22',
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
                registerDate: '2021/04/18',
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
                registerDate: '2020/01/14',
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
