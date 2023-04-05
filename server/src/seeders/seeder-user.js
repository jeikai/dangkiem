'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                name: "Cục đăng kiểm Việt Nam",
                username: "cucdangkiemvn",
                password: "c12345.",
                rolebit: 1,
                address: "Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội."
            },
            {
                name: "Trung tâm đăng kiểm Hà Nội 1",
                username: "hanoi1",
                password: "hn112345.",
                rolebit: 0,
                address: "Số 1, Lê Đức Thọ, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội"
            },
            {
                name: "Trung tâm đăng kiểm Hà Nội 2",
                username: "ttdkhanoi2",
                password: "hn212345.",
                rolebit: 0,
                address: "Số 10, ngõ 61, đường Nguyễn Chánh, phường Trung Hòa, quận Cầu Giấy, Hà Nội."
            },
            {
                name: "Trung tâm đăng kiểm thành phố Hồ Chí Minh 1",
                username: "hcm1",
                password: "ttdkhcm112345.",
                rolebit: 0,
                address: "Số 151 đường D1, phường 25, quận Bình Thạnh, TP. Hồ Chí Minh."
            },
            {
                name: "Trung tâm đăng kiểm thành phố Đà nẵng",
                username: "ttdkdn",
                password: "dn12345.",
                rolebit: 0,
                address: "Số 41-43 đường Duy Tân, quận Hải Châu, thành phố Đà Nẵng."
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
