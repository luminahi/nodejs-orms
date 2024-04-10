import { Op, Sequelize } from "sequelize";
import { User } from "./entity/User.js";
import { Car } from "./entity/Car.js";

// await User.sync({ force: true });

// const user1 = await User.create({ firstName: "alexis", lastName: "lion" });
// const user2 = await User.create({ firstName: "sarah", lastName: "kaz" });
// const user3 = await User.create({ firstName: "aoi", lastName: "curry" });

// const res1 = await User.findOne({ where: { id: "1" } });
// const res2 = await User.findAll({ attributes: ["lastName"] });

// res2.forEach((value) => console.log(value.toJSON()));

// const resCountAndAllRows = await User.findAndCountAll();

// const resAllFn = await User.findAll({
//     attributes: {
//         include: [[Sequelize.fn("COUNT", Sequelize.col("firstName")), "total"]],
//         exclude: ["firstName", "lastName", "id"],
//     },
// });

// console.log(resAllFn);

// const resWhere1 = await User.findAll({
//     where: {
//         [Op.or]: [
//             {
//                 id: {
//                     [Op.gte]: 2,
//                 },
//             },
//             {
//                 firstName: {
//                     [Op.endsWith]: "i",
//                 },
//             },
//         ],
//     },
// });

// resWhere1.forEach((value) => console.log(value.toJSON()));

// const savedUsers = await User.bulkCreate([
//     { firstName: "alexis", lastName: "lion" },
//     { firstName: "sarah", lastName: "kaz" },
//     { firstName: "aoi", lastName: "curry" },
// ]);

// savedUsers.forEach((value) => console.log(value.toJSON()));

// const sortedUsers = await User.findAll({
//     order: [["firstName", "DESC"]],
//     attributes: ["firstName"],
//     limit: 2,
// });

// sortedUsers.forEach((value) => {
//     console.log(value.toJSON());
// });

// const foundUser = await User.findByPk(1);

// console.log(foundUser?.toJSON());

// const builtUser = User.build({
//     firstName: "alex",
//     lastName: "lumia",
//     fullName: "",
// });

// console.log(builtUser.toJSON());

await Car.sync({ force: true });

const car1 = await Car.create({ make: "toyota", model: "corolla" });
const car2 = await Car.create({ make: "fiat", model: "mobi" });
const car3 = await Car.create({ make: "honda", model: "civic" });

console.log(car1.toJSON(), car2.toJSON(), car3.toJSON());
