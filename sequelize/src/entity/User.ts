import { Sequelize, DataTypes, Model } from "sequelize";
const sequelize = new Sequelize({ dialect: "sqlite", storage: "db.sqlite" });

class User extends Model {
    declare firstName: string;
    declare lastName: string;
}

User.init(
    {
        firstName: {
            type: DataTypes.STRING(32),
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING(32),
        },
        fullName: {
            type: DataTypes.VIRTUAL(),
        },
    },
    {
        getterMethods: {
            fullName() {
                return `${this.firstName} ${this.lastName}`;
            },
        },
        sequelize,
        modelName: "User",
    }
);

export { User };
