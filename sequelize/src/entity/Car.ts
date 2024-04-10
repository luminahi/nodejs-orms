import { Model, DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

class Car extends Model {}

Car.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        make: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true,
            get() {
                const rawValue: string = this.getDataValue("make");
                return rawValue.charAt(0).toUpperCase() + rawValue.substring(1);
            },
        },
        model: { type: DataTypes.STRING(64), unique: true, allowNull: false },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: "car",
        tableName: "car",
    }
);

export { Car };
