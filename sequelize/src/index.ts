import { User } from "./entity/User.js";

User.sync();

const user = await User.findOne({
    where: { id: "1" },
});

if (user) console.log(user.toJSON());
