import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({ dialect: "sqlite", storage: "db.sqlite" });

class Team extends Model {}

Team.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false,
        },
    },
    { sequelize, freezeTableName: true, modelName: "team", timestamps: false }
);

export { Team };
