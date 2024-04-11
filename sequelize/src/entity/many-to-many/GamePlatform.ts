import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize({ dialect: "sqlite", storage: "db.sqlite" });

class GamePlatform extends Model {}

GamePlatform.init(
    {
        game_id: {
            type: DataTypes.INTEGER,
        },
        platform_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "game_platform",
        timestamps: false,
    }
);

export { GamePlatform };
