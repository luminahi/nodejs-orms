import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
});

class User extends Model {
    declare firstName: string;
    declare lastName: string;
    declare fullname: string;
}

User.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING(32),
            allowNull: false,
            get() {
                const value: string | null = this.getDataValue("firstName");
                return value ? value.toUpperCase() : null;
            },
        },
        lastName: {
            type: DataTypes.STRING(32),
            get() {
                const value: string | null = this.getDataValue("lastName");
                return value ? value.toUpperCase() : null;
            },
        },
        fullName: {
            type: DataTypes.VIRTUAL(),
            get() {
                const firstName: string = this.getDataValue("firstName");
                const lastName: string = this.getDataValue("lastName");
                return `${firstName} ${lastName}`;
            },
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: false,
        freezeTableName: true,
    }
);

export { User };
