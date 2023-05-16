'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Registers', [
            {
                userId: "2",
                carId: "1",
                registerDate: "2022-06-02",
                expireDate: "2023-06-02",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "2",
                registerDate: "2022-09-05",
                expireDate: "2023-09-05",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "3",
                registerDate: "2023-10-26",
                expireDate: "2023-10-26",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "4",
                registerDate: "2023-10-26",
                expireDate: "2023-10-26",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "5",
                registerDate: "2023-11-09",
                expireDate: "2023-11-09",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "6",
                registerDate: "2022-05-06",
                expireDate: "2023-05-06",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "7",
                registerDate: "2022-12-19",
                expireDate: "2023-12-19",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "8",
                registerDate: "2022-11-30",
                expireDate: "2023-11-30",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "9",
                registerDate: "2022-07-10",
                expireDate: "2023-07-10",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "10",
                registerDate: "2022-06-13",
                expireDate: "2023-06-13",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "11",
                registerDate: "2022-08-07",
                expireDate: "2023-08-07",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "12",
                registerDate: "2022-10-14",
                expireDate: "2023-10-14",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "13",
                registerDate: "2022-11-20",
                expireDate: "2023-11-20",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "14",
                registerDate: "2022-09-24",
                expireDate: "2023-09-24",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "15",
                registerDate: "2022-04-20",
                expireDate: "2023-04-20",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "16",
                registerDate: "2022-09-06",
                expireDate: "2023-09-06",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "17",
                registerDate: "2022-08-08",
                expireDate: "2023-08-08",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "18",
                registerDate: "2022-11-05",
                expireDate: "2023-11-05",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "19",
                registerDate: "2022-04-21",
                expireDate: "2023-04-21",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "20",
                registerDate: "2022-07-18",
                expireDate: "2023-07-18",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "21",
                registerDate: "2022-05-21",
                expireDate: "2023-05-21",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "22",
                registerDate: "2022-12-06",
                expireDate: "2023-12-06",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "23",
                registerDate: "2022-10-29",
                expireDate: "2023-10-29",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "24",
                registerDate: "2022-03-20",
                expireDate: "2023-03-20",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "25",
                registerDate: "2022-05-24",
                expireDate: "2023-05-24",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "26",
                registerDate: "2022-10-13",
                expireDate: "2023-10-13",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "27",
                registerDate: "2022-06-17",
                expireDate: "2023-06-17",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "28",
                registerDate: "2022-06-20",
                expireDate: "2023-06-20",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "29",
                registerDate: "2022-08-28",
                expireDate: "2023-08-28",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: "2",
                carId: "30",
                registerDate: "2022-09-30",
                expireDate: "2023-09-30",
                createdAt: new Date(),
                updatedAt: new Date()
            }
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
