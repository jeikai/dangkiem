'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Driver', [
            {
                driverName: 'Nguyễn Thành Long',
                dateOfBirth: '1990-01-15',
                address: 'Số 5, đường Nguyễn Du, phường 7, quận 3, TP. HCM',
                phoneNumber: '0901111222',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Trần Thị Mai',
                dateOfBirth: '1995-03-20',
                address: 'Số 15, đường Nguyễn Huệ, phường Bến Nghé, quận 1, TP. HCM',
                phoneNumber: '0902222333',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Lê Văn An',
                dateOfBirth: '1988-05-25',
                address: 'Số 8, đường Ngô Tất Tố, phường 22, quận Bình Thạnh, TP. HCM',
                phoneNumber: '0903333444',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Phạm Văn Đông',
                dateOfBirth: '1992-06-10',
                address: 'Số 12, đường Lê Thánh Tôn, phường Bến Nghé, quận 1, TP. HCM',
                phoneNumber: '0904444555',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Ngô Thị Thanh',
                dateOfBirth: '1985-09-05',
                address: 'Số 20, đường Nam Kỳ Khởi Nghĩa, phường Bến Nghé, quận 1, TP. HCM',
                phoneNumber: '0905555666',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Vũ Thị Ngọc',
                dateOfBirth: '1998-12-31',
                address: 'Số 30, đường Trần Hưng Đạo, phường Cầu Ông Lãnh, quận 1, TP. HCM',
                phoneNumber: '0906666777',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Nguyễn Văn Huy',
                dateOfBirth: '1991-02-14',
                address: 'Số 25, đường Cách Mạng Tháng 8, phường 7, quận 3, TP. HCM',
                phoneNumber: '0907777888',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Lê Thị Hồng',
                dateOfBirth: '1983-04-28',
                address: 'Số 10, đường Nguyễn Cư Trinh, phường Phạm Ngũ Lão, quận 1, TP. HCM',
                phoneNumber: '0908888999',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Trần Văn Tài',
                dateOfBirth: '1994-07-02',
                address: 'Số 35, đường Điện Biên Phủ, phường 17, quận Bình Thạnh, TP. HCM',
                phoneNumber: '0909999000',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                driverName: 'Trần Thị Bình',
                dateOfBirth: '1993-02-15',
                address: 'Số 10, đường Nguyễn Trãi, phường Thanh Xuân, quận Thanh Xuân, Hà Nội',
                phoneNumber: '0915555666',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Phạm Văn Cấn',
                dateOfBirth: '1988-05-05',
                address: 'Số 15, đường Lê Duẩn, phường Mỹ Đình, quận Nam Từ Liêm, Hà Nội',
                phoneNumber: '0902222777',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Đỗ Thị Danh',
                dateOfBirth: '1997-11-12',
                address: 'Số 3, đường Lý Thường Kiệt, phường Lê Lợi, quận Hải Châu, Đà Nẵng',
                phoneNumber: '0988888999',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Lê Văn Quyền',
                dateOfBirth: '1990-09-01',
                address: 'Số 12, đường Ngô Quyền, phường Ngô Quyền, quận Hải Phòng, Hải Phòng',
                phoneNumber: '0936666777',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Trần Văn Diệu',
                dateOfBirth: '1985-04-30',
                address: 'Số 5, đường Hoàng Diệu, phường Thanh Bình, quận Hải Châu, Đà Nẵng',
                phoneNumber: '0967777888',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Nguyễn Thị Vương',
                dateOfBirth: '1992-07-09',
                address: 'Số 6, đường Hùng Vương, phường Hải Châu 1, quận Hải Châu, Đà Nẵng',
                phoneNumber: '0974444555',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Trần Văn Lợi',
                dateOfBirth: '1994-12-25',
                address: 'Số 8, đường Lê Lợi, phường Thanh Bình, quận Hải Châu, Đà Nẵng',
                phoneNumber: '0983333444',
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                driverName: 'Nguyễn Văn Huệ',
                dateOfBirth: '1989-10-17',
                address: 'Số 7, đường Nguyễn Huệ, phường Phú Hội, quận Huế, Thừa Thiên Huế',
                phoneNumber: '0914444555',
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
