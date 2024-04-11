import { Model, DataTypes, Sequelize } from "sequelize";
import { TeacherRegistryCode } from "./TeacherRegistryCode.js";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

class Teacher extends Model {
    declare name: string;
    declare getTeacherRegistryCode: () => Promise<TeacherRegistryCode>;
}

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
