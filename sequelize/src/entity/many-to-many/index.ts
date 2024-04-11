import { Game } from "./Game.js";
import { Platform } from "./Platform.js";
import { GamePlatform } from "./GamePlatform.js";

Game.belongsToMany(Platform, {
    through: GamePlatform,
    foreignKey: "game_id",
});

Platform.belongsToMany(Game, {
    through: GamePlatform,
    foreignKey: "platform_id",
});

await GamePlatform.sync({ force: true });
await Game.sync({ force: true });
await Platform.sync({ force: true });

await Game.create({ name: "TLoZ: A Link to the Past" });
await Game.create({ name: "TES: Skyrim" });
await Game.create({ name: "TES: Oblivion" });

await Platform.create({ name: "PC" });
await Platform.create({ name: "Switch" });

await GamePlatform.create({ game_id: 1, platform_id: 2 });
await GamePlatform.create({ game_id: 2, platform_id: 1 });
await GamePlatform.create({ game_id: 3, platform_id: 1 });

const res = await Game.findAll({ include: { model: Platform } });

res.forEach((value) => {
    console.log(value.toJSON());
});
