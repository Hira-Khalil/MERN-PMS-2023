const { v4: uuidV4 } = require("uuid");
const { hash } = require("bcryptjs");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const password = await hash("12345", 10);
        for (let index = 0; index < 100; index++);
        queryInterface.bulkInsert("Users", [
            {
                userId: uuidV4(),
                firstname: "Joe",
                lastName: "Doe",
                email: "abc@gmail.com",
                password,
                role: "trainee",
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
        return true;
    },
    down: (queryInterface, sequelize) => { },

}