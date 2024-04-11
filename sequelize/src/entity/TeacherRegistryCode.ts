import { Model, DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

class TeacherRegistryCode extends Model {}

TeacherRegistryCode.init(
    {
        identifier: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            unique: true,
        },
    },
    {
        sequelize,
        modelName: "TeacherRegistryCode",
        timestamps: false,
        freezeTableName: true,
    }
);

export { TeacherRegistryCode };
