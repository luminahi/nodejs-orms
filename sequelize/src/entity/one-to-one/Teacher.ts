import { Model, DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

class Teacher extends Model {}

Teacher.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "teacher",
        timestamps: false,
        freezeTableName: true,
    }
);

export { Teacher };
