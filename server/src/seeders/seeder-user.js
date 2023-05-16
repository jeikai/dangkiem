'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: "Cục đăng kiểm Việt Nam",
                username: "cucdangkiemvn",
                password: "$2a$10$U6QY6LNxyz7F7Jythy8X1uZO6PIT4/WDA6omiHnpJiafW0i4VnoOq",
                rolebit: 1,
                address: "Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Trung tâm đăng kiểm Hà Nội 1",
                username: "hanoi1",
                password: "$2a$10$U6QY6LNxyz7F7Jythy8X1u6uF26ouIGL1SlwEk46TmZxxUtrur9O2",
                rolebit: 0,
                address: "Số 1, Lê Đức Thọ, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Trung tâm đăng kiểm Hà Nội 2",
                username: "ttdkhanoi2",
                password: "$2a$10$U6QY6LNxyz7F7Jythy8X1uP214Gjo2TPqUcAzHQlRTRR2zrRNw0a6",
                rolebit: 0,
                address: "Số 10, ngõ 61, đường Nguyễn Chánh, phường Trung Hòa, quận Cầu Giấy, Hà Nội.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Trung tâm đăng kiểm thành phố Hồ Chí Minh 1",
                username: "hcm1",
                password: "$2a$10$U6QY6LNxyz7F7Jythy8X1uKuw3KhL2haJ4YckDQqQZUFwbOCuxi9i",
                rolebit: 0,
                address: "Số 151 đường D1, phường 25, quận Bình Thạnh, TP. Hồ Chí Minh.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Trung tâm đăng kiểm thành phố Đà nẵng",
                username: "ttdkdn",
                password: "$2a$10$U6QY6LNxyz7F7Jythy8X1uV7cmibtz4hszIxQP2DXr9O8cbSpyrnK",
                rolebit: 0,
                address: "Số 41-43 đường Duy Tân, quận Hải Châu, thành phố Đà Nẵng.",
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
